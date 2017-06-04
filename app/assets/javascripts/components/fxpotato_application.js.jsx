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
      <div className="container">
        <div className="jumbotron">
          <h1>FxPotato demo</h1>
          <p>by Liam Humphreys</p>
        </div>
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
    )
  }
});
