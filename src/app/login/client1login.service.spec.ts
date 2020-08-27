import { TestBed } from '@angular/core/testing';

import { Client1loginService } from './client1login.service';

describe('Client1loginService', () => {
  let service: Client1loginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client1loginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
