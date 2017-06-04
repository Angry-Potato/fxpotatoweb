require 'test_helper'

class ConvertControllerTest < ActionDispatch::IntegrationTest
  test "should get success response with good params" do
    post api_convert_path, params: { :conversion => { :base_key => 'GBP', :target_key => 'USD', :date => '2017-06-02', :amount => 10 }}
    assert_response :success
  end

  test "should get success response with bad params" do
    post api_convert_path, params: { :conversion => { :amount => 'waffles' }}
    assert_response :success
  end
end
