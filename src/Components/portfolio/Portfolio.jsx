import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import ProfileInfo from './ProfileInfo';
import axios from 'axios';
import {setStocks} from '../../redux/reducers/stocksOwnedReducer'
import PortfolioStocks from './PortfolioStocks'
import Treemap from './Treemap'


const Portfolio = props =>{
    console.log(props)

    useEffect(()=>{
        console.log('use effect working')
        retrieveStocks()
    },[])

    const retrieveStocks=()=>{
        axios.get('/api/portfolio')
        .then((res)=>{
            console.log('retrieveStocks working')
            console.log(res)
            console.log(props)
            setStocks(res.data)
        })
    }
    return(
        <div>
            {props?
            <>
            {console.log(props)}
            <ProfileInfo />
            <PortfolioStocks />
            <Treemap />
            <button onClick={retrieveStocks}>retrieve stocks</button>
            </>
        :null}
        </div>
    )
}

const mapStateToProps = reduxState =>reduxState.portfolio
export default connect(mapStateToProps,{setStocks})(Portfolio);