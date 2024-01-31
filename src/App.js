import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

function App() {
  const [count, setCount] = useState(0)

  const clientId = "989605622776-ue6e395jnkt84309ub3a5b83pg7svq28.apps.googleusercontent.com"
  
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2",initClient)

  }, [])

  const onSuccess = (res) => {
    console.log('success',res)
  }

  const onFailure = (res) => {
    console.log('failed',res)
  }


  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sight in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
      
  )
}

export default App
