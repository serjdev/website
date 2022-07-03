import { Hero } from "./index";
import { render } from "@testing-library/react";

describe("Hero", () => {
  it("renders in the DOM", () => {
    const { container } = render(<Hero />);
    expect(container).toBeInTheDocument();
  });

  it("renders an h1", () => {
    const { getByRole } = render(<Hero />);
    expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
