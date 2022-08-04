import { Hero } from "./index";
import { render, screen } from "@testing-library/react";

describe("Hero", () => {
  it("renders in the DOM", () => {
    const { container } = render(<Hero />);
    expect(container).toBeInTheDocument();
  });

  it("renders an h1", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
