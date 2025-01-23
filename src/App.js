import './App.css';
import Header from './components/header';
import ExpenseForm from './components/expenseForm';
import ListExpense from './components/expenseList';
import ShowTotelExpense from './components/totelExpense';
import Footer from './components/footer';
import { useState } from 'react';

function App() {

  let [expenseLabel,setLabel] = useState('')
  let [expenseAmmount,setExpense] = useState(0)
  
  let [expensese,setExpenses] = useState([])

  const addExpense = () => {
    let id = Date.now()
    setExpenses([...expensese,{label:expenseLabel,amount:expenseAmmount,id:id}])
  
    setLabel('')
    setExpense('')
   
  }

  return (
    <div>
    <Header />
    <ShowTotelExpense expensese={expensese} />
    <ExpenseForm expenseLabel={expenseLabel} setLabel={setLabel} expenseAmmount={expenseAmmount} setExpense={setExpense} addExpense={addExpense}  />
    <ListExpense expensese={expensese} />
    <Footer/>
    
    </div>
  );
}

export default App;
