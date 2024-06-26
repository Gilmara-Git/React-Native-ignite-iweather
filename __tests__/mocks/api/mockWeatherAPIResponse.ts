import { WeatherAPIResponseProps } from '@services/getWeatherByCityService';

const currentDate = new Date(); 
const nextDay = new Date();
nextDay.setDate(currentDate.getDate() +1); 

//mocking how API returns data
export const mockWeatherAPIResponse: WeatherAPIResponseProps = {
    list: [
        {
          pop: 0.5,
          main: {
            temp: 34,
            temp_min: 32,
            temp_max: 36,
            feels_like: 35,
            humidity: 0.5,
            temp_kf: 1,
          },
          wind: {
            speed: 15,
          },
          weather: [
            {
              description: 'Céu limpo',
              main: 'Clear',
            }
          ],
          dt_txt: nextDay.toDateString()
        },
        {
          pop: 0.5,
          main: {
            temp: 34,
            temp_min: 32,
            temp_max: 36,
            feels_like: 35,
            humidity: 0.5,
            temp_kf: 1,
          },
          wind: {
            speed: 15,
          },
          weather: [
            {
              description: 'Céu limpo',
              main: 'Clear',
            }
          ],
          dt_txt: nextDay.toDateString()
        },
      ],
    };
