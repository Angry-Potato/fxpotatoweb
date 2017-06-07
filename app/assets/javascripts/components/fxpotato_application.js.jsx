var ConvertForm = require('./convert_form');
var ConversionTable = require('./conversion_table');
var Nav = require('./nav');

var FxPotatoApplication = React.createClass({
  getInitialState: function() {
    return { conversions: [] };
  },
  handleConvert: function(conversion) {
    var conversions = this.state.conversions;
    conversion.created = new Date().toISOString();
    conversions.push(conversion);
    this.setState({ conversions: conversions });
  },
  render: function() {
    return(
      <div>
        <Nav />
        <ConvertForm handleConvert={this.handleConvert} />
        <ConversionTable conversions={this.state.conversions} />
      </div>
    )
  }
});

module.exports = FxPotatoApplication;
