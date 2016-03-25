import {Component} from 'angular2/core';
import {Keg} from './keg.model';

//[(ngModel)] = creates two-way data binding, when we click on item we can both display and change info

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <h3>Edit your Beer:  {{ keg.brand }} {{ keg.name }} {{keg.price}} {{keg.alcohol}}</h3>
    <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>

    <input [(ngModel)]="keg.alcohol" class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]="keg.price" class="col-sm-8 input-lg keg-form"/>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
