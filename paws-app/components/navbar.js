import {
  Header,
  UnstyledButton,
  Center,
  Text,
  Group,
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
} from './shared/reducers/navbar';

export default function Navbar(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const navbar = useSelector(selectNavbar);

  useEffect(() => {
    const handleRouteChange = (url) => {
      let title = navbar.title;
      if (url === '/') {
        dispatch(setNavbarTitle(''));
      }

      const canPushHistory = url !== '/';

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
    if (router.route !== '/') {
      router.push(history[history.length - 2]?.url ?? '/');
      dispatch(removeRouteHistory(history.length - 1));
      dispatch(
        setNavbarTitle(history[history.length - 2]?.title ?? 'Default Title')
      );
    } else if (router.route === '/') {
      router.reload();
    }
  }

  return (
    <Header height={60} p='xs' style={{ backgroundColor: '#458642' }}>
      <Group>
        <UnstyledButton onClick={() => goBack()}>
          <ChevronLeft size={40} strokeWidth={1.5} color={'white'} />
        </UnstyledButton>
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
      </Group>
    </Header>
  );
}
