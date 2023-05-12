import '@style/global.scss';
import {ContextApp, authContext} from '@context/ContextApp';
import useInitialState from '@hooks/useStateCart';
import useProviderAuth from '@hooks/useAuth';
import Header from '@components/Header';
function MyApp({ Component, pageProps }) {
  const InitialState = useInitialState();
  const authInitialState = useProviderAuth();
  return (
    <authContext.Provider value={authInitialState}>
    <ContextApp.Provider value={InitialState}>
      <Header/>
      <Component {...pageProps} />
    </ContextApp.Provider>
    </authContext.Provider>
  );
}

export default MyApp;
