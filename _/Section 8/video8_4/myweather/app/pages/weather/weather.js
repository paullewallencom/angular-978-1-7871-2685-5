import {Page} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Page({
    templateUrl: 'build/pages/weather/weather.html',
    providers: [WeatherService]
})

export class WeatherPage {
    static get parameters(){
        return [[WeatherService]];    
    }
        
    constructor(weatherService){
        this.weatherService = weatherService;
        this.city = 'Boston';
        this.state = 'MA'
        this.weather;
    }
    
    ngOnInit(){
        this.weatherService.getWeather(this.city, this.state)
            .subscribe(weather => {
                this.weather = weather.current_observation;
            })
    }
    
}
