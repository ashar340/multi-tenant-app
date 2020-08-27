import { TestBed } from '@angular/core/testing';

import { Client2loginService } from './client2login.service';

describe('Client2loginService', () => {
  let service: Client2loginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client2loginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
