import { Address } from './address/address.model';

export class Client {
  public id: string;
  public name: string;
  public email: string;
  public imagePath: string;
  public addresses: Address[];

  constructor(id: string, name: string, email: string, imagePath: string, addresses: Address[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.imagePath = imagePath;
    this.addresses = addresses;
  }
}
