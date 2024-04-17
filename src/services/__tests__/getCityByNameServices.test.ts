import { api } from '@services/api';
import { getCityByNameService, CityAPIResponse } from '@services/getCityByNameService';
import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse'


describe('Services API Weather: getCityByNameService', ()=>{
 
    it('should return city details', async ()=>{
        jest.spyOn(api, "get").mockResolvedValue({data : mockCityAPIResponse});
        const response = await getCityByNameService("São Paulo");
        // console.log(response)
        expect(response.length).toBeGreaterThan(0);
    })

    it('should return an empty list', async()=>{
       ;

        jest.spyOn(api, 'get').mockResolvedValue({ data: {}})
        const response = await getCityByNameService('');
        console.log(!response.length, 'linha19') //[]
        expect(response.length).toBeFalsy();

    })
})