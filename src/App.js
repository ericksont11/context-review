import logo from './logo.svg';
import './App.css';
import FirstLevel from './pages/firstLevel'
import LevelContextProvider from './contexts/levelContext'

function App() {
  return (
    <LevelContextProvider>
      <FirstLevel/>
    </LevelContextProvider>
  );
}

export default App;
