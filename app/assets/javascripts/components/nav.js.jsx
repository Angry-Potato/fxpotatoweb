var Menu = require('./menu');

var Nav = React.createClass({
  render: function() {
    return(
      <nav>
        <div className="nav-wrapper container">
          <div className="row">
            <div className="col s12 m4 l2"><a href="#!" className="brand-logo left">FxPotatoWeb</a></div>
            <div className="col s12 m8 l10">
              <Menu className="right hide-on-med-and-down"/>
              <a className="right dropdown-button hide-on-large-only" href="#!" data-activates="dropdown1" data-constrainwidth="false" data-beloworigin="true">
                <i className=" material-icons" style={{"paddingRight": "8px"}}>menu</i>
              </a>
              <Menu id="dropdown1" className="dropdown-content" />
            </div>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
