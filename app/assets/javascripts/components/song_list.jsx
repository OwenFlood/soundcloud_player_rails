var SongList = React.createClass({
  render: function() {
    if (this.props.songs.length > 0) {
      var allSongs = this.props.songs.map(function(song, index){
        return <Song class="song-list" playMe={this.props.playMe} imageLink={song.thumbnailLink} songName={song.songName} songId={song.songId} author={song.author} source={song.source} key={index} popularity={song.popularity} />
      }.bind(this));

      return <div>{allSongs}</div>
    } else {
      return <h4>No Results Found.</h4>
    }
  }
});

var Song = React.createClass({
  imageFilter: function() {
    if (this.props.imageLink) {
      return this.props.imageLink;
    } else {
      return "http://www.unlimitune.com/images/soundcloud-button.png";
    }
  },
  handleClick: function(event) {
    this.props.playMe(event, this.props.songName, this.props.songId, this.props.source)
  },
  render: function() {
    // var playMe = this.props.playMe.bind(null, {this.props.songName})
    if (this.props.addable) {
      return <div>
                <img src={this.imageFilter()} class="song-thumbnail" />
                <span className="h4"><a href="#" onClick={this.handleClick}>{this.props.songName}</a></span> - {this.props.author} <span className="h4">Source: </span> {this.props.source} <span className="h4">Popularity: </span> {this.props.popularity}
                <a href="#"><i onClick={this.addSong} className="fa fa-plus-square" aria-hidden="true"></i></a>
                <hr />
             </div>
    } else {
      return <div>
                <img src={this.imageFilter()} class="song-thumbnail" />
                <span className="h4"><a href="#" onClick={this.handleClick}>{this.props.songName}</a></span> - {this.props.author} <span className="h4">Source: </span> {this.props.source} <span className="h4">Popularity: </span> {this.props.popularity}
                <hr />
             </div>
    }
  }
});
