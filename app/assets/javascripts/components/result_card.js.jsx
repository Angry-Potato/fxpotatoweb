var ResultCard = React.createClass({
  propTypes: {
    result: React.PropTypes.object
  },
  render: function() {
    var r = this.props.result;
    if (r.rate !== null) {
      return(
        <div className="card teal lighten-2">
          <div className="card-content white-text">
            <span className="card-title">Result!</span>
            <p className="flow-text">{`${r.base.amount}(${r.base.key}) == ${r.target.amount}(${r.target.key})`}</p>
            <p className="flow-text">{`That's an exchange rate of: ${r.rate}`}</p>
            <p className="flow-text">{`On ${r.date}`}</p>
          </div>
        </div>
      );
    }
    return(
      <div className="card light-blue lighten-2">
        <div className="card-content white-text">
          <span className="card-title">No result!</span>
          <p className="flow-text">{`Unable to find an exchange rate for ${r.base.key} to ${r.target.key}`}</p>
          <p className="flow-text">{`On ${r.date}`}</p>
        </div>
      </div>
    );
  }
});

module.exports = ResultCard;
