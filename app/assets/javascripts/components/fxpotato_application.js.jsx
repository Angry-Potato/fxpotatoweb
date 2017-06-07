var ConvertForm = require('./convert_form');
var ConversionTable = require('./conversion_table');

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
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
          <a className="right dropdown-button hide-on-large-only" href="#!" data-activates="dropdown1"><i className=" material-icons" style={{"paddingRight": "8px"}}>menu</i></a>
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ConvertForm handleConvert={this.handleConvert} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ConversionTable conversions={this.state.conversions} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = FxPotatoApplication;
