/* eslint-disable no-unused-vars */
import { Paper } from '@mui/material'
import { useLocation } from 'react-router'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { download } from '../utils/utils'

const Details = () => {
  const { state }: any = useLocation()
  // altText: undefined
  // artistId: 30142
  // artistName: "Kuba"
  // color: {h: 37, l: 69, s: 73, percentage: 0.023545640793334537, population: 184}
  // dateDisplay: "Possibly mid–20th century"
  // departmentTitle: "Textiles"
  // dimensions: "52 × 46.1 cm (20 1/2 × 18 1/8 in.)"
  // id: 103021
  // imageId: "df4a86ac-c9cb-e83e-4deb-2355f9b17386"
  // styleTitles: (3) ['kuba (democratic republic of congo style', 'Arts of Africa', 'african']
  // technique: "Raffia, plain weave; embroidered with raffia in stem stitches and running stitches cut to form pile"
  // title: "Panel"
  const URL = `https://www.artic.edu/iiif/2/${state.imageId}/full/843,/0/default.jpg`
  document.body.style.backgroundImage = `url(${URL})`
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundPosition = 'center'
  document.body.style.backgroundSize = 'cover'

  console.log(state)
  return (
    <div>
      <Paper
        elevation={1}
        sx={{ m: 5, mt: 40, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
      >
        <Box sx={{ pt: 1, bgcolor: 'background.paper' }}>
          <Box sx={{ m: 3 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {state.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  {state.dateDisplay}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              Technique: {state.technique}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Dimensions: {state.dimensions}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Typography
              gutterBottom
              sx={{ textAlign: 'right' }}
              variant="body1"
            >
              {state.artistName}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }}spacing={1}>
              {state.styleTitles.map((i: any, k: any) => (
                <Chip label={i} key={`${i.id}-styleTitle-[${k}]`} />
              ))}
            </Stack>
          </Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <Button
              onClick={() => {
                download(URL)
              }}
            >
              Download Image
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  )
}

export default Details
