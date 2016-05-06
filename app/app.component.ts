import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {PanelComponent} from './panel.component';
import {ZippyComponent} from './zippy.component';
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
        <bs-panel>
            <div class="body">This is the <strong>body</strong>!</div>
            <div class="heading">The Heading</div>
        </bs-panel>
        <zippy *ngFor="#zippy of zippies">
            <div class="body">{{zippy.body}}</div>
            <div class="heading">{{zippy.heading}}</div>
        </zippy>
        <contact-form></contact-form>
        `,
    directives:[CoursesComponent,
        AuthorsComponent,
        StarComponent,
        LikeComponent,
        PanelComponent,
        ZippyComponent,
        ContactFormComponent]
})

export class AppComponent { 
    title = "My First Angular 2 App"
    imageUrl = "http://lorempixel.com/400/200/"
    zippies = [
        {heading:"Some heading",body:"Some body"},
        {heading:"Some heading2",body:"Some body2"},
        {heading:"Some heading3",body:"Some body3"},
    ];
}