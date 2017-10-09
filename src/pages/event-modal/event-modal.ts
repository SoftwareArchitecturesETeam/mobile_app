import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the EventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  event = { name: "", description: "" , address: "", phone: "", start_time: new Date().toISOString(), end_time: new Date().toISOString(), lattitude: -1, longittude: -1, owner_id: -1,   allDay: false };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {


    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
  	this.event.start_time = preselectedDate;
    this.event.end_time = preselectedDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventModalPage');
  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }

}
