
import { render, screen } from '@testing-library/react-native';
import { WeatherItem } from '@components/WeatherItem';
import Rain from '@assets/cloud_rain_light.svg';
describe('Component: WeatherItem', ()=>{
    it('should show/find Title and Value on render', ()=>{
     const {debug} =  render( <WeatherItem 
            icon={Rain}
            title='Rain probability'
            value='2.05/Km'
            />
            )
            
        // debug();

        const title = screen.getByText('Rain probability');
        const value = screen.getByText('2.05/Km');

        expect(title).toBeTruthy();
        expect(value).toBeTruthy();

    });
    
  
});


