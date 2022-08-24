//import { isInteger } from "core-js/core/number";

import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      alert('nao posso');
      //this.validate(e);
    });
  }






























//export default class Login {
  //  constructor(formClass) {
    //    this.form = document.querySelector(formClass);
    //}
    //init() {
      //  this.events();
    //}

    //events() {
    //if(!this.form) return;
    //this.form.addEventListener('submit', e => {
    //e.preventDefault();          
    //alert('Form não enviado');
    //});
        
  //}

}