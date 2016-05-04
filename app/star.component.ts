import {Component} from 'angular2/core';

@Component({
    selector: 'star',
    template: `
    <i class="glyphicon" 
        [ngClass]="{
            'glyphicon-star-empty':!isActive,
            'glyphicon-star':isActive
        }"
        (click)="isActive = !isActive"></i>
    `
})

export class StarComponent{
    isActive = 0;
}