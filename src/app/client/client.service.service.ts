import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Client } from './client.model';
import { Address } from './address/address.model';
import { AddressService } from './address/address.service';

@Injectable()
export class ClientService {

  clientChanged = new Subject<Client[]>();
  
   private clients: Client[] = [
     new Client(
       'DFA6DBFC-A219-400F-B216-EDBA62CAD282',
       'Joana da Silva',
       'joana.silva@netrew.com',
       'https://static.pexels.com/photos/255349/pexels-photo-255349.jpeg',
       [
         new Address('41D66DCA-6785-415B-8FB0-71EDD114A1B3','Rua das Camelias', '123','405CE425-147C-4D06-9BB9-E99CD53DDCF3'),
         new Address('254F7D0F-0D91-4901-BB00-ACB77EF9409F','Rua João Bosco', '2B','E7B1371A-3500-48E8-A474-8BAA4A474DCF'),
       ])
   ];

   constructor(private slService: AddressService) {}

   getClients() {
    return this.clients.slice();
  }

  getClient(index: number) {
    return this.clients[index];
  }

  addAddressesToList(addresses: Address[]) {
    this.slService.addAddresses(addresses);
  }

  addClient(client: Client) {
    this.clients.push(client);
    this.clientChanged.next(this.clients.slice());
  }

  updateClient(index: number, newClient: Client) {
    this.clients[index] = newClient;
    this.clientChanged.next(this.clients.slice());
  }

  deleteClient(index: number) {
    this.clients.splice(index, 1);
    this.clientChanged.next(this.clients.slice());
  }

}
