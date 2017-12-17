import { TestBed, inject } from '@angular/core/testing';

import { Client.ServiceService } from './client.service.service';

describe('Client.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Client.ServiceService]
    });
  });

  it('should be created', inject([Client.ServiceService], (service: Client.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
