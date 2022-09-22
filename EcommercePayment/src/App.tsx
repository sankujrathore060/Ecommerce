import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Payment } from 'component/Payment/Payment';
import { Success } from 'component/Success/Success';

type AppProps = { }

export const App:React.FC<AppProps> = ({}) => {
  return (
    <Routes>
      <Route path="/payment" element={<Payment/>}/>      
      <Route path="/success" element={<Success/>}/>
    </Routes>
  )
}
