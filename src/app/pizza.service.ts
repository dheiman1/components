import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    // This is a pretend const that would 
    // ultimately come from a web service call
    const pizzaToppingsFromWebService = [
     {name: 'Peperoni', price: 1.50} 
     , {name: 'Olives', price: 3.50} 
    ];

    return pizzaToppingsFromWebService.map( x=> ({
      ...x
      , checked: false
    }));
  }
}