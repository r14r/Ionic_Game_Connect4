import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { BoardService } from './board.service';


@Injectable({
	providedIn: 'root'
})
export class GameService {
	game: any;
	turn: any;

	matrixBoard: any;

	computerIsThinking = false;

	constructor(private config: ConfigService, private board: BoardService) {
		this.turn = config.HUMAN_PLAYER;
		this.matrixBoard = board.init(null, this.game);
	}

	/*
		placeHumanMove(evt) {
			const checkerSpace = evt.currentTarget.name;
			const columnIndex = checkerSpace[checkerSpace.length - 1];

			const isValidMove = this.game.Board.placeMove(this.game.turn, columnIndex);

			if (isValidMove) {
				this.game.switchTurn();
			}
		}

		generateComputerMove() {

			// TOFIX: const deferred = jQuery.Deferred();
			// TOFIX: const depth = $('#depthSelect').val();
			const depth = 0;

			this.board = this.board.init(this.game.Board.matrixBoard, this.game);

			this.game.worker.addEventListener('message', function handler(e) {
				const bestMove = e.data;

				console.log(bestMove);
				this.game.Board.placeMove(this.game.turn, bestMove.columnMove);
				this.game.worker.removeEventListener('message', handler);
				// TOFIX: deferred.resolve();
			}, false);

			const workerParams = {
				matrixBoard: this.matrixBoard,
				depth,
				maximizingPlayer: false
			};
			this.game.worker.postMessage(JSON.stringify(workerParams));

			// @TOFIX: return deferred.promise();
		}

		resetGame() {
			this.board.resetBoard();
			this.turn = this.config.HUMAN_PLAYER;
			// @TOFIX: $('#winningAlert').hide();
			// @TOFIX: $('#scoreAlert').show();
			// @TOFIX: document.getElementById('score').innerHTML = 0;
			this.board.enableClick();
		}


		switchTurn() {

			this.game.Board.refreshBoard();

			this.game.turn = this.game.turn === this.config.HUMAN_PLAYER ? this.config.COMPUTER_AI : this.config.HUMAN_PLAYER;

			if (this.game.turn == this.config.COMPUTER_AI) {
				this.game.computerIsThinking = true;
				this.game.Board.disableClick();
				// @TOFIX: $('#waitingAlert').show();
			} else if (this.game.turn === this.config.HUMAN_PLAYER) {
				this.game.computerIsThinking = false;
				this.game.Board.enableClick();
				// @TOFIX: $('#waitingAlert').hide();
			}

			const score = this.game.Board.getScore();
			const isDrawn = this.game.Board.isFull();
			document.getElementById('score').innerHTML = score;

			if (isDrawn || score > this.config.WINNING_SCORE - 100 || score < -this.config.WINNING_SCORE + 100) {
				// @TOFIX: $('#winningAlert').show(); $('#scoreAlert').hide(); $('#waitingAlert').hide();
				document.getElementById('winningAlert').innerHTML = isDrawn ? 'The game is drawn!' : (score > 0 ? 'You Win!' : 'AI Wins!');

				this.game.Board.disableClick();
			} else {
				if (this.game.turn == this.config.COMPUTER_AI) {
					this.game.generateComputerMove().done(() => {
						this.game.switchTurn();
					});
				}
			}
		}

		init() {
			this.game = new game();

			this.game.worker = new Worker('minimax.js');

			this.game.Board.initBoard();
		}

		button_restart(e) {
			this.game.resetGame();

		}
	}
	*/
}
