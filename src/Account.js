import React, {Component} from 'react';

class Account extends Component{
    constructor(){
        super();

        this.state={
            balance:200
        }
    }
    
    withdraw=()=>{
        this.setState({
            balance:this.state.balance-10
        })
    }

    deposit=()=>{
        this.setState({
            balance:this.state.balance+10
        })
    }

    render(){
        return(
            <div>
                <h1>My Account</h1>
                <h3>{this.state.balance}</h3>
                <button onClick={this.withdraw}>Withdraw</button>
                <button onClick={this.deposit}>Deposit</button>
            </div>
        )
    }
}

export default Account;