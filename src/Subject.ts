import { Flight } from "./entity/Flight.ts";
import { Observer } from "./Observer.ts";

export abstract class Subject {
 private observers: Array<Observer> = [];

 public register(observer: Observer): void {
    this.observers.push(observer);
  }



  public unregister(observer: Observer): void {
  this.observers = this.observers.filter(o => o !== observer);
}


  public updateObservers(flight: Flight, oldflight: Flight | null = null): void {
    for (const o of this.observers) {
        o.update(flight, oldflight);
  }
  }
  
}