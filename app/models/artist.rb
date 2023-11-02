# frozen_string_literal: true

class Artist < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { maximum: 300 }
end
