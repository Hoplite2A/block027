import { useState } from 'react';
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authentication'
import './App.css'

function App() {

  const [token, setToken] = useState(null)

  return (<>
    <SignUpForm token={token} setToken={setToken} />
    <h4>OR</h4>
    <Authenticate token={token} setToken={setToken}/>
    <h4>OR</h4>
    <h1>DIE!!!!</h1>
  </>
  )
}

export default App
