import React from 'react';

export const NoJSX = () => {
  // return (
  //   <div>
  //     <h1>Hello Nick</h1>
  //   </div>
  // );
  return React.createElement(
    'div',
    { id: 'jsx' },
    React.createElement('h1', { className: 'banner-message' }, 'Hello Nick')
  );
};
