import { useMutation } from 'react-query';
import { apiCreateArtist } from '../../../shared/api';
import type { CreateArtistData } from '../../../shared/api';

export function useCreateArtist() {
  return useMutation({
    mutationFn: (data: CreateArtistData) => {
      return apiCreateArtist(data);
    },
  });
}
