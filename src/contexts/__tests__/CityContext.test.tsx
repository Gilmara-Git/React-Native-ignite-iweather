import { renderHook , act , waitFor} from "@testing-library/react-native";
import { useCity } from "@hooks/useCity";
import { CityProvider } from "@contexts/CityContext";

describe('Context: CityContext', ()=>{
    it('should be changing city to selected City', async()=>{
      const { result } =  renderHook(()=> useCity(), { wrapper: CityProvider});
      await waitFor(()=>
          act(() => result.current.handleChanceCity({
            id: '1', 
            name: 'Tampa', 
            longitude: 0, 
            latitude: 10
        })
          )

      )

    // console.log(result.current.city?.name)
    expect(result.current.city?.name).toBe('Tampa');
        
    });
});