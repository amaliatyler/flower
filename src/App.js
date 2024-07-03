import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrimaryButton from './components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from './components/ui/SecondaryButton/SecondaryButton';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="global-bg"></div>
      <Header />
      {/* <PrimaryButton btnText="Смотреть каталог" />
      <SecondaryButton btnText="в корзину" /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
