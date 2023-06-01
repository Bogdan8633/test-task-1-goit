import MainMenu from './MainMenu/MainMenu';
import Card from './Card/Card';

import menuItems from './MainMenu/menuItems.json';

const App = () => {
  return (
    <>
      <MainMenu items={menuItems} />
      <Card />
    </>
  );
};

export default App;
