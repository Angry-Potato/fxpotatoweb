var ConvertForm = require('./convert_form');
var ConversionTable = require('./conversion_table');
var Menu = require('./menu');

var FxPotatoApplication = React.createClass({
  getInitialState: function() {
    return { conversions: [] };
  },
  handleConvert: function(conversion) {
    var conversions = this.state.conversions;
    conversions.push(conversion);
    this.setState({ conversions: conversions });
  },
  render: function() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">FxPotatoWeb</a>
          <Menu className="right hide-on-med-and-down"/>
          <a className="right dropdown-button hide-on-large-only" href="#!" data-activates="dropdown1" data-constrainwidth="false">
            <i className=" material-icons" style={{"paddingRight": "8px"}}>menu</i>
          </a>
          <Menu id="dropdown1" className="dropdown-content" />
        </div>
      </nav>
    )
  }
});

module.exports = FxPotatoApplication;
