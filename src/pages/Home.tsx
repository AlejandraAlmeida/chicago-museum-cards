import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import getArtWorkService from '../services/artworks/getArtWorkService'
import CardsGrid from '../components/CardsGrid'
import Box from '@mui/material/Box'
export interface HomeProps {
  page: number
}
const Home = () => {
  const [artworks, setArtworks] = useState([])
  const navigate = useNavigate()
  let page = 1

  useEffect(() => {
    getArtWorkService(page).then((res) => {
      setArtworks(res as any)
    })
  }, [])

  useEffect(() => {
    const scrollingFunction = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        return getArtWorkService(page + 1).then((res) => {
          page = page + 1
          setArtworks(prev => [...prev, ...res] as any)
          window.addEventListener('scroll', scrollingFunction)
        })
      }
    }
    window.addEventListener('scroll', scrollingFunction)
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
