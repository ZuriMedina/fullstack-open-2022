import './App.css';
import Mensaje from './Mensaje'

const App = () => {
  const firstName = 'Zuri'

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando, tal'/>
      {firstName}
    </div>
  );
}

export default App;
