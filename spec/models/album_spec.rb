# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Album do
  describe 'associations' do
    it { is_expected.to belong_to(:artist) }
    it { is_expected.to belong_to(:publisher) }
    it { is_expected.to have_many(:songs) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:released_date) }
    it { is_expected.to validate_length_of(:name).is_at_most(200) }
  end
end
