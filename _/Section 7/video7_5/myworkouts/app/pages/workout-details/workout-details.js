import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/workout-details/workout-details.html'
})
export class WorkoutDetailsPage {
    
    static get parameters(){
        return [[NavController], [NavParams]];
    }
    
    constructor(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        this.workout = this.navParams.get('workout');
    }
}
