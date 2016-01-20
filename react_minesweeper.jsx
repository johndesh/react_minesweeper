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
    }
    this.setState({board: this.state.board});
  },
  restartGame: function () {
    this.setState({board: new Minesweeper.Board(9, 9)});
  },
  render: function () {
    var modal = "";
    if (this.state.board.lost() || this.state.board.won()) {
      var text = this.state.board.won() ? "You won!" : "You lost!";
      modal = 
        <div className='modal is-active'>
          <div className='modal-content'>
            <p>{text}</p>
            <button className='modal-button' onClick={this.restartGame}>Play Again</button>
          </div>
        </div>
    }    
    return(
      <div>
        {modal}
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
