import { createFileRoute } from '@tanstack/react-router';
import { Center } from '@mantine/core';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <Center>
      This is WIP Helper for OMS. Currently there's not any functionality besides going to the
      status page. Checking there will see if a local OMS instance is running. Eventually this could
      become a client to run some common tasks and help testing.
    </Center>
  );
}
