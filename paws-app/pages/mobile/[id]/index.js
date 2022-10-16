import Link from 'next/link';
import { Button, Container, Text, Center, } from '@mantine/core';
import styles from '../../../styles/Mobile.module.css';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setNavbarTitle } from '../../../components/shared/reducers/navbar';

export default function PetInformation() {
    const dispatch = useDispatch();
    const router = useRouter();

  return (
    <>
        <div className={styles.textSubheader}>
            <Text>
                Hello! My name is
            </Text>
            <Text transform='uppercase' weight={700} align='center'>Name</Text>
            {/* Pet information */}
            <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }}>
                <Text transform='uppercase' weight={700} align='center'>Age</Text>
                <Text transform='uppercase' weight={700} align='center'>Weight</Text>
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