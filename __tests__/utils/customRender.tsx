import { SafeAreaProvider } from "react-native-safe-area-context";
import { CityProvider } from "@contexts/CityContext";
import { ReactElement, ReactNode } from "react";
import { RenderOptions, render } from "@testing-library/react-native";



//Context providers function to be used on tests
const Providers = ({children}: { children :ReactNode })=>{
    return (
        <SafeAreaProvider>
            <CityProvider>
                {children}
            </CityProvider>

        </SafeAreaProvider>
    )
};

// Now from this Provider, we will create our customRender
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
)=>(
    render(ui, {wrapper: Providers, ...options})
);

// from here export everything from @testing-library/react-native
// export our customRender and the Providers function

export * from '@testing-library/react-native';
export { customRender as render, Providers};