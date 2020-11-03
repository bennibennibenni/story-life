import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    
    public footer = new EventEmitter<any>();
    constructor() { }
}
