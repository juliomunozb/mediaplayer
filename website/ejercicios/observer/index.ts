interface Observer {
  update: (data: any) => void;
}

interface Subject {
  suscribe: (observer: Observer) => void;
  unsuscribe: (observer: Observer) => void;
}

//recibe los cambios de precio y le avisará a sus suscriptores
class BitcoinPrice implements Subject {
  observers: Observer[] = [];
  constructor() {
    const input = document.querySelector("#value");
    const el: HTMLInputElement = input as HTMLInputElement;
    el.addEventListener("input", () => {
      this.notify(el.value);
    });
  }

  suscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsuscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });
    this.observers.splice(index, 1);
  }
  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;
  constructor() {
    const em = document.querySelector("#price");
    this.el = em as HTMLElement;
  }
  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();
value.suscribe(display);
setTimeout(() => value.unsuscribe(display), 5000);
