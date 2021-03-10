import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-confirm-email',
	templateUrl: './confirm-email.component.html',
	styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

	confirmedEmail : boolean=true;
		
	constructor() { }

	ngOnInit(): void {
	}

}