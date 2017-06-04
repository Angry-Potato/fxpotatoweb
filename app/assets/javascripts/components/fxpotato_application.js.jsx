var FxPotatoApplication = React.createClass({
  handleConvert: function(event) {
    
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
      </div>
    )
  }
});
