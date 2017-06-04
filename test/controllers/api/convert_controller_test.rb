require 'test_helper'

class ConvertControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    post '/api/convert'
    assert_response :success
  end

end
