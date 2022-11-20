export const NamesList = () => {
  const names = ['Bruce', 'Clark', 'Diana'];
  return (
    <div>
      {names.map((name, index) => {
        return (
          <p key={index}>
            {index + 1}. {name}
          </p>
        );
      })}
    </div>
  );
};
