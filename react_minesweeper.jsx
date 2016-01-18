var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper');
var Board = require('./board');

var Game = React.createClass({
  getInitialState: function () {
    return {board: new Minesweeper.Board(9, 9)};
  },
  updateGame: function (tile, flag) {
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
      var popup;
      var headTag;
      if (this.state.board.lost()) {
        document.getElementById('modal').className = "modal is-active";
        document.getElementById('modal-content').innerHTML = document.createElement("h2").innerText = "YOU LOSE!";
        document.getElementById('restart-game').addEventListener('click', this.restartGame);
      } else if (this.state.board.won()) {
        document.getElementById('modal').className = "modal is-active";
        document.getElementById('modal-content').innerHTML = document.createElement("h2").innerText = "YOU WIN!";
        document.getElementById('restart-game').addEventListener('click', this.restartGame);
      }

    }
    this.setState({board: this.state.board});
  },
  restartGame: function () {
    document.getElementById('modal').className = "modal";
    this.setState({board: new Minesweeper.Board(9, 9)});
  },
  render: function () {
    return(
      <Board gameBoard={this.state.board} updateGame={this.updateGame}/>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
