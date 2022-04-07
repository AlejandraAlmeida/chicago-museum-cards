import axios from 'axios'
import getArtWorkApi from '../getArtworksApi'
import { apiResponseExample } from './mock'

describe('getArtWorkApi', () => {
  process.env.REACT_APP_HOST_NAME_API = 'www.mock-url'
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('Should return data from Api', async () => {
    const axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        pagination: {},
        info: {},
        config: {},
        data: apiResponseExample
      }
    })
    expect(await getArtWorkApi()).toEqual({
      pagination: {},
      info: {},
      config: {},
      data: apiResponseExample
    })
    expect(axiosSpy).toHaveBeenCalledWith('www.mock-url/artworks')
  })
  it('Should return data from Api', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({ })
    await expect(getArtWorkApi()).rejects.toThrowError('API fails')
  })
})
