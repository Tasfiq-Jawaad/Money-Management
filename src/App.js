import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome <span>User Name</span></h1>
      <div>
        <h1>Total</h1>
        <p>£0</p>
      </div>
      <main>
        <div>
          <h1>Pocket 1</h1>
          <p>£0</p>
        </div>
        <div>
          <h1>Pocket 2</h1>
          <p>£0</p>
        </div>
        <div>
          <h1>Pocket 3</h1>
          <p>£0</p>
        </div>
        <div>
          <h1>Pocket 4</h1>
          <p>£0</p>
        </div>
        <section>
          <button>Spend money</button>
          <button>Add money</button>
        </section>
      </main>
    </div>
  );
}

export default App;
