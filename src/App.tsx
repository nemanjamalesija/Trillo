import Header from './sections/Header';
import Sidebar from './sections/Sidebar';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Sidebar />
        <main className='hotel-view'>Hotel view</main>
      </div>
    </div>
  );
}

export default App;
