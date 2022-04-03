import React from 'react'
import { useNavigate } from 'react-router'
import getArtWorkService from '../services/artworks/getArtWorkService'

const Home = () => {
  const navigate = useNavigate()
  const apiCall = () => {
    console.log(getArtWorkService())
  }

  return (
    <div>
      <h1>Heeeeyyyy Home</h1>

      <button onClick={() => navigate('/details')}>Ir a details</button>
      <button onClick={() => apiCall()}>get artworks</button>
    </div>
  )
}

export default Home
