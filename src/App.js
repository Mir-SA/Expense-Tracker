import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { History } from './Components/History';
import { Transaction } from './Components/Transaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;