// import * as React from 'react'
// import { ArtWorkMappedItem } from '../services/artworks/model'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const CardsGrid = (props: any) => {
// pasar el array de artworks
  console.log('this is props.artworkList', Array(props.artworkList))
  return (
    <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array([]).map((i: any, k: number) => (
            <Grid item xs={2} sm={4} md={4} key={k}>
                <p>{i}</p>
              <Item>xs=2</Item>
            </Grid>
        ))}
        </Grid>
    </div>
  )
}

export default CardsGrid
