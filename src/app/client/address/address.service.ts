import { Address } from './address.model';
import { Subject } from 'rxjs/Subject';

export class AddressService {
  addressesChanged = new Subject<Address[]>();
  startedEditing = new Subject<number>();
  
  private addresses: Address[] = [
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
