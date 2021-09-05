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
        {bigScreen &&
          <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '15%' }}
          >
            <h1>Welcome to the site!
              Please open the website on your mobile phone
              or activate "mobile device emulation" in the inspect section of your browser.</h1>
          </div>
        }
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
