import getArtWorkMapper from '../getArtWorksMapper'
import { apiResponseExample } from './mock'

describe('getArtWorkMapper', () => {
  it('Should map api response', () => {
    const mapper = getArtWorkMapper(apiResponseExample)
    expect(mapper).toEqual([{
      altText: undefined,
      artistName: 'Claude Monet',
      artistId: 35809,
      color: {
        h: 6,
        l: 34,
        percentage: 0.00018769614246888,
        population: 1,
        s: 53
      },
      dateDisplay: '1877',
      departmentTitle: 'Painting and Sculpture of Europe',
      dimensions: '60.3 × 80.2 cm (23 3/4 × 31 1/2 in.)',
      id: 16571,
      imageId: '0f1cc0e0-e42e-be16-3f71-2022da38cb93',
      styleTitles: [
        'Impressionism'
      ],
      technique: 'Oil on canvas',
      title: 'Arrival of the Normandy Train, Gare Saint-Lazare'
    }])
  })
  it('Shouldn\'t map if imageId is missing ', () => {
    const mapper = getArtWorkMapper([{}])
    expect(mapper).toEqual([])
  })
})
