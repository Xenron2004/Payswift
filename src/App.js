import Hero from './components/Hero';
import Home from './components/Home';
import logo from './logo.svg';
import { Helmet } from 'react-helmet';
// import './App.css';

function App() {
  return (
    <div className="App">
       <Helmet>
        <title>Payswift - Home</title>
        <meta name="description" content="Empower your business with fast invoicing, robust integrations, and cash flow management solutions." />
        <meta name="keywords" content="business, invoicing, cash flow, finance, payments" />
        </Helmet>
     <Home/>
    </div>
  );
}

export default App;
