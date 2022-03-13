import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
    <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
    </Suspense>
);

// Applications

const Messenger = Loader(lazy(() => import('src/content/applications/Messenger')));
const Transactions = Loader(lazy(() => import('src/content/applications/Transactions')));
const Accounts = Loader(lazy(() => import('src/content/applications/Accounts')));
const Transfer = Loader(lazy(() => import('src/content/applications/Transfer')));

const routes: PartialRouteObject[] = [
    {
        path: '*',
        element: <SidebarLayout />,
        children: [
            {
                path: '/',
                element: (
                    <Navigate
                        to="/management/transactions"
                        replace
                    />
                )
            },
            {
                path: '/overview',
                element: (
                    <Navigate
                        to="/management/transactions"
                        replace
                    />
                )
            },
        ]
    },
    {
        path: 'management',
        element: (
            <SidebarLayout />
        ),
        children: [
            {
                path: '/',
                element: (
                    <Navigate
                        to="/management/transactions"
                        replace
                    />
                )
            },
            {
                path: 'transactions',
                element: <Transactions />
            },
            {
                path: 'accounts',
                element: <Accounts />
            },
            {
                path: 'transfer',
                element: <Transfer />
            }
        ]
    }
];

export default routes;
