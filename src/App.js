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

const centerWizard = (selector) => {
  const wizard = document.querySelector(selector);
  if (!wizard) {
    console.error(`No element found with selector: ${selector}`);
    return;
  }

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const wizardWidth = wizard.offsetWidth;
  const wizardHeight = wizard.offsetHeight;

  const wizardLeft = (windowWidth - wizardWidth) / 2 + 'px';
  const top = (windowHeight - wizardHeight) / 2 + 'px';
  wizard.style.position = 'fixed';
  wizard.style.left = wizardLeft;
  wizard.style.top = top;
};

export default App;
