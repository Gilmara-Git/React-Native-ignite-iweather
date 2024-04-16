import { Dashboard } from '@screens/Dashboard';
import { render , screen, waitFor, fireEvent, act} from '@__tests__/utils/customRender';

import { CityProps } from '@services/getCityByNameService';
import { removeStorageCity, saveStorageCity } from '@libs/asyncStorage/cityStorage';

import { api } from '@services/api';
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse';
import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse';

describe('Screen: Dashboard', () => {
    
        // this is being used for 1st and 2nd test
        beforeAll(async()=>{
            const cityInStorage : CityProps = {
                id: '2',
                name: 'Boston',
                longitude: 345,
                latitude: 45890
             }   
    
             await saveStorageCity(cityInStorage);
    
        })
       
        it('should show current city weather', async()=>{
        jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse});    
  

        const {debug} = render(<Dashboard />);
        // debug()
        // const currentCity =  screen.getByText(cityInStorage.name);
        const currentCity  = await waitFor(()=> screen.findByText('Boston'));
        expect(currentCity).toBeTruthy();

    });

        it('should be showing the weather for the next city selected', async()=>{
            // In this test there will be different calls to the API, so we are going to call
            // each of them once
            jest.spyOn(api, 'get')
                .mockResolvedValueOnce({data: mockWeatherAPIResponse})  
                .mockResolvedValueOnce({data: mockCityAPIResponse})
                .mockResolvedValueOnce({data: mockWeatherAPIResponse});   

            // after this action the 1st Api mock happens

            const {debug} = render(<Dashboard />);

            const currentCity  = await waitFor(()=> screen.findByText('Boston')); //true
        
            // changing city /next city selected
            const newCitySelected = 'São Paulo';

           await waitFor(()=>act(()=>{
                const searchInput =  screen.getByTestId('search-input');
                fireEvent.changeText(searchInput, newCitySelected);
                //after this action the 2nd Api mock happens

             

           }))

           await waitFor(()=>act(()=>{
            fireEvent.press(screen.getByText(newCitySelected, { exact: false}));
            //after this action the 3rd Api mock happens

       }))
        
            // debug()

           const newSelectedCity =  screen.getByText(/são pau/i)
           expect(newSelectedCity).toBeTruthy();
          
        })


         // Would show Loading if there were no city in storage
         it('should show "Loading component" when there is no City returned from Context/Storage', async()=>{
            await removeStorageCity() // ensuring there is no City returned from Context
            await waitFor (()=>render(<Dashboard />));
            const loadingComponent = screen.getByTestId('loading');
            expect(loadingComponent).toBeTruthy();
        });
     
 
});