import Footer from './components/Footer';
import Header from './components/Header';
import Infos from './components/Information';
import Main from './components/Main';
import Plans from './components/Plans';
import Products from './components/Products';
import './style.css';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Products />
      <Infos />
      <Plans />
      <Footer />
    </>
  );
};

export default App;
