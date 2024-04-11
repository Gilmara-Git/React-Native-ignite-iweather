import { getWeatherByCityService } from "@services/getWeatherByCityService";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "@services/api";



describe('Services API Weather: getWeatherByCityService',  ()=>{
    it('should return today and nextDays',async ()=>{
    jest.spyOn(api, 'get').mockResolvedValueOnce( { data: mockWeatherAPIResponse } )
    const response = await getWeatherByCityService({ latitude: 123, longitude: 456 })
 
    expect(response).toHaveProperty('today');
    expect(response).toHaveProperty('nextDays');
    
    // more examples:
    // expect(response.nextDays).toBeInstanceOf(Array);

    // expect(response.today).toMatchObject({
    //         weather: expect.any(Object),
    //         details: expect.any(Object),
    //   });
        // date: expect.any(Date),
        //weather: expect.any(String)

    })
})