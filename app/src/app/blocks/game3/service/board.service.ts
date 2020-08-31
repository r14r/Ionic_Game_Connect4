import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BoardService {
	board: any;
	game: any;
	stage: any;

	boardBackground: any;

	constructor() { }

	init(matrixBoard, game) {
		// this.stage = (typeof createjs != "undefined") && new createjs.Stage("boardGame");
		this.game = game;

		return JSON.parse(JSON.stringify(matrixBoard)) || [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		];
	}

	/*
	initBoard() {
		this.board.stage.name = 'stage';
		this.board.stage.enableMouseOver(20);

		// Draw this.board
		// @TOFIX: this.boardBackground = this.board.stage.addChild(new createjs.Shape()).set({ name: 'background', x: 0, y: 0 });
		this.boardBackground.graphics.beginFill('#0277BD').beginStroke('black').drawRect(60, 10, 380, 330);
		this.boardBackground.graphics.beginFill('#01579B').beginStroke('black').drawRect(30, 330, 440, 20);

		// Draw checkers
		// @TOFIX: this.board.checkerSpaceContainer = this.board.stage.addChild(new createjs.Container()).set({ name: 'this.board' });
		_.forEach(this.board.matrixBoard, (row, rowIndex) => {
			_.forEach(row, function (column, columnIndex) {
				var checkerSpace = this.board.checkerSpaceContainer.addChild(
					new createjs.Shape()).set({ name: 'cs-' + rowIndex + columnIndex, x: 100 + (50 * columnIndex), y: 50 + (50 * rowIndex) });
				checkerSpace.graphics.beginFill('#FFFF').beginStroke('grey').drawCircle(0, 0, 23);
				checkerSpace.cursor = 'pointer';
				checkerSpace.addEventListener('click', (this.board.currentgame.placeHumanMove).bind(this.board.currentgame));
			});
		});
		this.board.stage.on('click', (e) => {
			if (this.board.isClickDisabled) {
				e.stopPropagation();
			};
		}, null, false, {}, true);

		createjs.Ticker.addEventListener('tick', this.board.stage);
	}

	resetBoard() {
		_.forEach(this.board.matrixBoard, (row, rowIndex) {
			_.forEach(row, function (column, columnIndex) => {
				var checkerSpace = this.board.checkerSpaceContainer.getChildByName('cs-' + rowIndex + columnIndex);
				checkerSpace.graphics.beginFill('#FFFF').beginStroke('grey').drawCircle(0, 0, 23);
				this.board.matrixBoard[rowIndex][columnIndex] = 0;
			});
		});
	}

	refreshBoard() {
		_.forEach(this.board.matrixBoard,  (row, rowIndex) => {
			_.forEach(row, function (column, columnIndex) {
				var checkerSpace = this.board.checkerSpaceContainer.getChildByName('cs-' + rowIndex + columnIndex);
				if (this.board.matrixBoard[rowIndex][columnIndex] == Config.HUMAN_PLAYER) {
					checkerSpace.graphics.beginFill('#f70202').beginStroke('grey').drawCircle(0, 0, 23);
				} else if (this.board.matrixBoard[rowIndex][columnIndex] == Config.COMPUTER_AI) {
					checkerSpace.graphics.beginFill('#ffc107').beginStroke('grey').drawCircle(0, 0, 23);
				}
			});
		});
	}

	placeMove(player, columnMove, newBoard) {
		var this.board = newBoard ? new CanvasBoard(this.matrixBoard) : this;
		for (var i = Config.ROWS_SIZE - 1; i >= 0; i--) {
			if (this.board.matrixBoard[i][columnMove] == 0) {
				this.board.matrixBoard[i][columnMove] = player;
				return this.board;
			}
		}
		return false;
	}


	enableClick() {
		this.board.isClickDisabled = false;
	}

	disableClick() {
		this.isClickDisabled = true;
	}

	isFull() {
		for (var column = 0; column < Config.COLUMNS_SIZE; column++) {
			var atLeastOneEmpty = false;
			if (this.board.matrixBoard[0][column] == 0) {
				atLeastOneEmpty = true;
				break;
			}
		};
		return !atLeastOneEmpty;
	}

	getScore() {
		score = 0;

		function updateScore(HumanInRow, ComputerInRow) {
			var points = 0;
			switch (HumanInRow) {
				case 4:
					points += Config.WINNING_SCORE;
					break;
				case 3:
					points += 5;
					break;
				case 2:
					points += 1;
					break;
				default:
					break
			}
			switch (ComputerInRow) {
				case 4:
					points -= Config.WINNING_SCORE;
					break;
				case 3:
					points -= 5;
					break;
				case 2:
					points -= 1;
					break;
				default:
					break
			}
			return points;
		}

		// Check ROWS
		for (var row = 0; row < Config.ROWS_SIZE; row++) {
			for (var column = 0; column <= Config.COLUMNS_SIZE - 4; column++) {
				var HumanInRow = 0, ComputerInRow = 0;
				for (var offset = column; offset < column + 4; offset++) {
					if (this.board.matrixBoard[row][offset] == 1) {
						HumanInRow++;
						ComputerInRow = 0
					} else if (this.board.matrixBoard[row][offset] == 2) {
						ComputerInRow++;
						HumanInRow = 0
					}
				}
				score += updateScore(HumanInRow, ComputerInRow);
				if (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) return score;
			}
		}

		// Check COLUMNS
		for (var column = 0; column < Config.COLUMNS_SIZE; column++) {
			for (var row = 0; row <= Config.ROWS_SIZE - 4; row++) {
				var HumanInRow = 0, ComputerInRow = 0;
				for (var offset = row; offset < row + 4; offset++) {
					if (this.board.matrixBoard[offset][column] == 1) {
						HumanInRow++;
						ComputerInRow = 0
					} else if (this.board.matrixBoard[offset][column] == 2) {
						ComputerInRow++;
						HumanInRow = 0
					}
				}
				score += updateScore(HumanInRow, ComputerInRow);
				if (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) return score;
			}
		}

		// Check DIAGONALS
		for (var column = 0; column <= Config.COLUMNS_SIZE - 4; column++) {
			for (var row = 0; row <= Config.ROWS_SIZE - 4; row++) {
				var HumanInRow = 0, ComputerInRow = 0;
				for (var offset = row; offset < row + 4; offset++) {
					if (this.board.matrixBoard[offset][(offset - row) + column] == 1) {
						HumanInRow++;
						ComputerInRow = 0
					} else if (this.board.matrixBoard[offset][(offset - row) + column] == 2) {
						ComputerInRow++;
						HumanInRow = 0
					}
				}
				score += updateScore(HumanInRow, ComputerInRow);
				if (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) return score;
			}
		}
		for (var column = Config.COLUMNS_SIZE - 1; column >= Config.COLUMNS_SIZE - 4; column--) {
			for (var row = 0; row <= Config.ROWS_SIZE - 4; row++) {
				var HumanInRow = 0, ComputerInRow = 0;
				for (var offset = row; offset < row + 4; offset++) {
					if (this.board.matrixBoard[offset][column - (offset - row)] == 1) {
						HumanInRow++;
						ComputerInRow = 0
					} else if (this.board.matrixBoard[offset][column - (offset - row)] == 2) {
						ComputerInRow++;
						HumanInRow = 0
					}
				}
				score += updateScore(HumanInRow, ComputerInRow);
				if (score <= -Config.WINNING_SCORE || score >= Config.WINNING_SCORE) return score;
			}
		}

		return score;
	}
	*/
}
