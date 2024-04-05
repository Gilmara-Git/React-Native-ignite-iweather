import { api } from '@services/api';
import { getCityByNameService } from '@services/getCityByNameService';


describe('API Weather: getCityByNameService', ()=>{
    it('should return city details', async ()=>{

        const apiResponse = {
            id: '1',
            name: 'São Paulo',
            sys: {
                country: 'BR'
            },
            coord:{
                lat: 123,
                lon: 456
            }
        };

        jest.spyOn(api, "get").mockResolvedValue({data : apiResponse});
        const response = await getCityByNameService("São Paulo");
        console.log(response, 'resposta da API')
     
        expect(response.length).toBeGreaterThan(0);
    })
})