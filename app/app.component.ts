/// <reference path="../typings/main.d.ts" />
import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {PanelComponent} from './panel.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <input id="search" type="text" class="form-control" placeholder="Search" />
        <hr />
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
        <signup-form></signup-form>
        <mypanel>
            <h1></h1>
        </mypanel>
        `
        ,
    directives:[CoursesComponent,
        AuthorsComponent,
        StarComponent,
        LikeComponent,
        PanelComponent,
        ZippyComponent,
        ContactFormComponent,
        SignUpFormComponent
        ],
    providers:[PostService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit { 
    title = "My First Angular 2 App"
    imageUrl = "http://lorempixel.com/400/200/"
    zippies = [
        {heading:"Some heading",body:"Some body"},
        {heading:"Some heading2",body:"Some body2"},
        {heading:"Some heading3",body:"Some body3"},
    ];
    isLoading = true;
    
    constructor(private _postService: PostService){
        
    }
    
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts=>{
                this.isLoading =false;
                console.log(posts[0].id)
            })
        
        //todo  this is a terrible way to do this, see http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
        //for a better implementation
        // var keyups = Observable.fromEvent($("#search"),"keyup")
        //             .map(e=> e.target.value)
        //             .filter(s => s.length >= 3)
        //             .debounceTime(400)
        //             .distinctUntilChanged()
        //             .flatMap(searchTerm=>{
        //                 var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
        //                 var promise = $.getJSON(url);
        //                 return Observable.fromPromise(promise);
        //             });
        
        // keyups.subscribe((data)=>{ 
        //     console.log(data)
        // });   
    }
}