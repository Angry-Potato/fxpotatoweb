module Api
  class ConvertController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      given_params = convert_params
      render json: conversion(FxPotato.at(given_params[:date], given_params[:base_key], given_params[:target_key]), given_params[:amount])
    end

    private

    def convert_params
      params.require(:conversion).permit(:base_key, :target_key, :date, :amount)
    end

    def conversion(result, amount)
      {
        'base' => {
          'key' => result['base']['key'],
          'amount' => amount
        },
        'target' => {
          'key' => result['target']['key'],
          'amount' => result['target']['rate'] ? result['target']['rate'].to_f * amount.to_f : nil
        },
        'rate' => result['rate'],
        'date' => result['date']
      }
    end
  end
end
