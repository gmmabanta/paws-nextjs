import { supabase } from '../../../utils/supabase';
import { Center, Text, Container } from '@mantine/core';
import MedicalHistory from '../../../components/Mobile/MedicalHistory';

export default function MedicalHistoryPage({med_history}) {

  console.log(med_history)
  return (<MedicalHistory />);
}

export const getServerSideProps = async (req, res) => {
  let { data: med_hist, error } = await supabase
  .from('med_hist')
  .select('animal_id')
    //.eq('animal_id', req.query.id);
    //.eq('animal_id', req.query.id)
    //.filter('animal_id', 'eq', req.query.id); // this uuid will be given from qr code

  console.log(med_hist);
  console.log(error);

  return {
    props: {
      med_history: med_hist,
    }
  }
}