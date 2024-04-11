import { render, screen } from '@testing-library/react-native';
import { DayProps } from '@components/Day';
import { NextDays } from '@components/NextDays';
import clearDay from '@assets/clear_day.svg';


describe('Component: NextDays', ()=>{
    it('should render the next 5 days', ()=>{
        const nextDays: DayProps[] = [{
            day: '10/04',
            weather: 'Clear sky',
            max: '36C',
            min: '26C',
            icon: clearDay,
        },{
            day: '11/04',
            weather: 'Clear sky',
            max: '46C',
            min: '26C',
            icon: clearDay,
        },{
            day: '12/04',
            weather: 'Clear sky',
            max: '66C',
            min: '26C',
            icon: clearDay,
        },
        {
            day: '13/04',
            weather: 'Clear sky',
            max: '66C',
            min: '26C',
            icon: clearDay,
        },
        {
            day: '14/04',
            weather: 'Clear sky',
            max: '66C',
            min: '26C',
            icon: clearDay,
        }

    ]

       const {debug} =  render(<NextDays data={nextDays}/>);
    //    debug()

        const next5Days =  screen.getByTestId('next-5-days-wrapper');
        expect(screen.getByText('36C')).toBeTruthy();
        // console.log(Array.isArray(next5Days.children)) //true
        expect(next5Days.children).toBeInstanceOf(Array)
        expect(next5Days.children.length).toBe(5);

    });
})