# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Publisher do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_length_of(:name).is_at_most(200) }
  end
end
