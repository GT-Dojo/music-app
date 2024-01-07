import { useForm } from 'react-hook-form';

type CreateArtistData = {
  name: string;
};

const CreateArtistPageView: React.FC = () => {
  const { register, handleSubmit: handleFormSubmit } = useForm<CreateArtistData>();

  const handleSubmit = handleFormSubmit((_formValues) => {
    // console.log(formValues);
  });

  return (
    <div>
      <h1>Create Artist</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" {...register('name')} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateArtistPageView;
