import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'ag-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent{

  titles: Array<string> = ['', 'Herr', 'Frau', 'Dr'];
  model: Object = {};

  constructor(){
    this.model = new Contact( '', this.titles[0], '');
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  // send form
  onSubmit() {
    alert('send email');
  }

}
