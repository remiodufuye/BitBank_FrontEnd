
import React , {Component} from 'react'
import CurrencyList from './CurrencyList'
import {Route , Switch } from "react-router-dom"
import currencyDetail from '../currencydetail/currencyDetail' 

class AllCurrenciesContainer  extends Component{ 
    render() {
        return(
        <div>
    
             <CurrencyList /> 
        
        </div>
        )
    }
}

export default AllCurrenciesContainer 

