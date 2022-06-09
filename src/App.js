import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SocialIcon url="https://www.facebook.com/lordecorllc" network="facebook" />
        <SocialIcon url="https://www.instagram.com/lordecorllc" network="instagram" />
        <SocialIcon url="" network="tiktok" />

      </header>
    </div>
  );
}

export default App;
