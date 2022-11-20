export const ChildComponent = ({ greetParent }) => {
  return (
    <div className='Child'>
      <h3>Child</h3>
      <button onClick={() => greetParent('Yo!')}>Greet Parent!</button>
    </div>
  );
};
