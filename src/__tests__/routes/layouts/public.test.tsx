import { render, screen, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import PublicLayout from '../../../routes/layouts/public';

describe('Should render public route layout', () => {
  const helmet = {
    title: 'test-route',
    meta: { name: 'route name', content: 'route content' },
  };
  render(
    <HelmetProvider context={{}}>
      <PublicLayout helmet={helmet} />
    </HelmetProvider>
  );
  it('must display navbar with logo', () => {
    const nav = screen.getByRole('navigation');
    const logo = screen.getByRole('img');
    expect(nav).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});
