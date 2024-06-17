import './App.scss';
import Header from './components/Header/Header';
import PrimaryButton from './components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from './components/ui/SecondaryButton/SecondaryButton';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <PrimaryButton btnText="Смотреть каталог" />
      <SecondaryButton btnText="в корзину" /> */}
    </div>
  );
}

export default App;
