# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Artists' do
  describe 'GET /artists' do
    subject(:get_request) { get artists_path(artist), as: :json }

    let(:artist) { create(:artist) }

    it 'returns a list of artists created' do
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

  describe 'POST /artists' do
    subject(:post_request) { post artists_path, params:, as: :json }

    let(:params) do
      {
        name: 'some name',
      }
    end

    it 'valid params' do
      post_request

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body['data']).to match(
        {
          'id' => instance_of(Integer),
          'name' => 'some name',
        }
      )
      expect(Artist.last).to have_attributes(name: 'some name')
    end
  end

  describe 'PUT /artists' do
    subject(:put_request) { put artist_path(artist), params:, as: :json }

    let(:artist) { create(:artist) }
    let(:params) do
      {
        name: 'new artist name',
      }
    end

    it 'updates the artist record with the correct attributes' do
      put_request

      expect(response).to have_http_status(:ok)
      expect(response.parsed_body['data']).to match(
        {
          'id' => artist.id,
          'name' => 'new artist name',
        }
      )
      expect(artist.reload).to have_attributes(name: 'new artist name')
    end
  end

  describe 'DELETE /artist/:id' do
    it 'deleted a record' do
      artist = create(:artist)

      expect do
        delete artist_path(artist), as: :json
      end.to change(Artist, :count).by(-1)
    end
  end
end
