var Menu = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    className: React.PropTypes.string
  },
  render: function() {
    return(
      <ul id={this.props.id} className={this.props.className} >
        <li>
          <a href="https://rubygems.org/gems/fxpotato">
            <i className="fa fa-diamond" style={{"paddingRight": "3px"}}/>FxPotato on RubyGems</a>
        </li>
        <li>
          <a href="https://github.com/Angry-Potato/fxpotato">
            <i className="fa fa-github" style={{"paddingRight": "3px"}}/>FxPotato on GitHub</a>
        </li>
        <li>
          <a href="https://hub.docker.com/r/angrypotato/fx-potato/">
            <i className="fa fa-heart" style={{"paddingRight": "3px"}}/>FxPotato on DockerHub</a>
        </li>
        <li>
          <a href="https://github.com/Angry-Potato/fxpotatoweb">
            <i className="fa fa-github" style={{"paddingRight": "3px"}}/>FxPotatoWeb on GitHub</a>
        </li>
      </ul>
    )
  }
});

module.exports = Menu;
