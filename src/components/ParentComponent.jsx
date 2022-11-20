import { useState } from 'react';
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
  const [messageFromChild, setMessageFromChild] = useState('No message');
  const greetParent = (message) => {
    setMessageFromChild(message);
  };

  return (
    <div className='Parent'>
      <h2>Parent</h2>
      <h3>From Child: {messageFromChild}</h3>
      <ChildComponent greetParent={greetParent} />
    </div>
  );
};
