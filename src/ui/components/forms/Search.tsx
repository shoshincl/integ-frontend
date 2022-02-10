import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import { SearchContext } from '../../../contexts/search';

export const handleSearch = async (search: string) =>
  await new Promise(async (resolve, reject) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URI}/products?search=${search}`)
        .then((response) => response.json())
        .then(({ products }) => resolve(products));
    } catch (error) {
      reject(error);
    }
  });

const Search: FC = () => {
  const { t } = useTranslation();
  const { onHandleSearch } = useContext(SearchContext);
  return (
    <Formik
      onSubmit={async ({ search }, actions) => {
        actions.setSubmitting(true);
        await handleSearch(search).then((products: any) =>
          onHandleSearch(search, products).then(() =>
            actions.setSubmitting(false)
          )
        );
      }}
      initialValues={{ search: '' }}
    >
      {({ handleSubmit, handleChange, values, isSubmitting }) => {
        const { search } = values;
        return (
          <Form
            role="search"
            className="min-w-[33%] xl:min-w-[50%]"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <Field
                name="search"
                type="search"
                value={search}
                onChange={handleChange}
                className="rounded-2xl py-1 pl-7 pr-2 w-full"
                placeholder={t('ui.components.forms.search.fields.input.PH')}
                validate={(search: any) => {
                  if (isNaN(search) && search.length < 3) return true;
                  else return false;
                }}
                disabled={isSubmitting}
                required
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Search;
