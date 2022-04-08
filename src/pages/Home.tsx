import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import getArtWorkService from '../services/artworks/getArtWorkService'
import CardsGrid from '../components/CardsGrid'
import Box from '@mui/material/Box'
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
        {/* TODO: add local time of last DDBB update */}
      <button onClick={() => navigate('/details')}>Ir a details</button>
      <Box sx={{ mt: 5 }}>
        {artworks.length > 0 ? <CardsGrid artworkList={artworks} /> : ''}
      </Box>
    </div>
  )
}

export default Home
