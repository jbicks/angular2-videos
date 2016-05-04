import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title" /><br><br>
        <img src="{{imageUrl}}"/>
        <courses></courses>
        <authors></authors>
        <star></star>
        <like [counter]="10"></like>`
        ,
    directives:[CoursesComponent,AuthorsComponent,StarComponent,LikeComponent]
})
export class AppComponent { 
    title = "My First Angular 2 App"
    imageUrl = "http://lorempixel.com/400/200/"
}