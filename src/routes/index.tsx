import { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { RouteObject } from 'react-router-dom';

import { Routes } from './routes';

import PublicLayout from './layouts/public';

import Root from './root';
import NotFound from './not-found';

const Router: FC = () => {
  const { t } = useTranslation();
  const routes: RouteObject[] = [
    {
      path: Routes.ROOT,
      element: (
        <PublicLayout
          helmet={{
            title: t('routes.root.helmet.TITLE'),
            meta: {
              name: t('routes.root.helmet.meta.NAME'),
              content: t('routes.root.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <Root /> }],
    },
    {
      path: Routes.NOT_FOUND,
      element: <NotFound />,
    },
    { path: '*', element: <Navigate to={Routes.NOT_FOUND} /> },
  ];
  const router = useRoutes(routes);
  return router;
};

export default Router;
