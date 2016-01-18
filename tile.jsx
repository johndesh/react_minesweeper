var React = require('react');

var Tile = React.createClass({

  handleClick: function (e) {
    this.props.updateGame(this.props.tile, e.altKey);
  },

  render: function () {
    var tileSymbol = "";
    var tileClasses = "tile";
    var exploredTile = this.props.tile.explored;
    if (this.props.tile.bombed) {
      tileClasses = tileClasses + " bombed";

      tileSymbol = this.props.tile.explored ?  "X" : "";

    } else if (exploredTile) {
      tileClasses = tileClasses + " explored";
      tileSymbol = (this.props.tile.adjacentBombCount() > 0 ? this.props.tile.adjacentBombCount() : "");

    } else if (this.props.tile.flagged) {
      tileClasses = tileClasses + " flagged";
      tileSymbol = "⚑";
    }
    if (exploredTile) {
      return(
        <div className={tileClasses}>{tileSymbol}</div>
      );
    } else {
      return(
        <div className={tileClasses} onClick={this.handleClick}>{tileSymbol}</div>
      );
    }
  }
});

module.exports = Tile;
