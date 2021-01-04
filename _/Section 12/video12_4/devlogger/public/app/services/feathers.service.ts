import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeathersService{
    constructor(private _http:Http){
        
    }
    
    getLogs(){
        return this._http.get('http://localhost:3030/logs')
            .map(res => res.json());
    }
}