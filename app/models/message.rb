class Message < ApplicationRecord
  belongs_to :user

  validates :body, presence: true, length: { minimum: 1, maximum: 200 }

  scope :latest, -> { order(:created_at).last(20) }
end
