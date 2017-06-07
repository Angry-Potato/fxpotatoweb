var Conversion = require('./conversion');

var ConversionTable = React.createClass({
  render: function() {
    var conversions = [];
    var propsConversions = this.props.conversions.sort(function(first, second) {
      return first.created > second.created ? -1 : 1;
    });
    propsConversions.forEach(function(conversion) {
      conversions.push(
        <Conversion
          base={conversion.base}
          target={conversion.target}
          date={conversion.date}
          rate={conversion.rate}
          key={conversion.created}/>);
    }.bind(this));
    return(
      <div className="container">
        <table className="section table table-striped hide-on-small-only">
          <thead>
            <tr>
              <th>Base</th>
              <th>Target</th>
              <th>Rate</th>
              <th>For Date</th>
            </tr>
          </thead>
          <tbody>
            {conversions}
          </tbody>
        </table>
        <table className="section table responsive-table hide-on-med-and-up">
          <thead>
            <tr>
              <th>Base</th>
              <th>Target</th>
              <th>Rate</th>
              <th>For Date</th>
            </tr>
          </thead>
          <tbody>
            {conversions}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = ConversionTable;
