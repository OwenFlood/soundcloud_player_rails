var NowPlaying = React.createClass({
  render: function() {
    return <div className="navbar navbar-default navbar-fixed-bottom play-bar">
             <a href="#" className="play-pause-buttons" onClick={this.props.handlePlayPause}>
               <i className="fa fa-stop"></i>
             </a>
             <span className="h4">Now Playing: </span> {this.props.currentSong}
           </div>
  }
});
