'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

//adding a comment to test the commit another try

//adding a comment to test the commit another try part 2

//adding a comment to test the commit another try part 3
//hdchfcjfj
//adding a comment to test the commit another try part 4 pls work


//week two , 2nd verification
//2nd verification 1st try
//2nd verification 2nd try