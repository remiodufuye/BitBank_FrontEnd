
import React , {Component} from 'react'
import CurrencyList from './CurrencyList'
import {Route , Switch } from "react-router-dom"
import currencyDetail from '../currencydetail/currencyDetail' 

class AllCurrenciesContainer  extends Component{ 
    render() {
        return(
        <div>
            <Switch>
                <Route 
                path="/currencies/:currencyId"
                component={currencyDetail}/>
                <Route 
                path="/"
                component={CurrencyList}
                />
             <CurrencyList /> 
            </Switch>
        </div>
        )
    }
}

export default AllCurrenciesContainer 

