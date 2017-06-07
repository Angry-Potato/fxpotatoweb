var ResultCard = require('./result_card');

var ResultBox = React.createClass({
  propTypes: {
    result: React.PropTypes.object
  },
  render: function() {
    if (this.props.result !== null) {
      var r = this.props.result;
      return(
        <div className="container section">
          <div className="row center-align">
            <div className="col s0 m2 l3" />
            <div className="col s12 m8 l6">
              <ResultCard result={this.props.result} />
            </div>
            <div className="col s0 m2 l3" />
          </div>
        </div>
      );
    }
    return(
      <div className="container section">
        <div className="row">
          <div className="col s12 m6" style={{"height": "222px"}}>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ResultBox;
