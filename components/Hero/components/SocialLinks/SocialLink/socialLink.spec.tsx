import { SocialLink } from "./index";
import { getByRole, render } from "@testing-library/react";

describe("Social Links", () => {
  const dummyLink = {
    url: "https://www.facebook.com/",
    label: "Facebook",
    icon: "facebook",
  };
  it("renders in the DOM", () => {
    const { container } = render(<SocialLink link={dummyLink} />);
    expect(container).toBeInTheDocument();
  });

  it("render a link with anchor tag pointing to url from props", () => {
    const { getByRole } = render(<SocialLink link={dummyLink} />);
    expect(getByRole("link")).toHaveAttribute(
      "href",
      "https://www.facebook.com/"
    );
  });
});
