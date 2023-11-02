# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Artists' do
  describe 'GET /index' do
    subject(:get_request) { get artists_path, as: :json }

    it 'returns a list of artists created', :aggregate_failures do
      artist = create(:artist)

      get_request

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body['data']).to match(
        [{
          'id' => artist.id,
          'name' => artist.name,
          'created_at' => artist.created_at.rfc3339(3),
          'updated_at' => artist.updated_at.rfc3339(3),
        }]
      )
    end
  end
end
