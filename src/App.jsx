import { useState, useTransition } from 'react';

import './App.css';

// Import
import NAMES from './data.json';

import { Greet } from './components/Greet';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NamesList } from './components/NamesList';

// CSS
import { Stylesheet } from './components/Stylesheet';
import { Inline } from './components/Inline';

// Stylesheet
import './appStyles.css';
// CSS Module
import styles from './appStyles.module.css';

// Form
import { Form } from './components/Form';

// HTTP Requests
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

// JSX
import { JSX } from './components/JSX';
import { NoJSX } from './components/NoJSX';

// Product
import { Product } from './components/Product';

const App = () => {
  const [query, setQuery] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    // AS A TRANSITION
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.email.includes(query);
  });

  return (
    <div className='App'>
      <Greet name='Nicky' age={24} />
      <Message />
      <ClickHandler />
      <ParentComponent />
      <UserGreeting />
      <NamesList />
      <Stylesheet />
      <Inline />
      <div>
        <p className='error'>Stylesheet from CSS</p>
        <p className={styles.success}>Stylesheet from CSS Module</p>
      </div>
      <Form />
      <PostList />
      <br />
      <PostForm />
      <br />
      <div>
        <label>Filter</label>
        <input onChange={changeHandler} type='text' value={inputValue} />
        {isPending && <p>Updating list...</p>}
        {filteredNames.map((item) => {
          return (
            <p key={item.id}>
              {item.first_name} - {item.email}
            </p>
          );
        })}
      </div>
      <br />
      <JSX />
      <NoJSX />

      {/* PROPS */}
      <Product
        name='Amazon Echo'
        description='Your AI Assistant'
        price={59.99}
      />
      <Product
        name='iPhone 14 Pro'
        description='The best iPhone'
        price={1059.99}
      />
      <Product
        name='Macbook Pro'
        description='Your favourite computer'
        price={2359.99}
      />
      {/* END PROPS */}
    </div>
  );
};

export default App;

// A hook is a special function that lets you 'hook into' React features

// useState,
// useReducer,
// useEffect,
// useContext,
// useRef,
// useMemo,
// useCallback,
// useTransition,
// useId

// Styling

// CSS stylesheets
// Inline styling
// CSS Modules
// CSS in JS Libraries
// styled-components
