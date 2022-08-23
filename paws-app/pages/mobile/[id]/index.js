import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container, Text, Center, TextInput, Group, UnstyledButton } from '@mantine/core';
import Navbar from '../../../components/navbar';
import { PhotoOff, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import styles from '../../../styles/Mobile.module.css';

export default function PetInformation() {

  return (
    <>
        <Navbar title={'Information'}/>
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
                <Link href={'/mobile/23342/rescue-story'}>
                <Button 
                    radius='xl' 
                    size='md' 
                    uppercase 
                    style={{backgroundColor: '#458642', borderRadius: 30, width: '100%', maxWidth: '500px' }}
                    m={10}
                    onClick={() =>{

                    }}
                >View Rescue Story</Button>
                </Link>
            </Center>
            <Center>
                    <Link href={'/mobile/23342/medical-info'}>
                    <Button 
                        radius='xl' 
                        size='md' 
                        uppercase 
                        style={{backgroundColor: '#458642', borderRadius: 30, width: '100%', maxWidth: '500px' }}
                        m={10}
                        onClick={() =>{

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

                    }}
                >I am a Veterinarian</Button>
                </Link>
          </Center>
        </div>
    </>
  );
}