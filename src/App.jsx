import React from 'react'
import {useEffect, useState } from 'react'
import api from './services/api'
import axios from 'axios'
const App = () => {
  const [nusic,setMusic] = useState ([])

  useEffect(() => {
    axios.get(api/songs)
    .then((res) =v )
  })
  return (
    <>

    </>
  )
}

export default App