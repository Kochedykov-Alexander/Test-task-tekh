import './App.css';
import UserList from './pages/UserList';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="wrapper">
      <div className="container-fluid">
          <UserList/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
