

import React from "react";

function ListExpense (props) {

    return (

        <div className="list-Expensese" >
                <div>
            <h1 className="mb-3 mt-3 fs-3">Expense list : </h1>

            {


                    <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Label</th>
                        <th scope="col">Expense</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    
               { props.expensese.map((elem) => {

                  return (
                    
                    
                    <tr>
                        <th scope="row" key={elem.id}>{elem.id}</th>
                        <td>{elem.label}</td>
                        <td>{elem.amount} /-</td>
                    </tr>
                  
                      
                )
            })}

                </tbody>
                </table>

            }
            </div>
        </div>

    )

}

export default ListExpense