/**
 * Base URL for the OMS API
 */
const API_BASE_URL = '/oms/omsapi/v1';
const getCommonHeaders = () => {
  return {
    'x-cub-hdr': JSON.stringify({ uid: 'testuid', device: 'appId' }),
    Authorization: 'Basic d2ViOnBhc3N3b3Jk',
    'Content-Type': 'application/json',
    'x-cub-audit': JSON.stringify({ channel: 'SalesDevice' }),
  };
};
/**
 * Check if the OMS API is available
 * @returns Promise resolving to a boolean indicating if the API is available
 */
export const isApiAvailable = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/isavailable`, {
      headers: getCommonHeaders(),
    });

    if (!response.ok) {
      console.warn(`API availability check failed: ${response.statusText}`);
      return false;
    }

    const data = await response.json();
    return data.available === true;
  } catch (error) {
    console.error('Failed to check API availability:', error);
    return false;
  }
};
