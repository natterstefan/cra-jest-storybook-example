import logo from './logo.svg'
import './App.css'

function App({ backgroundColor }) {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with the backgroundColor {backgroundColor}
        </a>
      </header>
    </div>
  )
}

export default App
