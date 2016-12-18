/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuariosServiceService } from './usuarios-service.service';

describe('UsuariosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariosServiceService]
    });
  });

  it('should ...', inject([UsuariosServiceService], (service: UsuariosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
