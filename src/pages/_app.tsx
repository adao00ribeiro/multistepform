import React, { useState } from 'react'
import { MyContext } from '../context/mycontext'

import './../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [step, setStep] = useState(2);
  return (

    <MyContext.Provider value={{ step, setStep }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )

}
