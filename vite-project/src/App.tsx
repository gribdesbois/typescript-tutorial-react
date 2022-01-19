/* eslint-disable import/no-unresolved */
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FirstComponents from './components/FirstComponents'
import UserComponent from './components/UserComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <div>
          <h1>Hello, Welcome to React and TypeScript</h1>
          <FirstComponents/>
          <UserComponent
            name='John Doe'
            age={26}
            address='87 Summet St, Boston, MA 02110'
            dob={new Date()}
          />
        </div>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
