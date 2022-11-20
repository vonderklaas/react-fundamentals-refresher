export const UserGreeting = () => {
  const isLoggedIn = true;
  return <div>{isLoggedIn && <h3>Welcome!</h3>}</div>;
};
