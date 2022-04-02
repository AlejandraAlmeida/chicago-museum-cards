import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Heeeeyyyy Home</h1>

      <button onClick={() => navigate('/details')}>Ir a details</button>
    </div>
  )
}

export default Home
