import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
    constructor(public _http: Http){
        
    }
    
    getTodos(){
        return this._http.get('/api/v1/todos');
    }
}