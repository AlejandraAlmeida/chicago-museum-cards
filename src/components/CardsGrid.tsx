import * as React from 'react'
import { useNavigate } from 'react-router'
import { Grid, CardActionArea, CardActions, Button } from '@mui/material'
import { ArtWorkMappedItem } from '../services/artworks/model'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export interface aProps {
  artworkList: ArtWorkMappedItem[]
}

const CardsGrid = (props: aProps) => {
  const { artworkList } = props
  const navigate = useNavigate()

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ px: 7 }}
    >
      {artworkList.map((i, k) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={k}>
            <Card>
              <CardActionArea
                onClick={() => {
                  console.log('hey')
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://www.artic.edu/iiif/2/${i.imageId}/full/843,/0/default.jpg`}
                  alt={i.altText}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {i.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {i.dateDisplay} - {i.artistName}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" sx={{ ml: 'auto' }} onClick={() => navigate('/details')}>
                  More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CardsGrid
