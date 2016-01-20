var React = require('react');

var Tile = React.createClass({


  handleClick: function (e) {
    
    this.props.updateGame(this.props.tile, e.altKey);
  },

  render: function () {
    var tile = this.props.tile;
    var klass, token, count;
     
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        token = '💣';
      } else {
        klass = 'explored';
        count = tile.adjacentBombCount();
        token = (count > 0 ? count : ' ');
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      token = '⚑';
    } else {
      token = ' ';
    }

    klass = 'tile ' + klass;

    return(
      <div className={klass} onClick={this.handleClick}><p>{token}</p></div>
    );

  }
});

module.exports = Tile;
