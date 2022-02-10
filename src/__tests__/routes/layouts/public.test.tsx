import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

import PublicLayout from '../../../routes/layouts/public';

describe('Should render public route layout', () => {
  const helmet = {
    title: 'test-route',
    meta: { name: 'route name', content: 'route content' },
  };
  render(
    <HelmetProvider context={{}}>
      <I18nextProvider i18n={i18n}>
        <PublicLayout helmet={helmet} />
      </I18nextProvider>
    </HelmetProvider>
  );
  it('must display navbar with search', () => {
    const nav = screen.getByRole('navigation');
    const search = screen.getByRole('search');
    expect(nav).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
});
