import {
  createRootRoute,
  Link,
  Outlet
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import {
  AppShell,
  Burger,
  Group,
  Stack
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const Route = createRootRoute({
  component: () => {
    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure();
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(true);

    return (
      <>
        {' '}
        <AppShell
          padding="md"
          header={{height: 60}}
          navbar={{
            width: 200,
            breakpoint: 'sm',
            collapsed: {mobile: !mobileOpened, desktop: !desktopOpened},
          }}
        >
          <AppShell.Header>
            <Group
              h="100%"
              px="md"
            >
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom="sm"
                size="sm"
              />
              OMS Helper
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            <Stack
              ml="xl"
              gap="md"
              visibleFrom="sm"
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/status">Status</Link>
            </Stack>
          </AppShell.Navbar>
          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
        <TanStackRouterDevtools />
      </>
    );
  },
  notFoundComponent: () => <div>404 Not Found</div>,
});
