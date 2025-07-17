// import { useState } from 'react'
import './App.css'

// import SetupPage from './pages/SetupPage';
// import LoginPage from './pages/LoginPage';
import Header from './components/layout/Header.jsx';
import Title from './Title.jsx'
import Income from './Income.jsx'
import Footer from './components/layout/Footer.jsx';


/**
 * Serve as the root component of the application.
 * Acts as the main container for app's structure and logic
 * @returns 
 */
function App() {
  // To track if the user exists
  // const [userExists, setUserExists] = userState(false);

  // dashboard page
  // return (
  //   <div className="App">
  //     <Header />
  //     <Title />
  //     <Income />
  //     <Footer />
  //   </div>
  // )

  // setup page
  return (
    <div className="AppSetupPage">
      <Header />
      {/* <Title /> */}
      <SetupPage />
      {/* <LoginPage /> */}
      {/* <Income /> */}
      <Footer />
    </div>
  )
}

export default App



