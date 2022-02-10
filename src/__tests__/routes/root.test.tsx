import { render, screen } from '@testing-library/react';
import { SearchContext } from '../../contexts/search';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

import Root from '../../routes/root';

const customRender = (ui: any, provider: any) => {
  return render(
    <SearchContext.Provider value={{ ...provider.providerProps }}>
      {ui}
    </SearchContext.Provider>,
    provider.renderOptions
  );
};

describe('Should render root route', () => {
  describe('should display search results', () => {
    it('must advice user if have not search', () => {
      const providerProps = {
        search: '',
      };
      customRender(
        <I18nextProvider i18n={i18n}>
          <Root />
        </I18nextProvider>,
        { providerProps }
      );
      expect(screen.getByTestId('empty-search')).toBeTruthy();
    });
    it('must display product without discount', () => {
      const providerProps = {
        search: 'asd',
        products: [
          { id: 1, brand: 'test', description: 'test description', price: 500 },
        ],
      };
      customRender(
        <I18nextProvider i18n={i18n}>
          <Root />
        </I18nextProvider>,
        { providerProps }
      );
      expect(screen.queryByTestId('discount-label')).toBeNull();
    });
    it('must display product with discount', () => {
      const providerProps = {
        search: '181',
        products: [
          {
            id: 181,
            brand: 'test',
            description: 'test description',
            price: 500,
          },
        ],
      };
      customRender(
        <I18nextProvider i18n={i18n}>
          <Root />
        </I18nextProvider>,
        { providerProps }
      );
      expect(screen.getByTestId('discount-label')).toBeInTheDocument();
    });
  });
});
