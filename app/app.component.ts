/// <reference path="../typings/main.d.ts" />

import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {ContactFormComponent} from './contact-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search" />
        <hr />
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title" /><br><br>
        <img src="{{imageUrl}}"/>
        <courses></courses>
        <authors></authors>
        <star></star>
        <like [counter]="10"></like>
        <contact-form></contact-form>
        <signup-form></signup-form>
        <mypanel>
            <h1></h1>
        </mypanel>
        `
        ,
    directives:[
        CoursesComponent,   
        AuthorsComponent,
        StarComponent,
        LikeComponent,
        ContactFormComponent,
        SignUpFormComponent
        ]
})
export class AppComponent { 
    title = "My First Angular 2 App"
    imageUrl = "http://lorempixel.com/400/200/cats/"
    //private debounced;
    constructor(){
        // this.debounced = _.debounce((text)=>{
        //     var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //     $.getJSON(url,(artists)=>{
        //         console.log(artists); 
        //     });
        // },400);
        
        var keyups = Observable.fromEvent($("#search"),"keyup");
        
        keyups.subscribe((data)=>{ 
            console.log(data)
        });
    }
    
    // onKeyUp(event){
        
    //     var text = event.target.value;
        
    //     if(text.length < 3)
    //         return;
        
    //     this.debounced(text);
    // }
}