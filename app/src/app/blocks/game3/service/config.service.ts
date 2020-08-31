import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	HUMAN_PLAYER = 1;
	COMPUTER_AI = 2;

	ROWS_SIZE = 6;
	COLUMNS_SIZE = 7;

	WINNING_SCORE = 100000;

	constructor() { }
}
