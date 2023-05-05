import '@style/global.scss';
import ContextApp from '@context/ContextApp';
import useInitialState from '@hooks/useStateCarro';
import Header from '@components/Header';
function MyApp({ Component, pageProps }) {
  const InitialState = useInitialState();
  return (
    <ContextApp.Provider value={InitialState}>
      <Header />
      <Component {...pageProps} />
    </ContextApp.Provider>
  );
}

export default MyApp;
