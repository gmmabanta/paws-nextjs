import { supabase } from '../../../utils/supabase';
import PetInformationPage from '../../../components/Mobile/Information';

export default function PetInformation({ animal }) {
  return (
    <PetInformationPage animal={animal} />
  );
}

export const getServerSideProps = async (req, res) => {
  const { data: animal, errorAnimal } = await supabase
    .from('animal')
    .select('breed_id, breed(breed), name, birthdate, sex, initial_weight')
    .filter('uuid', 'eq', req.query.id); // this uuid will be given from qr code

  return {
    props: {
      animal: animal[0] || [],
    }
  }
}