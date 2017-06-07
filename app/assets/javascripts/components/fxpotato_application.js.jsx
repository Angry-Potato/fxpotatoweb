var ConvertForm = require('./convert_form');
var ConversionTable = require('./conversion_table');
var ResultBox = require('./result_box');
var Nav = require('./nav');

var FxPotatoApplication = React.createClass({
  getInitialState: function() {
    return {
      conversions: [],
      latest_conversion: null
    };
  },
  handleConvert: function(conversion) {
    var conversions = this.state.conversions;
    conversion.created = new Date().toISOString();
    conversions.push(conversion);
    this.setState({
      conversions: conversions,
      latest_conversion: conversion
    });
  },
  render: function() {
    return(
      <div>
        <Nav />
        <ResultBox result={this.state.latest_conversion} />
        <ConvertForm handleConvert={this.handleConvert} />
        <ConversionTable conversions={this.state.conversions} />
      </div>
    )
  }
});

module.exports = FxPotatoApplication;
