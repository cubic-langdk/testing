import { createFileRoute, getRouteApi } from '@tanstack/react-router';
import { isApiAvailable } from '@/api/OMSApi';

export const Route = createFileRoute('/status')({
  component: Status,
  loader: () => isApiAvailable(),
});

function Status() {
  const routeApi = getRouteApi('/status');
  const isAvailable = routeApi.useLoaderData();
  return (
    <div className="p-2">
      OMS Status:{' '}
      <span className={isAvailable ? 'text-green-600' : 'text-red-600'}>
        {isAvailable ? 'running' : 'not started'}
      </span>
    </div>
  );
}
