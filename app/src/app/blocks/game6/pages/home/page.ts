import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page3',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Page6Component implements OnInit {

	board = [
		['00', '01', '01', '03', '04'],
		['10', '11', '11', '13', '14'],
		['20', '21', '21', '23', '24'],
		['30', '31', '31', '33', '34'],
		['40', '41', '41', '43', '44'],
	];

	constructor() { }

	ngOnInit() { }
}
