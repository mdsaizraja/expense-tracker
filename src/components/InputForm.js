import { useState } from "react"
import React from 'react'


function InputForm() {
    const [amount, setAmount] = useState("")
    const [label, setLabel] = useState("")
    const [allEntry, setAllEntry] = useState([])
    const [totalBal,setTotalBal]=useState(0)
    const[income,setIncome]=useState(0)
    const [expense,setExpense]=useState(0)


    const onSubmit = () => {
    
        e.preventDefault();
        
            if( amount.length!==0 && label.length!==0){
                e.preventDefault();

        const newEntry = { amount: amount, label: label }

        setAllEntry([...allEntry, newEntry]);

        if(newEntry.amount[0]==="-"){
            setExpense(parseInt(newEntry.amount)-(-expense))
            setTotalBal(parseInt(newEntry.amount)-parseInt(-totalBal))

        }else {
            setIncome(parseInt(newEntry.amount)+income)
            setTotalBal(parseInt(newEntry.amount)+parseInt(totalBal))

        }
        setAmount("")
        setLabel("")
    }

        

    }
    





    return (

        <div className="text-center mt-4">

{/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/" >Expense Tracker App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
               
                
              </ul>
            </div>
          </div>
        </nav>
{/* Balance card */}
<div className="container">
                <div className="card border-0">
                    <div className="card-body text-center ">
                        <h1 className="card-title">BALANCE</h1>
                        <h2 className="card-text text-success">₹{totalBal}.00</h2>

                    </div>
                </div>
            </div>

            <div className="container ">

{/* Income and expense card */}

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body text-center">
                                <h1 className="card-title">INCOME</h1>
                                <h2 className="card-text text-success">₹{income}.00</h2>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body text-center">
                                <h1 className="card-title">EXPENSE</h1>
                                <h2 className="card-text text-danger">₹{expense}.00</h2>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

{/* History section */}

















<div class="container overflow-auto ">
<h3 className="card-title">History</h3>


            {
                allEntry.map((curElm) => {
                    
                  
                  
                    return (

                        <div>
                            <div className="card border-0">
                                <div className="card-body text-center ">
                                    
                                    
                                { 
                             parseInt(curElm.amount)  > 0 ? <h4 className="card-text text-success">₹{curElm.amount}<span>({curElm.label})</span></h4> : <h4 className="card-text text-danger">₹{curElm.amount}<span>({curElm.label})</span></h4>
                                 
                          
                            }


                                    {/* <h4 className="card-text text-success">₹{curElm.amount}<span>({curElm.label})</span></h4> */}

                                </div>
                            </div>


                        </div>
                    )
                })
                
            }
            </div>





{/* submit form */}
            <div className="container-sm mt-5" >

            </div>

            <div className="container-sm mt-5">
                <form action="" onSubmit={onSubmit}>
                    <div>
                        <h6>(-/+)Amount [-expense, +income]</h6>
                    </div>
                    <div className="input-group mb-3">

                        <div className="input-group-prepend">
                            <span className="input-group-text">₹</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <div className="input-group-append">
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Label</span>
                        <input type="text" className="form-control" value={label} placeholder="Enter lable"
                            onChange={(e) => setLabel(e.target.value)}
                        />
                    </div>

                    <button type="submit" class="btn btn-success mt-5" >Add Transaction</button>
                </form>
            </div>




        </div>





    )
}

export default InputForm
