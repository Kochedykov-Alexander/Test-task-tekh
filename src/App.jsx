import './App.css';
import UserList from './pages/UserList';
import Footer from './components/Footer/Footer'
import styles from './scss/app.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
        <div className="container-fluid">
            <UserList/>
            <Footer/>
          </div>
      </div>
  );
}

export default App;
