import Footer from './components/Footer';
import Header from './components/Header';
import Infos from './components/Information';
import Main from './components/Main';
import Plans from './components/Plans';
import './style.css';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Infos />
      <Plans />
      <Footer />
    </>
  );
};

export default App;
