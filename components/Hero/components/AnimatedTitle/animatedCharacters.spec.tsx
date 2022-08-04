import { AnimatedCharacters } from "./animatedCharacters";
import { render, screen } from "@testing-library/react";
describe("AnimatedCharacters", () => {
  it("should render correctly with tagName=h1", () => {
    render(
      <AnimatedCharacters
        text="Hi I am Sergiu, a web developer based in Italy!"
        tagName="h1"
      />
    );

    expect(screen.getAllByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render correctly with tagName=h5", () => {
    render(
      <AnimatedCharacters
        text="Hi I am Sergiu, a web developer based in Italy!"
        tagName="h5"
      />
    );

    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
  });
});
