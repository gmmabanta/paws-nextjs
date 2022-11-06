import Link from 'next/link';
import { Button, Container, Text, Center, Box } from '@mantine/core';
import styles from '../../../styles/Mobile.module.css';
import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { setNavbarTitle } from '../../../components/shared/reducers/navbar';

import { supabase } from '../../../utils/supabase';
import ButtonGroup from '../../../components/Mobile/Information/components/ButtonGroup';

export default function PetInformation({ animal }) {
    // const dispatch = useDispatch();
    const router = useRouter();

    function formatDateInput(date) {
        var date_components = date.split("/");
        var day = date_components[0];
        var month = date_components[1];
        var year = date_components[2];
        return new Date(year, month - 1, day);
    }

    function formatBirthdate (birthdate)  {
        if (birthdate) {
            const date = formatDateInput(birthdate)
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); // @TODO: check if locale is correct
        }
    }

    function computeAge (birthdate) {
        if (birthdate) {
            const date = formatDateInput(birthdate);
            const year = new Date().getFullYear() - date.getFullYear();
            return year;
        }
    }

    return (
      <>
        <div className={styles.textSubheader}>
          <Container my='20px'>
              <Text weight={600} size='xl' align='center'>
                  Hello! My name is
              </Text>
              <Text transform='uppercase' weight={700} size='30px' align='center'>{animal.name}</Text>
          </Container>
          {/* Pet information */}
          <Container style={{ backgroundColor: '#E4F2E4', color: 'black', borderRadius: 30, width: '100%', maxWidth: '500px', gap: '20px', display: 'grid' }} p={'20px'} mb={'20px'}>
              <Box>
                  <Text weight={400} size='xl' align='center'>Age</Text>
                  <Text weight={700} size='xl' align='center'>{computeAge(animal.birthdate) || 'N/A'}</Text>
              </Box>
              <Box>
                  <Text weight={400} size='xl' align='center'>Birthdate</Text>
                  <Text weight={700} size='xl' align='center'>{formatBirthdate(animal.birthdate) || 'N/A'}</Text>
              </Box>
              <Box>
                  <Text weight={400} size='xl' align='center'>Weight</Text>
                  <Text weight={700} size='xl' align='center'>{animal.initial_weight || 'N/A'}</Text>
              </Box>
              <Box>
                  <Text weight={400} size='xl' align='center'>Breed</Text>
                  <Text weight={700} size='xl' align='center'>{animal.breed.breed || 'N/A'}</Text>
              </Box>
          </Container>
          {/* Button groups */}
          {/* <ButtonGroup /> */}
        </div>
      </>
    );
}

export const getServerSideProps = async (req, res) => {
    const { data: animal, errorAnimal } = await supabase
        .from('animal')
        .select('breed_id, breed(breed), name, birthdate, initial_weight')
        .filter('uuid', 'eq', req.query.id); // this uuid will be given from qr code

    return {
        props: {
            animal: animal[0] || [],
        }
    }
}