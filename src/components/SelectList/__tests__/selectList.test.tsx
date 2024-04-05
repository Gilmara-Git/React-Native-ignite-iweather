import { render, screen, fireEvent, userEvent } from "@testing-library/react-native";
import { SelectList } from '@components/SelectList';

describe('Component: SelectList', ()=>{

    const cities = [
        {id: '1', name: 'New York', longitude:-73.935242, latitude:40.730610}, 
        {id: '2', name: 'Elizabeth', longitude:-74.19812360540847, latitude:40.66617498891524}]
        
        it('should return city selected', ()=>{
            
            const onPress = jest.fn();
            
            render(<SelectList 
                data={cities}
                onChange={()=>{}}
                onPress={onPress}
                />)
          
        
            const selectedCity = screen.getByText(/New york/i); // city to be shown for user to Press on it
            
            fireEvent.press(selectedCity);    //simulate a press event by the user;
            expect(onPress).toHaveBeenCalledWith(cities[0]);// validating that onPress is called with cities selected


        
    })

        it('should not show/return city(ies) option(s) if data list is empty', ()=>{
            render(<SelectList 
                    data={[]} 
                    onPress={()=>{}} 
                    onChange={()=>{}} />
                    )

                    // get the list passed to TouchableOpacity
                    const options =  screen.getByTestId('options');
                    expect(options.children).toHaveLength(0);


        })
})