import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    static get parameters(){
        return [Http];
    }
    
    constructor(http){
        this.http = http;
        this.apiKey = 'b711a61d20dc3abb';
        this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    }
    
    getWeather(city, state){
        return this.http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
            .map(res => res.json());
    }
}