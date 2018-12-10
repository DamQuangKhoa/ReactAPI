import React from 'react';
import NotFoundPage from './pages/404/components/App';
import HomePage from './pages/home/components/App';
import Products from './pages/manage/components/products';
import AddProduct from './pages/ActionProduct/components/add_product';

const route =
    [
        {
            path: '/',
            exact: true,
            main: () => <HomePage />
        },
        {
            path: '/products',
            exact: true,
            main: () => <Products />
        },
        {
            path: '/products/add',
            exact: false,
            main: () => <AddProduct />
        },
        {
            path: '/products/update/:id',
            exact: false,
            main: (match) => <AddProduct match = {match}/>
        },
        {
            path: '',
            exact: false,
            main: () => <NotFoundPage />
        },
    ]

export default route