import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    
       <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
        <div className='text-light '> Stock Prediction Portal</div>
        <p className='text-light lead'> This Stock Prediction application utilizes Machine Learning Techniques and LSTMModel integrated with Django framework.It forecasts future Stock Prices by Analizing 100-day and 200-day moving Average.</p>
         <Button text='Login' class='btn-outline-warning'/>
           
           </div>

       </div>
       
    </>
  )
}

export default Main