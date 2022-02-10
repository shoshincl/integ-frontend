import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchContext } from '../../contexts/search';

import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';

import Product from './Product';

function Results() {
  const { t } = useTranslation();
  const { search, products } = useContext(SearchContext);
  return (
    <div className="flex h-full w-full mt-5">
      {!search ? (
        <div className="h-full w-full flex items-center justify-center">
          <h1 data-testid="empty-search" className="text-2xl text-gray-500">
            {t('ui.layouts.results.NOTHING_TO_SHOW')}
          </h1>
        </div>
      ) : (
        <div className="w-full">
          <div className="row w-full flex justify-between items-center">
            <p className="text-sm">
              {t('ui.layouts.results.SEARCHED')}
              <span>
                <b>{search}</b>
              </span>
              :
            </p>
            <div className="flex bg-white py-2 pl-3 pr-2 items-center">
              <p className="text-sm mr-16">{t('ui.layouts.results.SORT_BY')}</p>
              <img src={arrowRight} alt="right arrow" className="h-2" />
            </div>
          </div>
          <div className="pt-4 xs:px-14 md:pl-72 h-[85%]">
            {products?.length > 0 && (
              <div className="grid grid-flow-col overflow-x-auto gap-5 h-[87%]">
                {products.map((product) => (
                  <Product key={product?.id} product={product} />
                ))}
              </div>
            )}
            <div className="flex my-5 bg-white py-2 pl-5 pr-2 justify-center items-center gap-2">
              <img src={arrowLeft} alt="left arrow" className="h-2" />
              <p className="text-xs text-white bg-primary rounded-full text-center p-1 min-w-[25px]">
                <b>1</b>
              </p>
              <img src={arrowRight} alt="right arrow" className="h-2" />
            </div>
          </div>
          <div className="flex bg-white py-2 pl-5 pr-2 items-center justify-between">
            <p className="text-sm text-primary">
              <b>{t('ui.layouts.results.LEGAL')}</b>
            </p>
            <img src={arrowRight} alt="right arrow" className="h-3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
