# frozen_string_literal: true

class Album < ApplicationRecord
  belongs_to :artist
  belongs_to :publisher

  validates :name, :released_date, presence: true
  validates :name, length: { maximum: 200 }
end
