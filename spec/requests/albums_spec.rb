# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Albums' do
  describe 'POST /artists/:id/albums' do
    subject(:post_request) do
      post artist_albums_path(artist_id: artist.id), params:, as: :json
    end

    let(:artist) { create(:artist) }
    let(:publisher) { create(:publisher) }
    let(:params) do
      {
        name: 'album name',
        released_date: '2013-12-31',
        songs: [
          {
            track_no: 1,
            title: 'some title 1',
          },
          {
            track_no: 2,
            title: 'some title 2',
          }
        ],
        publisher_id: publisher.id,
      }
    end

    it 'returns created status and correct json format' do
      post_request

      expect(response).to have_http_status(:created)
      expect(response.parsed_body).to match(
        {
          'id' => instance_of(Integer),
          'name' => 'album name',
          'released_date' => '2013-12-31',
          'songs' => [
            {
              'id' => instance_of(Integer),
              'track_no' => 1,
              'title' => 'some title 1',
            },
            {
              'id' => instance_of(Integer),
              'track_no' => 2,
              'title' => 'some title 2',
            }
          ],
        }
      )
    end

    it 'creates the album with the correct attributes' do
      expect do
        post_request
      end.to change(Album, :count).by(1)
    end
  end
end
