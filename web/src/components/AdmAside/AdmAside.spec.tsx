import { fireEvent, render } from "@testing-library/react";
import AdmAside from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn().mockReturnValue("true"),
  }),
}));

describe("AdmAside", () => {
  it("verify click button x close It's working correctly", () => {
    const { getByTestId } = render(<AdmAside />);

    const xClose = getByTestId("x-close");
    const aux = fireEvent.click(xClose);

    expect(aux).toBeTruthy();
  });
});
