/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import CategoriesRoutes from '../api/Category/CategoriesRoutes';
import UsersRoutes from '../api/User/UsersRoutes';
import ProductsRoutes from '../api/Products/ProductsRoutes';

Route.get('/', async () => {
  return { hello: 'world' }
});


const ApiRoutes = async() => {

  Route.group(UsersRoutes).prefix('users');
  Route.group(CategoriesRoutes).prefix('categories');
  Route.group(ProductsRoutes).prefix('products');

};



Route.group(ApiRoutes).prefix('api/v1');