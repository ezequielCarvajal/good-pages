import { Injectable } from '@angular/core';

// FIRESTORE
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { rejects } from 'assert';

// MODEL
import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private angularFirestore: AngularFirestore) { }

  //CRUD
  getPage (){
    return this.angularFirestore.collection('pages').snapshotChanges();
  }
  getPageById(id){
    return this.angularFirestore.collection('pages').doc(id).valueChanges();
  }
  createPage(page: Page) {
    return new Promise<any> (( resolve , reject) => {
      this.angularFirestore.collection('pages').add(page).then(( resolve ) => {
        console.log(resolve)
      },
      (err) => {
        reject(err)
      })
    })
  }
  updatePage(page: Page,id){
    return this.angularFirestore.collection('pages').doc(id).update({
      name: page.name,
      description: page.description,
      link: page.link
    })
  }
  deletePage(page) {
    return this.angularFirestore.collection('pages').doc(page.id).delete();
  }
 }
