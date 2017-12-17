import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ClientService } from '../client.service.service';
import { AddressType } from '../address/address.type.model';
import { AddressTypeListComponent } from '../address/address-type-list/address-type-list.component';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  id: number;
  editMode = false;
  clientForm: FormGroup;
  //typeAddresses: AddressType[];

  constructor(private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        
        this.initForm();
      }
    );    
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.clientForm.value['name'],
    //   this.clientForm.value['description'],
    //   this.clientForm.value['imagePath'],
    //   this.clientForm.value['ingredients']);
    if (this.editMode) {
      this.clientService.updateClient(this.id, this.clientForm.value);
    } else {
      this.clientService.addClient(this.clientForm.value);
    }
    this.onCancel();
  }

  onAddAddress() {
    (<FormArray>this.clientForm.get('addresses')).push(
      new FormGroup({
        'id': new FormControl(null),
        'street': new FormControl(null, Validators.required),
        'number': new FormControl(null, Validators.required),
        'addressTypeId': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteAddress(index: number) {
    (<FormArray>this.clientForm.get('addresses')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let clientId = '';
    let clientName = '';
    let clientImagePath = '';
    let clientEmail = '';
    let clientAddresses = new FormArray([]);
    
    if (this.editMode) {
      const client = this.clientService.getClient(this.id);

      clientId = client.id;
      clientName = client.name;
      clientImagePath = client.imagePath;
      clientEmail = client.email;
      
      if (client['addresses']) {
        for (let address of client.addresses) {
          clientAddresses.push(
            new FormGroup({
              'id': new FormControl(address.id),
              'street': new FormControl(address.street, Validators.required),
              'number': new FormControl(address.number, Validators.required),
              'typeId': new FormControl(address.AddressTypeId)
            })
          );
        }
      }
    }

    this.clientForm = new FormGroup({
      'id': new FormControl(clientId),
      'name': new FormControl(clientName, Validators.required),
      'email': new FormControl(clientEmail, Validators.required),
      'imagePath': new FormControl(clientImagePath),
      'addresses': clientAddresses
    });
  }
}
