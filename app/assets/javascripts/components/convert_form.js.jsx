var ConvertForm = React.createClass({
  propTypes: {
    base_key: React.PropTypes.string,
    target_key: React.PropTypes.string,
    date: React.PropTypes.string,
    amount: React.PropTypes.number
  },
  getInitialState: function() {
    return {
      base_key: '',
      target_key: '',
      date: new Date().toISOString().slice(0,10),
      amount: 1
    }
  },
  setDateInputToDatePickerSelection: function(t) {
    var input = $('.datepicker');
    var picker = input.pickadate('picker');
    var selection = picker.get('select', 'yyyy-mm-dd');

    input[0].value = selection;
    this.handleChange({target: {name: 'date', value: selection}})
  },
  showDatePicker: function() {
    var input = $('.datepicker').pickadate({
      selectMonths: true,
      onClose: this.setDateInputToDatePickerSelection,
      onSet: this.setDateInputToDatePickerSelection
    });
    return input;
  },
  handleConvert: function(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/convert',
        method: 'POST',
        data: { conversion: self.state },
        success: function(data) {
          self.props.handleConvert(data);
        },
        error: function(xhr, status, error) {
          alert('Cannot convert: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },
  validForm: function() {
    return this.state.base_key && this.state.target_key &&
        this.state.date && this.state.amount;
  },
  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },
  render: function() {
    return(
      <div className="container center-align section" >
        <form className="col s12" onSubmit={this.handleConvert}>
          <div className="row">
            <div className="input-field col s12 m6 l3">
              <input
                id="base_key"
                type="text"
                className="validate"
                name="base_key"
                ref="base_key"
                value={this.state.base_key}
                onChange={this.handleChange}
              />
              <label htmlFor="base_key">Base currency</label>
            </div>
            <div className="input-field col s12 m6 l3">
              <input
                id="target_key"
                type="text"
                className="validate"
                name="target_key"
                ref="target_key"
                value={this.state.target_key}
                onChange={this.handleChange}
              />
              <label htmlFor="target_key">Target currency</label>
            </div>
            <div className="input-field col s12 m6 l3">
              <input
                id="amount"
                type="number"
                className="validate"
                name="amount"
                ref="amount"
                value={this.state.amount}
                onChange={this.handleChange}
              />
              <label htmlFor="amount">Amount</label>
            </div>
            <div className="input-field col s12 m6 l3">
              <input
                id="date"
                type="text"
                className="datepicker validate"
                onFocus={this.showDatePicker}
                name="date"
                ref="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            <i className="fa fa-dollar" /> Convert
          </button>
        </form>
      </div>
    )
  }
});

module.exports = ConvertForm;
