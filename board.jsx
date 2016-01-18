var React = require('react');
var Tile = require('./tile');

var Board = React.createClass({
  render: function () {
    var boardTiles = this.props.gameBoard.grid.map(function(r, i) {
      var rowTiles = r.map(function(t, j) {
        return(
          <Tile key={j} updateGame={this.props.updateGame} tile={t} />
        );
      }.bind(this));
      return(
        <div key={i} className="row">
          {rowTiles}
        </div>);
    }.bind(this)
    );
    return(
    <div>
      {boardTiles}
    </div>
    );
  }
});

module.exports = Board;
