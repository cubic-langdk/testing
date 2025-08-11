import { createFileRoute } from '@tanstack/react-router';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/Welcome/Welcome';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
