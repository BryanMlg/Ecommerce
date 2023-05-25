import Cookie from 'js-cookie';

const useMakeFetch = async (path = '', method = '', body = {}) => {
    const access_token = Cookie.get('access_token');
    const options = {
      method,
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    if (method !== 'GET') {
      options.body = JSON.stringify(body);
    }
    if (access_token) {
      options.headers.Authorization = `Bearer ${access_token}`;
    }
    const response = await fetch(path, options);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response;
  };

  export default useMakeFetch;