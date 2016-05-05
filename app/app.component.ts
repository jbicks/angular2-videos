import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {ContactFormComponent} from './contact-form.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title" /><br><br>
        <img src="{{imageUrl}}"/>
        <courses></courses>
        <authors></authors>
        <star></star>
        <like [counter]="10"></like>
        <contact-form></contact-form>
        `
        ,
    directives:[CoursesComponent,AuthorsComponent,StarComponent,LikeComponent,ContactFormComponent]
})
export class AppComponent { 
    title = "My First Angular 2 App"
    imageUrl = "http://lorempixel.com/400/200/"
}