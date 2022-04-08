
import { ArtWorkMappedItem } from './model'

const getArtWorksMapper = (apiResponse: any):ArtWorkMappedItem[] => {
  console.log('Mapping - getArtWorkMapper')
  const artWorks: ArtWorkMappedItem[] = apiResponse.filter((i: any) => i.image_id).map((i:any) => {
    return {
      id: i.id,
      title: i.title,
      imageId: i.image_id,
      altText: i.alt_text,
      artistName: i.artist_title,
      dateDisplay: i.date_display,
      dimensions: i.dimensions,
      technique: i.medium_display,
      color: i.color,
      departmentTitle: i.department_title,
      artistId: i.artist_id,
      styleTitles: i.style_titles
    }
  })
  console.log(artWorks)
  return artWorks
}
export default getArtWorksMapper
