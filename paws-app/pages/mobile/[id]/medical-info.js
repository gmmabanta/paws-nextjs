import { Center, Text, Container, Button } from '@mantine/core';
import Navbar from '../../../components/navbar';
import Link from 'next/link';

export default function MedicalInfo() {
  return (
    <>
        <Navbar title={'Medical Info'}/>
        <Center>
          <Text>
            Hi! My name is
          </Text>
        </Center>
        <Center>
          <Text weight={700} transform='uppercase'>
            Animal  
          </Text>
        </Center>
        <Center>
          <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }} py={30} m={15}>
            <div>
              <Center>
                <Text>
                  Age
                </Text>
              </Center>
              <Center>
                <Text weight={700} transform='uppercase'>
                  Animal  
                </Text>
              </Center>
            </div>
            <div>
              <Center>
                <Text>
                  Weight
                </Text>
              </Center>
              <Center>
                <Text weight={700} transform='uppercase'>
                  10 kg  
                </Text>
              </Center>
            </div>
          </Container>
        </Center>
        <Center>
          <Link href={'/mobile/23342/rescue-story'}>
            <Button 
              radius='xl' 
              size='md' 
              uppercase 
              style={{ backgroundColor: '#458642', width: '100%', maxWidth: '500px'}} 
              m={15}
              onClick={() =>{

              }}
            >View Rescue Story</Button>
          </Link>
        </Center>
        <Center>
          <Link href={'/mobile/23342/medical-history'}>
            <Button 
              radius='xl' 
              size='md' 
              uppercase 
              style={{ backgroundColor: '#458642', width: '100%', maxWidth: '500px'}} 
              m={15}
              onClick={() =>{

              }}
            >View Medical History</Button>
          </Link>
        </Center>
        <Center>
          <Link href={'/mobile/23342/'}>
            <Button 
              radius='xl' 
              size='md' 
              uppercase 
              style={{ backgroundColor: '#FF999C', width: '100%', maxWidth: '500px'}} 
              m={15}
              onClick={() =>{

              }}
            >I am a Veterinarian</Button>
          </Link>
        </Center>
    </>
  );
}