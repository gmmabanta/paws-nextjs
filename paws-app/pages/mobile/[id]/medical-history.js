import { Center, Text, Container } from '@mantine/core';
import Navbar from '../../../components/navbar';
import Link from 'next/link';

export default function MedicalHistory() {
  return (
    <>
        <Navbar title={'Medical History'}/>
        <Center>
          <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }} py={30} m={15}>
            <Center>
                <Text weight={700} transform='uppercase'>
                    SPAY  
                </Text>
            </Center>
            <Center>
                <Text>
                    Jan 24, 2022
                </Text>
            </Center>
          </Container>
        </Center>
        <Center>
          <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }} py={30} m={15}>
            <Center>
                <Text weight={700} transform='uppercase'>
                    Deworming  
                </Text>
            </Center>
            <Center>
                <Text>
                    Jan 24, 2022
                </Text>
            </Center>
          </Container>
        </Center>
        <Center>
          <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }} py={30} m={15}>
            <Center>
                <Text weight={700} transform='uppercase'>
                    Procedure C  
                </Text>
            </Center>
            <Center>
                <Text>
                    Jan 24, 2022
                </Text>
            </Center>
          </Container>
        </Center>
        <Center>
          <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }} py={30} m={15}>
            <Center>
                <Text weight={700} transform='uppercase'>
                    Procedure D  
                </Text>
            </Center>
            <Center>
                <Text>
                    Jan 24, 2022
                </Text>
            </Center>
          </Container>
        </Center>
       
    </>
  );
}