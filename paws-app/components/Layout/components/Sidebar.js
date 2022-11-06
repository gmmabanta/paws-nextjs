import {
    Navbar,
    Text,
    Title,
    Container,
  } from '@mantine/core';
  import { useRouter } from 'next/router';
  import Link from 'next/link';
  import { useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import {
    selectSidebar,
    setSidebarTitle
  } from '../../shared/reducers/sidebar';
  
  export default function Sidebar(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const sidebar = useSelector(selectSidebar);

    const inClinic = router.route === '/clinic' || !!(/^\/clinic\//.exec(router.route));
    const inShelter = router.route === '/shelter' || !!(/^\/shelter\//.exec(router.route));
    const showSidebar = inClinic || inShelter;

    return (
      <>
        { 
          <Navbar width={300} p='xs' style={{ backgroundColor: '#458642' }}>
            <Navbar.Section>
              <Title order={3}>
                  <Text
                    transform='uppercase'
                    weight={700}
                    align='center'
                    color={'white'}
                  >
                    {props.title}
                  </Text>
              </Title>
            </Navbar.Section>
            <Navbar.Section grow mt='md'>
              <Link href='/dashboard'><Text>Dashboard</Text></Link>
              <Link href='/calendar'>Calendar</Link>
              {inShelter && 
                <Container>
                  <Link href='/shelter/facility'>Facility Status</Link>
                  <Link href='/shelter/admittance'>Admittance Sheet</Link>
                  <Link href='/shelter/database'>Animal Database</Link>
                </Container> 
              }
              {inClinic && 
                <Container>
                  <Link href='/clinic/medhistory'>Medical History</Link>
                  <Link href='/clinic/reports'>Reports</Link>
                </Container> 
              }
            </Navbar.Section>
            <Navbar.Section>
              <Text>user, role, settings, logout</Text>
            </Navbar.Section>
          </Navbar>
        }
      </>
    );
  }