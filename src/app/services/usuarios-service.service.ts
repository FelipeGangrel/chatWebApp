import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as PouchDB from 'pouchdb';

@Injectable()
export class UsuariosServiceService {

  data: any;
  db: any;
  remote: any;


  constructor(private http: Http) {
   
    this.db = new PouchDB('chatapp');
    this.remote = 'http://localhost:5984/chatapp';

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);

  }

  getData(){

    return new Promise((resolve, reject) => {
      this.db.query('usuarios/todos',{
        include_docs: true,
      }).then((result)=>{


        this.data = [];

        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
        });

        resolve(this.data);


        this.db.changes({
          live: true,
          since: 'now',
          include_docs: true
        }).on('change', (change) => {
          this.handleChange(change);
        });

      }).catch((err)=>{
        reject(err)
      });
    });

  }


  handleChange(change) {

    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((doc, index) => {

      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }

    });

    //A document was deleted
    if (change.deleted) {
      this.data.splice(changedIndex, 1);
    } else {

      //A document was updated
      if (changedDoc) {
        this.data[changedIndex] = change.doc;
      }

      //A document was added
      else {
        this.data.push(change.doc);
      }

    }

  }




}
