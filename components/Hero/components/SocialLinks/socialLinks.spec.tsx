import { SocialLinks } from "./index";
import { render } from "@testing-library/react";

describe("Social Links", () => {
  it("renders in the DOM", () => {
    const { container } = render(<SocialLinks />);
    expect(container).toBeInTheDocument();
  });
});
