import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { Layout } from './Layout';
import { mockNextRouter } from '../test-utils/mockNextRouter';

describe('Layout', () => {
  it('Layout"', () => {
    const { container } = render(
      <RouterContext.Provider value={mockNextRouter({})}>
        <Layout>
          <div>1</div>
        </Layout>
      </RouterContext.Provider>,
    );

    expect(container).toBeInTheDocument();
  });
});
