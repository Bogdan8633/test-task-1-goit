import Card from 'components/Card/Card';

const CardsList = ({ items }) => {
  return (
    <ul>
      {items.map(({ user, tweets, followers, avatar, id }) => (
        <li key={id}>
          <Card
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;

CardsList.defaultProps = {
  items: [],
};
