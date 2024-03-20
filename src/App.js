import './App.css';
import DetectAdBlock from './DetectAdBlock';

function App() {
  return (
    <div className="App">
      <DetectAdBlock pathname={window.location.pathname} />
    </div>
  );
}

export default App;

