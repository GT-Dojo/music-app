# frozen_string_literal: true

class Album < ApplicationRecord
  belongs_to :artist
  belongs_to :publisher

  has_many :songs, dependent: :destroy

  validates :name, :released_date, presence: true
  validates :name, length: { maximum: 200 }
end
