import Link from 'next/link';
import { Button, Container, Text, Center, Box } from '@mantine/core';
import styles from '../../../styles/Mobile.module.css';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setNavbarTitle } from '../../../components/shared/reducers/navbar';

import { supabase } from '../../../utils/supabase';

export default function PetInformation({ animal }) {
    const dispatch = useDispatch();
    const router = useRouter();

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
                        <Text weight={700} size='xl' align='center'>{animal.birthdate || 'N/A'}</Text>
                    </Box>
                    <Box>
                        <Text weight={400} size='xl' align='center'>Birthdate</Text>
                        <Text weight={700} size='xl' align='center'>{animal.birthdate || 'N/A'}</Text>
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
                <Center>
                    <Link href={`/mobile/${router.query.id}/rescue-story`}>
                    <Button 
                        radius='xl' 
                        size='md' 
                        uppercase 
                        style={{backgroundColor: '#458642', borderRadius: 30, width: '100%', maxWidth: '500px' }}
                        m={10}
                        onClick={() =>{
                            dispatch(setNavbarTitle('Rescue Story'));
                        }}
                    >View Rescue Story</Button>
                    </Link>
                </Center>
                <Center>
                        <Link href={`/mobile/${router.query.id}/medical-info`}>
                        <Button 
                            radius='xl' 
                            size='md' 
                            uppercase 
                            style={{backgroundColor: '#458642', borderRadius: 30, width: '100%', maxWidth: '500px' }}
                            m={10}
                            onClick={() =>{
                                dispatch(setNavbarTitle('Medical Info'));
                            }}
                        >View Medical History</Button>
                        </Link>
                </Center>
                <Center>
                    <Link href={'/mobile/login'}>
                    <Button 
                        radius='xl' 
                        size='md' 
                        uppercase 
                        style={{backgroundColor: 'red', borderRadius: 30, width: '100%', maxWidth: '500px' }}
                        m={10}
                        onClick={() =>{
                            dispatch(setNavbarTitle('Login'));
                        }}
                    >I am a Veterinarian</Button>
                    </Link>
            </Center>
            </div>
        </>
    );
}

export const getServerSideProps = async (req, res) => {
    // console.log(req.query);
    const { data: animal, errorAnimal } = await supabase
        .from('animal')
        .select('breed_id, breed(breed), name, birthdate, initial_weight')
        .filter('uuid', 'eq', req.query.id); // this uuid will be given from qr code

    // console.log('item', animal);
    return {
        props: {
            animal: animal[0] || [],
        }
    }
}