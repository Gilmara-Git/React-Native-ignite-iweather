import { getStorageCity , saveStorageCity, removeStorageCity } from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity : CityProps= {
    id: '1',
    name: 'New York',
    longitude: 123,
    latitude: 567
};
describe('AsyncStorage: cityStorage', ()=>{
    it('getStorageCity should return City null when no City stored', async()=>{
       const response =  await getStorageCity();
       expect(response).toBeNull();
    });

    it('saveStorageCity should return City stored', async()=>{

        await saveStorageCity(newCity);

        const response =  await getStorageCity();
        expect(response).toEqual(newCity);
    });

    it('removeStorageCity should return null as storage is being deleted', async()=>{
        // tem que fazer o get storage aqui, porque os testes são independentes'
        await saveStorageCity(newCity);
        await removeStorageCity();
        const response =  await getStorageCity();
        expect(response).toBeNull();

    })
})