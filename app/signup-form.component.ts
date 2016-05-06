import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'; 
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})

export class SignUpFormComponent {
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });
    
    form:ControlGroup;
    
    constructor(formBuilder: FormBuilder){
        this.form = formBuilder.group({
            username: ['', Validators.compose([
                        Validators.required, 
                        UsernameValidators.cannotContainSpace
                    ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        })
    }
    
    singup(){
        // var result = authService.login(this.form.value);
        //if result is false you could add a validation msg to form as follows
        this.form.find('username').setErrors({
            invalidLogin: true
        });
        
        console.log(this.form.value);
    }
}