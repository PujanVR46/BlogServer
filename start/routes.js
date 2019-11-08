'use strict';
const Route = use('Route');
const Helpers = use('Helpers');

Route.group(() => {
	Route.post('auth/register', 'UserController.register');
	Route.post('auth/login', 'UserController.login');

	Route.get('blogs', 'BlogController.index').middleware('auth');
	Route.post('blogs', 'BlogController.create').middleware('auth');
	Route.delete('blogs/:id', 'BlogController.destroy').middleware('auth');
	Route.put('blogs/:id', 'BlogController.update').middleware('auth');

	Route.get('allblogs', 'BlogController.all');
}).prefix('api/v1');

Route.any('*', ({ response }) => response.download(Helpers.publicPath('index.html')));
