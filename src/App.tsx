import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/Routes';
import BottomNav from './components/bottomNav/BottomNav';

function App() {

  const bigScreen = useMediaQuery({ query: '(min-width: 769px)' })
  const mobileTablet = useMediaQuery({ query: '(max-width: 769px)' })

  return (
    <div className="App">
      <BrowserRouter>
        {mobileTablet &&
          <>
            <Route path='/' component={Routes} />
            <BottomNav />
          </>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
