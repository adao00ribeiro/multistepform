import React, { useState } from 'react'
import { MyContext } from '../context/mycontext'
import { IPerson } from '../interfaces/IPerson';
import { TypePlan } from '../interfaces/IPlan';

import './../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [step, setStep] = useState(4);
  const [person, setPerson] = useState<IPerson>({
    name: "",
    email: "",
    phoneNumber: "",
    plan: {
      name: "",
      price: " ",
      typePlan: TypePlan.MONTHLY,
    },
    addons: []
  });
  return (

    <MyContext.Provider value={{ step, setStep, person, setPerson }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )

}
