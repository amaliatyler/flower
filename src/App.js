import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrimaryButton from './components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from './components/ui/SecondaryButton/SecondaryButton';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <PrimaryButton btnText="Смотреть каталог" />
      <SecondaryButton btnText="в корзину" /> */}
      <main className="main"></main>
      <Footer />
    </div>
  );
}

export default App;
