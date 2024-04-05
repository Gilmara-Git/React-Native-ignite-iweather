import { getWeatherByCityService } from "@services/getWeatherByCityService";
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse";
import { api } from "@services/api";



describe('Services API Weather: getWeatherByCityService',  ()=>{
    it('should return today and nextDays',async ()=>{
    jest.spyOn(api, 'get').mockResolvedValueOnce( { data: mockWeatherAPIResponse } )
    const response = await getWeatherByCityService({ latitude: 123, longitude: 456 })

    expect(response).toHaveProperty('today');
    expect(response).toHaveProperty('nexDays')

    })
})