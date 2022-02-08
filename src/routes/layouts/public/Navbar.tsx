import { useTranslation } from 'react-i18next';

import logo from '../../../assets/logo.svg';
import cart from '../../../assets/cart.svg';
import shop from '../../../assets/shop.svg';

import Search from '../../../ui/components/forms/Search';

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="bg-primary shadow-lg fixed w-full">
      <div className="flex w-full items-center bg-primaryDark h-[30px] px-2">
        <p className="text-xs text-white">
          {t('routes.layouts.public.navbar.customer_service.LABEL')}
          <span className="text-primary">
            {t('routes.layouts.public.navbar.customer_service.PHONE')}
          </span>
          {t('routes.layouts.public.navbar.customer_service.SCHEDULE')}
        </p>
      </div>
      <div className="mx-auto px-2 h-[60px]">
        <div className="flex justify-between items-center h-full py-2">
          <div className="flex h-full gap-x-2">
            <img alt="logo" className="h-full w-[150px]" src={logo} />
            <button className="items-center text-white bg-accentDark p-2 rounded-md h-full hidden lg:flex">
              <svg
                className="w-6 h-6 ml-1 mr-2"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <p className="text-md mr-4">
                {t('routes.layouts.public.navbar.actions.GO_TO_CATEGORIES')}
              </p>
            </button>
          </div>
          <Search />
          <div className="flex h-full gap-x-2">
            <button className="flex items-center text-black bg-accentDark p-2 rounded-md h-full">
              <img src={cart} className="h-full ml-1 mr-2" />
              <div className="bg-secondary rounded-full mr-1">
                <span className="m-2">0</span>
              </div>
            </button>
            <button className="items-center text-white bg-accent p-2 rounded-md h-full hidden md:flex">
              <img src={shop} className="h-full ml-1 mr-2" />
              <p className="text-md mr-4">
                {t('routes.layouts.public.navbar.actions.GO_TO_STORE')}
              </p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
