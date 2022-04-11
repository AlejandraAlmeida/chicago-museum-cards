import axios from 'axios'
import getArtWorkApi from '../getArtworksApi'
import { apiResponseExample } from './mock'

describe('getArtWorkApi', () => {
  process.env.REACT_APP_HOST_NAME_API = 'www.mock-url'
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('Should return data from Api', async () => {
    process.env.REACT_APP_HOST_ARTWORKS_LIMIT = '12'
    const axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        pagination: {},
        info: {},
        config: {},
        data: apiResponseExample
      }
    })
    expect(await getArtWorkApi(1)).toEqual({
      pagination: {},
      info: {},
      config: {},
      data: apiResponseExample
    })
    expect(axiosSpy).toHaveBeenCalledWith('www.mock-url/artworks', { params: { limit: '12', page: 1 } })
  })
  it('Should return data from Api', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({ })
    await expect(getArtWorkApi(1)).rejects.toThrowError('API fails')
  })
})
