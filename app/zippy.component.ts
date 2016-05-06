import {Component} from 'angular2/core';

@Component({
    selector:'zippy',
    template:`
        <div class="panel panel-default">
        <div class="panel-heading" (click)="onClick()">
            <ng-content select=".heading"></ng-content>
            <i class="glyphicon" 
                [ngClass]="
                    {
                        'glyphicon-chevron-down':isOpen,
                        'glyphicon-chevron-up':!isOpen
                    }"></i>
        </div>
        <div class="panel-body" [class.isOpen]="isOpen">
            <ng-content select=".body"></ng-content>
        </div>
    </div>
    `,
    styles:[`
        .panel-body{
            display:none;
        }
        .panel-body.isOpen{
            display:inherit;
        }        
    `]
})

export class ZippyComponent{
    isOpen=false;
    
    onClick(){
        this.isOpen = !this.isOpen;
    }
}