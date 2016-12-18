import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../../services/usuarios-service.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
  providers: [UsuariosServiceService]
})
export class UsuariosListaComponent implements OnInit {

  public registros: any;

  constructor(public usuariosServ: UsuariosServiceService) {

  }

  ngOnInit() {

    this.usuariosServ.getData().then((data)=>{
      console.log(data);
      this.registros = data;
    });

  }

}
