var ConvertForm = require('./convert_form');
var ConversionTable = require('./conversion_table');
var Nav = require('./nav');

var FxPotatoApplication = React.createClass({
  getInitialState: function() {
    return { conversions: [] };
  },
  handleConvert: function(conversion) {
    var conversions = this.state.conversions;
    conversions.push(conversion);
    this.setState({ conversions: conversions });
  },
  showDatePicker: function() {
    return $('.datepicker').pickadate({
      selectMonths: true,
      closeOnSelect: true, // these don't work! :(
      closeOnClear: true
    });
  },
  render: function() {
    return(
      <div>
        <Nav />
        <div className="container" >
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12 m6 l3">
                <input id="base" type="text" className="validate" />
                  <label htmlFor="base">Base currency</label>
              </div>
              <div className="input-field col s12 m6 l3">
                <input id="target" type="text" className="validate" />
                  <label htmlFor="target">Target currency</label>
              </div>
              <div className="input-field col s12 m6 l3">
                <input id="amount" type="number" className="validate" />
                  <label htmlFor="amount">Amount</label>
              </div>
              <div className="input-field col s12 m6 l3">
                <input id="date" type="text" className="datepicker validate" onFocus={this.showDatePicker}/>
                <label htmlFor="date">Date</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = FxPotatoApplication;
