import { Address } from './address.model';
import { Subject } from 'rxjs/Subject';

export class AddressService {
  addressesChanged = new Subject<Address[]>();
  startedEditing = new Subject<number>();
  private addresses: Address[] = [
    new Address('41D66DCA-6785-415B-8FB0-71EDD114A1B3','Rua das Camelias', '123','405CE425-147C-4D06-9BB9-E99CD53DDCF3'),
    new Address('254F7D0F-0D91-4901-BB00-ACB77EF9409F','Rua João Bosco', '2B','E7B1371A-3500-48E8-A474-8BAA4A474DCF'),
  ];

  getAdresses() {
    return this.addresses.slice();
  }

  getAddress(index: number) {
    return this.addresses[index];
  }

  addAddress(address: Address) {
    this.addresses.push(address);
    this.addressesChanged.next(this.addresses.slice());
  }

  addAddresses(addresses: Address[]) {
    this.addresses.push(...addresses);
    this.addressesChanged.next(this.addresses.slice());
  }

  updateAddress(index: number, newAddress: Address) {
    this.addresses[index] = newAddress;
    this.addressesChanged.next(this.addresses.slice());
  }

  deleteAddress(index: number) {
    this.addresses.splice(index, 1);
    this.addressesChanged.next(this.addresses.slice());
  }
}
