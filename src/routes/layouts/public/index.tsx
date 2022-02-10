import { FC } from 'react';
import { Outlet } from 'react-router';

import Navbar from './Navbar';
import { Helmet as HelmetReact } from '../../../ui/components/utils';
import { SearchContextProvider } from '../../../contexts/search';

interface Content {
  name: string;
  content: string;
}

interface Helmet {
  title: string;
  meta: Content;
}

interface Props {
  helmet: Helmet;
}

const Public: FC<Props> = ({ helmet }) => (
  <SearchContextProvider>
    <HelmetReact {...helmet} />
    <Navbar />
    <div className="h-full px-5 pt-[90px]">
      <Outlet />
    </div>
  </SearchContextProvider>
);

export default Public;
