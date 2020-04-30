class Message < ApplicationRecord
  belongs_to :user

  validates :user, presence: true, length: { minimum: 1, maximum: 200 }
end
