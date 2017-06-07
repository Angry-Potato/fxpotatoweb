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
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Result!</span>
                    <p className="flow-text">{`${r.base.amount}(${r.base.key}) == ${r.target.amount}(${r.target.key})`}</p>
                    <p className="flow-text">{`That's an exchange rate of: ${r.rate}`}</p>
                    <p className="flow-text">{`On ${r.date}`}</p>
                </div>
              </div>
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
