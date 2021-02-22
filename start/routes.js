'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')

Route.on('/contact').render('contact')
Route.post('/contact','contactController.create').validator('CreateContact')
Route.on('/contact_thank').render('contact_thank');
Route.on('/about').render('about')
Route.on('/case_study').render('casestudy')
Route.on('/webinar').render('webinar')
Route.on('/admin/').render('admin.login')
Route.post('/admin/','UserController.loin').validator('LoginUser')
Route.on('/admin/signup').render('admin.signup')
Route.post('/admin/signup','UserController.create').validator('CreateUser')
Route.get('/admin/logout',async({auth, response}) => {
    await auth.logout();
    return response.redirect('/admin');
})
const Helpers = use('Helpers')


Route.get('/admin/blog','AdminController.main')
Route.get('/admin/blog/visible','AdminController.visible')
Route.get('/admin/blog/hide','AdminController.hide')
Route.get('/admin/blog/post/new','AdminController.create_new_post')

Route.post('/admin/blog/ami','AdminController.add')
Route.post('/admin/blog/editview','AdminController.edit')
Route.get('/admin/blog/del/:id','AdminController.delete')

Route.get('/blog/:id','UserController.visible')
Route.get('/blogvisit/:id','UserController.blogvisible')
Route.get('/admin/blog/visible/:id','AdminController.visit')
Route.get('/admin/blog/hide/:id','AdminController.hideed')
Route.get('/admin/blog/edit/:id','AdminController.edited')
Route.get('/admin/blog/posts/:id','AdminController.posts')
Route.get('/admin/contact','AdminController.contact')
Route.get('/admin/blog/postss/:id','UserController.posts')
Route.on('/ind').render('layouts.index')
