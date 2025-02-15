import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import UserForm from './content/applications/users/UserForm';
import UsersList from './content/management/UsersList';
import CarForm from './content/applications/cars/CarForm/index';
import CarEditForm from './content/applications/cars/CarEditForm';

import PrivateRoute from './privateRoute';
import Login from './content/login';
import Perfil from './content/applications/perfil';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications 

const Users = Loader(
  lazy(() => import('src/content/applications/users/UserList'))
);

const Cars = Loader(
  lazy(() => import('src/content/applications/cars/CarList'))
);

// const Login = Loader(
//   lazy(() => import('src/content/login'))
// );


// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  // rota login
  {
    path:'login',
    element:<Login />,

  },
  {
    path: '',
    // element: <BaseLayout />,
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        // element: <Overview />
        element: <BaseLayout />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    // path: 'dashboards',
    path: 'starter',
    // element: <SidebarLayout />,
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        // element: <Navigate to="crypto" replace />
        element: <SidebarLayout />
      },
      {
        // path: 'crypto',
        path: 'welcome',
        element: <Crypto />
      }
    ]
  },
  // TERMINAR ESSE MIGRAÇÃO RETIRAR TUDO DE management E POR EM applications.
  // {
  //   path: 'applications',
  //   element: <SidebarLayout />,
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="users" replace />
  //     }
  //   ]
  // },
  {
    path: 'applications',
    // element: <SidebarLayout />,
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        // element: <Navigate to="users" replace />
        element: <SidebarLayout />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'userList',
        element: <UsersList />
      },
      {
        path: "newUser",
        element: <UserForm />
      },
      {
        path: "cars",
        element: <Cars />
      },
      {
        path: "newCar",
        element: <CarForm />
      },
      {
        path: "editCar/:id",
        element: <CarEditForm />
      },
      {
        path: 'perfil',
        element: <Perfil />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    // element: <SidebarLayout />,
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        // element: <Navigate to="buttons" replace />
        element: <SidebarLayout />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
];

export default routes;
