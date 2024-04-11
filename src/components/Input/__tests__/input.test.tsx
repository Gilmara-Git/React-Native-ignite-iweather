import { render, screen } from '@testing-library/react-native';
import { Input } from '@components/Input';

describe('Component: Input', ()=>{
    it('should render without ActivityIndicator if isLoading is undefined/falsy', ()=>{
        
        render(<Input/>);
        const ActivityIndicator = screen.queryByTestId('activity-indicator');
        expect(ActivityIndicator).toBeNull();
        
        //   const {debug}  = render(<Input/>);
        //   debug()
    })

    it('should render with ActivityIndicator if isLoading prop is true', ()=>{
        render(<Input isLoading/>);
        const ActivityIndicator = screen.getByTestId('activity-indicator');
        expect(ActivityIndicator).toBeTruthy();
   
      })
})
