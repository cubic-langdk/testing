import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          OMS Helper
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Not much to see here yet, but hopefully this will become a useful tool for testing OMS.
        Going to status page will check if a local OMS instance is running. This project was setup
        with{' '}
        <Anchor href="https://vitejs.dev/" target="_blank">
          Vite
        </Anchor>
        ,{' '}
        <Anchor href="https://tanstack.com/router/latest" target="_blank">
          Tanstack Router/
        </Anchor>
        <Anchor href="https://tanstack.com/query/latest" target="_blank">
          Query
        </Anchor>
        , and{' '}
        <Anchor href="https://mantine.dev/" target="_blank">
          Mantine
        </Anchor>{' '}
        as the UI library.
      </Text>
    </>
  );
}
