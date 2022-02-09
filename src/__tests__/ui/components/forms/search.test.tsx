import {
  cleanup,
  render,
  fireEvent,
  RenderResult,
  waitFor,
} from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n';

import { SearchContext } from '../../../../contexts/search';
import Search, { handleSearch } from '../../../../ui/components/forms/Search';

describe('Should render Search form', () => {
  let submitHandler: jest.Mock;
  let screen: RenderResult;
  let form: HTMLElement;
  let input: HTMLElement;
  const onHandleSearch = jest.fn();
  beforeEach(() => {
    screen = render(
      <I18nextProvider i18n={i18n}>
        <SearchContext.Provider value={{ onHandleSearch }}>
          <Search />
        </SearchContext.Provider>
      </I18nextProvider>
    );
    submitHandler = jest.fn();
    form = screen.getByRole('search');
    input = screen.getByRole('searchbox');
    form.onsubmit = submitHandler;
  });
  afterEach(cleanup);
  it('must prevent submission if empty search', () => {
    waitFor(() => {
      fireEvent.submit(input);
      expect(submitHandler).not.toHaveBeenCalled();
    });
  });
  it('must prevent submission if search is string of length < 3', () => {
    waitFor(() => {
      fireEvent.change(input, { target: { value: 'ab' } });
      fireEvent.submit(input);
      expect(submitHandler).not.toHaveBeenCalled();
    });
  });
  it('must fire submission if search is number', () => {
    waitFor(() => {
      fireEvent.change(input, { target: { value: 1 } });
      fireEvent.submit(input);
      expect(submitHandler).toHaveBeenCalled();
    });
  });
  describe('Form submission', () => {
    it('must fetch results and update context', () => {
      waitFor(() => {
        fireEvent.change(input, { target: { value: 1 } });
        fireEvent.submit(input);
        expect(handleSearch).toHaveBeenCalledTimes(1);
        expect(onHandleSearch).toHaveBeenCalled();
      });
    });
  });
});
