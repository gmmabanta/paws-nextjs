import {  Container, Text, Center, TextInput, Group, UnstyledButton } from '@mantine/core';
import { PhotoOff, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import styles from '../../../styles/Mobile.module.css';

export default function RescueStory() {

  return (
    <>
        <div className={styles.textSubheader}>
            {/* Photo of pet here */}
            <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }}>
                <Center m={20} p={30}>
                    <PhotoOff size={70} />
                </Center>
            </Container>
            {/* Next scroller */}
            <Group position='apart'>
                <UnstyledButton>
                <ChevronLeft size={40} strokeWidth={1.5} color={'#458642'}/>
                </UnstyledButton>
                <UnstyledButton>
                <ChevronRight size={40} strokeWidth={1.5} color={'#458642'}/>
                </UnstyledButton>
            </Group>
            {/* Animal rescue story */}
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta eget mauris bibendum fermentum. Sed id est vel augue tempor scelerisque. Vivamus varius purus nibh, a dapibus elit fringilla nec. Pellentesque et imperdiet ligula. Mauris dapibus quam quis finibus finibus. Vivamus fringilla porttitor elit. Etiam condimentum mattis malesuada. In mollis lobortis metus, vel laoreet urna ultricies vitae. Aliquam velit lacus, tristique eget nisi tempus, lacinia tristique ipsum. Vestibulum elementum risus luctus ante molestie, in convallis augue porta. Donec id cursus dolor.
            </Text>
        </div>
    </>
  );
}