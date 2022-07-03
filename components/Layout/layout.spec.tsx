import { Layout } from "./Layout";
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { mockNextRouter } from "../test-utils/mockNextRouter";

describe("Layout", () => {
  it('Layout"', () => {
    const { container } = render(
      <RouterContext.Provider value={mockNextRouter({})}>
        <Layout>
          <></>
        </Layout>
      </RouterContext.Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
