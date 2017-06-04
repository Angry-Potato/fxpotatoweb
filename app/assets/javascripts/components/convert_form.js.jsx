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
      date: '',
      amount: 0
    }
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
    console.log(this.state);
    return this.state.base_key && this.state.target_key &&
        this.state.date && this.state.amount;
  },
  handleChange: function(e) {
    console.log(e);
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },
  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleConvert}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="base_key"
                 placeholder="Base currency, e.g. GBP"
                 ref="base_key"
                 value={this.state.base_key}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="target_key"
                 placeholder="Target currency, e.g. USD"
                 ref="target_key"
                 value={this.state.target_key}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="date"
                 placeholder="Convert for specific date"
                 ref="date"
                 value={this.state.date}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="amount"
                 placeholder="Amount, e.g. 150"
                 ref="amount"
                 value={this.state.amount}
                 onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Convert</button>
      </form>
    )
  }
});
