import { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Hey ${username}, ${bio} from ${country}!`);
    clearInputs();
  };

  const handleSelectChange = (e) => {
    setCountry(e.target.value);
  };

  const clearInputs = () => {
    setUsername('');
    setBio('');
    setCountry('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type='text'
        />
      </div>
      <div>
        <label>Bio</label>
        <textarea
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          cols='30'
          rows='10'
        ></textarea>
      </div>
      <div>
        <label>Country</label>
        <select onChange={handleSelectChange} value={country}>
          <option value='MD'>Moldova</option>
          <option value='NL'>Netherlands</option>
          <option value='UK'>United Kingdom</option>
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};
