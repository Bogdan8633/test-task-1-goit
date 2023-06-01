import MainMenu from './MainMenu/MainManu';

import menuItems from './MainMenu/menuItems.json';

const App = () => {
  return (
    <>
      <MainMenu items={menuItems} />
      <div>Початок проекту тестового завдання</div>
    </>
  );
};

export default App;
