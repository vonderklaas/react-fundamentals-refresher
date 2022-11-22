import { ItemDescription } from './ItemDescription';

export const Product = ({ name, description, price }) => {
  return (
    <div
      style={{ border: '1px solid black', maxWidth: '300px', margin: '0 auto' }}
    >
      <h2>{name}</h2>
      <ItemDescription description={description} />
      <h5>
        <b>${price}</b>
      </h5>
    </div>
  );
};
