import { Day } from '@components/Day';
import { render, screen } from '@testing-library/react-native';
import clearDay from '@assets/clear_day.svg';


describe('Component: Day', () => {
    it('should render component Day and with its properties', ()=>{
        const { debug } = render(
        <Day data={ {
            day: '08/04',
            weather: 'Clear sky',
            max: '56C',
            min: '26C',
            icon: clearDay,
        }} 
        />)

      debug()

      expect(screen.getByText('08/04')).toBeTruthy();
    })
})