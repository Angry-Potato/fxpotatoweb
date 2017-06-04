var ConversionTable = React.createClass({
  render: function() {
    var conversions = [];
    var propsConversions = this.props.conversions;
    propsConversions.forEach(function(conversion) {
      conversions.push(
        <Conversion
          base={conversion.base}
          target={conversion.target}
          date={conversion.date}
          rate={conversion.rate}
          key={propsConversions.indexOf(conversion)}/>);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Base</th>
            <th className="col-md-2">Target</th>
            <th className="col-md-4">Rate</th>
            <th className="col-md-3">On Date</th>
          </tr>
        </thead>
        <tbody>
          {conversions}
        </tbody>
      </table>
    )
  }
});
