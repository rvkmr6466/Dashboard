import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	
	ngSubmit(f:NgForm){
		console.log(f.value);
		console.log(f.valid);
	}
	
}
