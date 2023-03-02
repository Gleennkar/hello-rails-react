class GreetingController < ApplicationController
  def index
    @greeting = Greeting.find(rand(1..Greeting.count))
    render json: @greeting, status: 200
  end
end
