import {
  Header,
  UnstyledButton,
  Text,
  Title,
} from '@mantine/core';
import { ChevronLeft } from 'tabler-icons-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNavbar,
  addRouteHistory,
  removeRouteHistory,
  setNavbarTitle
} from '../../shared/reducers/navbar';

export default function Navbar(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const navbar = useSelector(selectNavbar);
  const history = navbar.history;
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      let title = navbar.title;
      if (url === '/mobile') {
        dispatch(setNavbarTitle(''));
      }

      const canPushHistory = url !== '/mobile';

      if (history[history.length - 1]?.url !== url && canPushHistory) {
        dispatch(
          addRouteHistory({
            title: title,
            url: url,
          })
        );
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  });

  function goBack() {

    //handle CLEAN UP
    if (router.route !== '/mobile') {
      router.push(history[history.length - 2]?.url ?? '/mobile');
      dispatch(removeRouteHistory(history[history.length - 1].url));
      dispatch(
        setNavbarTitle(history[history.length - 2]?.title ?? '')
      );
    } else if (router.route === '/mobile') {
      router.reload();
    }
  }

  const showNavbar = ['/mobile/login','/mobile/scan','/mobile/[id]', '/mobile/[id]/medical-history', '/mobile/[id]/medical-info', '/mobile/[id]/rescue-story'].some((r) => r === router.route);

  return (
    <>
      { showNavbar && 
        <Header height={60} p='xs' style={{ backgroundColor: '#458642' }}>
            <UnstyledButton sx={{display: 'flex'}} onClick={() => goBack()}>
              <ChevronLeft size={40} strokeWidth={1.5} color={'white'} />
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
            </UnstyledButton>
        </Header>
      }
    </>
  );
}
