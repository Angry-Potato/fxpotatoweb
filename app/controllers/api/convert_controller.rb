module Api
  class ConvertController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      given_params = convert_params
      render json: FxPotato.at(given_params[:date], given_params[:base_key], given_params[:target_key])
    end

    private

    def convert_params
      params.require(:conversion).permit(:base_key, :target_key, :date, :amount)
    end
  end
end
