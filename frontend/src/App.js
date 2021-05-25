import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Form from './components/form'
import Footer from './components/footer'
import ApiDetails from './components/apiDetails'

function App() {
  return (
    <div className="container-fluid bg-main">
      <Header />
      <Form />
      <ApiDetails />
      <Footer />
    </div>
    
  );
}

export default App;
