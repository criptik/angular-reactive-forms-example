import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    myForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
            name: ['Sammy', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.minLength(15)]],
        });
        // this.myForm = new FormGroup({
        //     name: new FormControl('Sammy'),
        //     email: new FormControl(''),
        //     message: new FormControl('')
        // });
    }
    ngOnInit() {
    }
    
    onSubmit(form: FormGroup) {
        console.log('Valid?', form.valid); // true or false
        console.log('Name', form.value.name);
        console.log('Email', form.value.email);
        console.log('Message', form.value.message);
    }
}
