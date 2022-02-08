import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

export const handleSearch = async (search: string) =>
  new Promise((resolve) => {
    try {
      resolve(search);
    } catch (error) {}
  });

const Search: FC = () => {
  const { t } = useTranslation();
  return (
    <Formik
      onSubmit={async ({ search }) =>
        await handleSearch(search).then((res) => console.log(res))
      }
      initialValues={{ search: '' }}
    >
      {({ handleSubmit, handleChange, values }) => {
        const { search } = values;
        return (
          <Form role="search" onSubmit={handleSubmit}>
            <div className="relative text-gray-600 focus-within:text-gray-400">
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
              <input
                name="search"
                type="search"
                value={search}
                onChange={handleChange}
                className="rounded-2xl py-1 pl-7 pr-2"
                placeholder={t('ui.components.forms.search.fields.input.PH')}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Search;
