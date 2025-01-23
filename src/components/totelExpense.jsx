import React from "react";

function ShowTotelExpense (props) {


    let totelExpense = props.expensese.reduce((accum, elem) =>

        accum + parseFloat(elem.amount),0)
    return (

        <div className="totelExpense" >
        <h1>Totel Expense : {totelExpense} /-</h1>
        </div>
    ) 
}

export default ShowTotelExpense