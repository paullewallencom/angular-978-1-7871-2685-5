import {Page} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {WorkoutService} from '../../services/workout.service';

@Page({
    templateUrl: 'build/pages/workouts/workouts.html',
    providers: [WorkoutService]
})

export class WorkoutsPage {
    static get parameters(){
        return [[WorkoutService]];
    }
    
    constructor(workoutService){
        this.workoutService = workoutService;
    }
    
    ngOnInit(){
        this.workoutService.getWorkouts().subscribe(workouts => {
            console.log(workouts);
        });
    }
}