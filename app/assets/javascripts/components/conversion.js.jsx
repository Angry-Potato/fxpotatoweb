var Conversion = React.createClass({
  propTypes: {
    base: React.PropTypes.object,
    target: React.PropTypes.object,
    rate: React.PropTypes.number,
    date: React.PropTypes.string
  },
  render: function() {
    return(
      <tr>
        <td>{this.props.base.amount + '(' + this.props.base.key + ')'}</td>
        <td>{this.props.target.amount + '(' + this.props.target.key + ')'}</td>
        <td>{this.props.rate}</td>
        <td>{this.props.date}</td>
      </tr>
    )
  }
});

module.exports = Conversion;
