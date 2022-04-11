import * as GetArtWorksApi from '../getArtworksApi'
import * as GetArtWorksMapper from '../getArtWorksMapper'
import getArtWorkService from '../getArtWorkService'
import { apiResponseExample } from './mock'

describe('getArtWorkService', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('Should return data from Api', async () => {
    const apiSpy = jest.spyOn(GetArtWorksApi, 'default').mockResolvedValue({
      pagination: {},
      info: {},
      config: {},
      data: apiResponseExample
    }
    )
    const mapperSpy = jest.spyOn(GetArtWorksMapper, 'default')
    const res = await getArtWorkService(1)
    expect(apiSpy).toBeCalled()
    expect(mapperSpy).toBeCalled()
    expect(res).toEqual([{
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
})
