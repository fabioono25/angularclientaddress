import {Component, NgModule, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { AddressType } from '../address.type.model';

@Component({
  selector: 'app-address-type-list',
  templateUrl: './address-type-list.component.html',
  styleUrls: ['./address-type-list.component.css']
})
export class AddressTypeListComponent implements OnInit {

  selectedType:AddressType = new AddressType('E7B1371A-3500-48E8-A474-8BAA4A474DCF', 'Residence Address');

  addressTypes = [
        new AddressType('CA7D233F-260F-48EE-8875-60CDFAD14764', 'Shipping Address'),
        new AddressType('E7B1371A-3500-48E8-A474-8BAA4A474DCF', 'Residence Address'),
        new AddressType('4A647CFA-81E8-461C-8D06-9A2AB9164370', 'Location Address'),
        new AddressType('405CE425-147C-4D06-9BB9-E99CD53DDCF3', 'Billing Address')
  ];

  constructor() { }

  ngOnInit() {
  }

}
