import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('abcd');
  const [length, setLength] = useState(6);
  const [num, setNum] = useState(false);
  const [sym, setSym] = useState(false);

  function generatePassword() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';

    if (num) str += '0123456789';
    if (sym) str += '~!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const getPasss = Math.floor(Math.random() * str.length);
      pass += str.charAt(getPasss);
    }

    setPassword(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [length, sym, num]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="app-container">
      <h1>Password Generator</h1>
      <div className="password-display" onClick={copyToClipboard}>
        <h2>{password}</h2>
        <span className="copy-text">Click to Copy</span>
      </div>

      <div className="controls">
        <div className="control-group">
          <label htmlFor="length-range">Length: {length}</label>
          <input
            id="length-range"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={num}
              onChange={(e) => setNum(e.target.checked)}
            />
            Include Numbers
          </label>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={sym}
              onChange={(e) => setSym(e.target.checked)}
            />
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
