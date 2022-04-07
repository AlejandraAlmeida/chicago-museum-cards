import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import getArtWorkService from '../services/artworks/getArtWorkService'
import CardsGrid from '../components/CardsGrid'
// import { ArtWorkMappedItem } from '../services/artworks/model'

const Home = () => {
  const [artworks, setArtworks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getArtWorkService().then((res) => {
      setArtworks(res as any)
    })
  }, [])

  return (
    <div>
      <button onClick={() => navigate('/details')}>Ir a details</button>
      {artworks.length > 0
        ? <CardsGrid artworkList={artworks} />
        : ''}
    </div>
  )
}

export default Home
