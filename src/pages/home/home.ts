import { Component,ViewChild} from '@angular/core';
import { BPage } from '../b/b';
import { NavController,Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides:Slides;
  segmentsArray = ['segmentOne','segmentTwo','segmentThree','segmentFour'];
  segmentModel: string = this.segmentsArray[0];
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }


  swipeEvent(event){
    //向左滑
    if(event.direction==3){
      if(this.segmentsArray.indexOf(this.segmentModel)<3){
    this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel)+1];
      }
    }
    //向右滑
    if(event.direction==5){
      if(this.segmentsArray.indexOf(this.segmentModel)>0){
    this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel)-1];
      }
    }
  }
  goSub(){
    this.navCtrl.push(BPage);
  }
}