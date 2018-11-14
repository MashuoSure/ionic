import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MinePage} from '../mine/mine';
import { BPage} from '../b/b';
import { AddPage} from '../add/add';
import { ModalController, NavParams } from 'ionic-angular';
import { IonicPage, NavController,} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MinePage;
  // tab5Root = BPage;

  constructor(public navCtrl: NavController,public navParams:NavParams,  public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){
    if(document.querySelector('#tab-t0-2') == null){
      return
    }
    document.querySelector('#tab-t0-2').addEventListener('click',() =>{
      let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
    },false);
  }
}
