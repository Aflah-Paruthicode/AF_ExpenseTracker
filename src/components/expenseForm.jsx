
function ExpenseForm (props) {

    let {expenseLabel,setLabel,expenseAmmount,setExpense,addExpense} = props

     
    
    
    return (

        <div className="form-root flex-wrap">


            <div>

            <div className="d-flex mb-2">
            <span className="input-group-text icons">✎</span>
            <input type="text" className="input-group-text inp" placeholder="Expense Label.." value={expenseLabel} onChange={(event) => { setLabel(event.target.value) }} />
            </div>
            <div className="d-flex mb-2">
            <span className="input-group-text icons">₹</span>
            <input type="number" className="input-group-text inp" placeholder="Expense amount.." value={expenseAmmount} onChange={(event) => { setExpense(event.target.value) }} />
            </div>
            <button className="btn btn-dark" onClick={addExpense} >Add Expense</button>
       
        </div>
      </div>

    )
}

export default ExpenseForm