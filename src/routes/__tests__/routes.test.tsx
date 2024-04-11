import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { Routes } from "@routes/index";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";

import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("Routes: AppRoutes", () => {
  it('should render Search screen when there is "NO" city selected', async () => {
    render(<Routes />);

    const chooseLocalSentence = await waitFor(() =>
      screen.findByText(/escolha um local para/i)
    );
    expect(chooseLocalSentence).toBeTruthy();
  });

  it('should render Dashboard screen when "there is" city selected', async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "123",
      name: "London",
      latitude: 56,
      longitude: 44,
    };
    await saveStorageCity(city);

    const { debug } = await act(() => waitFor(() => render(<Routes />)));
    //    debug()

    const title = screen.getByText("London");
    expect(title).toBeTruthy();
  });
});
