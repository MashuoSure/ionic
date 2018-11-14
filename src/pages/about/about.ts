import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  segmentsArray = ['segmentOne','segmentTwo','segmentThree','segmentFour','segmentFive'];
  segmentModel: string = this.segmentsArray[0];
  constructor(public navCtrl: NavController) {

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
}
