class Field {
  errors: string[];
  input: HTMLInputElement;
  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];
    let errorMessage = document.createElement("p");
    //Sovled – TypeScript error “Object is possibly ‘null’ or ‘undefined'” : Add ! (exclamation mark) after a property/variable name
    // Solution in :https://bytenota.com/sovled-typescript-error-object-is-possibly-null-or-undefined/
    errorMessage.className = "text-danger";
    this.input.parentNode!.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener("input", () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || "";
    });
  }
  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;
  field.validate = function () {
    validate();
    let value = field.input.value;
    if (!value) {
      field.errors.push("Requerido");
    }
  };
  return field;
}
function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;
  field.validate = function () {
    validate();
    let value = field.input.value;
    //Buscar caracter en cadena
    if (value.indexOf("@") === -1) {
      field.errors.push("Debe ser un email");
    }
  };
  return field;
}
const input = document.querySelector("#email") as HTMLInputElement;
let field = new Field(input);
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);
