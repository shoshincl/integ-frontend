import {
  cleanup,
  render,
  fireEvent,
  RenderResult,
} from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n';

import Search from '../../../../ui/components/forms/Search';

describe('Should render Search form', () => {
  let submitHandler: jest.Mock;
  let screen: RenderResult;
  let form: HTMLElement;
  let input: HTMLElement;
  beforeEach(() => {
    screen = render(
      <I18nextProvider i18n={i18n}>
        <Search />
      </I18nextProvider>
    );
    submitHandler = jest.fn();
    form = screen.getByRole('search');
    input = screen.getByRole('searchbox');
    form.onsubmit = submitHandler;
  });
  afterEach(cleanup);
  it('must prevent submission if empty search', () => {
    fireEvent.submit(input);
    expect(submitHandler).not.toHaveBeenCalled();
  });
});
