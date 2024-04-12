import { Search  } from "@screens/Search";
import { render, screen, fireEvent, waitFor } from "@__tests__/utils/customRender";

import { api } from "@services/api";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";


describe('Screen: Search', ()=>{
    
    it('should show city options when user types a city', async()=>{
        jest.spyOn(api, 'get').mockResolvedValue({data: mockCityAPIResponse});
        
        const { debug  } = render(<Search/>);


        const searchInput = screen.getByTestId("search-input");
         fireEvent.changeText(searchInput, 'Boston');

         
         const option =  await waitFor(()=> screen.findByText(/São paulo/i));
        //  debug()
   
        expect(option).toBeTruthy();


    })
})