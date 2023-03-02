class Greeting < ApplicationRecord
  validates :Text, presence: true, length: { maximum: 1000 }
end
