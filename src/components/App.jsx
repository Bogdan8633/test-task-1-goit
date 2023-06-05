import { useState, useEffect } from 'react';

import MainMenu from './MainMenu/MainMenu';
import CardsList from './CardsList/CardsList';

import menuItems from './MainMenu/menuItems.json';
import { getUsers } from './services/fetchData';

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getUsers();
        data.length === 0
          ? setError('Not found')
          : setItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        if (error) {
          console.log(error);
        }
      }
    };
    fetchImages();
  }, [setError, setItems, error]);

  return (
    <>
      <MainMenu items={menuItems} />
      <CardsList items={items} />
    </>
  );
};

export default App;
