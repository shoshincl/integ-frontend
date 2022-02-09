import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const handleSearch = async (search: string) =>
  new Promise((resolve) => {
    try {
      resolve(search);
    } catch (error) {}
  });

const ValidationSchema = Yup.object().shape({
  search: Yup.string().required(),
});

const Search: FC = () => {
  const { t } = useTranslation();
  return (
    <Formik
      onSubmit={async ({ search }) =>
        await handleSearch(search).then((res) => console.log(res))
      }
      initialValues={{ search: '' }}
      validationSchema={ValidationSchema}
    >
      {({ handleSubmit, handleChange, values }) => {
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
              <input
                name="search"
                type="search"
                value={search}
                onChange={handleChange}
                className="rounded-2xl py-1 pl-7 pr-2 w-full"
                placeholder={t('ui.components.forms.search.fields.input.PH')}
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
