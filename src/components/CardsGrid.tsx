import { Grid } from '@mui/material'
import { ArtWorkMappedItem } from '../services/artworks/model'

export interface aProps {
  artworkList:ArtWorkMappedItem[]
}

const CardsGrid = (props: aProps) => {
  const { artworkList } = props
  return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {artworkList.map((i, k) => {
          return <Grid item xs={2} sm={4} md={4} key={k}>
            <p>{i.artistId}</p>
            </Grid>
        })}
      </Grid>
  )
}

export default CardsGrid
