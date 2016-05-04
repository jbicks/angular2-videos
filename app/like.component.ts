import {Component,Input} from 'angular2/core';
//glyphicon-heart 
//light gray: #ccc
//pink: deeppink
//cursor: pointer

@Component({
    selector: 'like',
    template: `
    <i class="glyphicon glyphicon-heart" 
        [class.highlighted]="iLike"
        (click)="onClick()"></i>
    <span>{{counter}}</span>`,
    styles:[`
        .glyphicon-heart{
            color:#ccc;
            cursor:pointer;
        }
        .highlighted{
            color: deeppink;
        }
    `]
})

export class LikeComponent{
    @Input() counter = 0;
    iLike = false;         
           
    onClick(){
        this.iLike = !this.iLike;
        this.counter += this.iLike ? 1 : -1;
    }
}

