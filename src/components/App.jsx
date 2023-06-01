import MainMenu from './MainMenu/MainManu';
import Card from './Card/Card';

import menuItems from './MainMenu/menuItems.json';

const App = () => {
  return (
    <>
      <MainMenu items={menuItems} />
      <div>Початок проекту тестового завдання</div>
      <Card />
    </>
  );
};

export default App;
