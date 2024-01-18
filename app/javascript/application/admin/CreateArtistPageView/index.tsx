import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateArtist } from './rq';
type CreateArtistData = {
  name: string;
  dob: string;
};

const CreateArtistPageView: React.FC = () => {
  const { register, handleSubmit: handleFormSubmit } = useForm<CreateArtistData>();

  const [submitted, setSubmitted] = useState<boolean>(false);

  const { mutate, isSuccess } = useCreateArtist();

  const handleSubmit = handleFormSubmit((formValues) => {
    mutate(formValues);
    setSubmitted(true);
  });

  return (
    <>
      <h1>Create Artist</h1>
      {submitted && <b>You have submitted the form!</b>}
      {isSuccess && <b>You have successfully saved the form!</b>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          {...register('name', { required: 'This field cannot be empty' })}
        />
        <input placeholder="DOB" {...register('dob')} />
        <input type="submit" />
      </form>
    </>
  );
};

export default CreateArtistPageView;
