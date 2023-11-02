# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Song do
  describe 'associations' do
    it { is_expected.to belong_to(:artist) }
    it { is_expected.to belong_to(:album) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_length_of(:title).is_at_most(200) }

    it { is_expected.to validate_presence_of(:track_no) }
    it { is_expected.to validate_numericality_of(:track_no).only_integer.is_greater_than(0) }
  end
end
