'use strict'

const Database=use('Database')
const User = use('App/Models/User')
class UserController {
    async create({request, response, auth }){
        const user = await User.create(request.only(['username','email','password']));
        
        await auth.login(user);
        return response.redirect('/admin/');
    }

    async login({request, auth, response, session}){
        const{ email, password } = request.all();

        try{
            await auth.attempt(email, password);
            return response.redirect('/admin.deshboard')
        }catch(error){

        }
}
async posts({params,view}) {
    const abc= await Database.select('*').from('blog').where('id',params.id)
    return view.render('admina.blog.showposts',{abc})
}
async visible ({params,view }) {
    const a=params.id
    const abc= await Database.select('*').from('blog').where('flag','show')
    const results = await Database.from('blog').paginate(a,5)
    console.log(results)
    return view.render('blog',{abc:results})
    }

async blogvisible ({params,view }) {
    const a=params.id
    const abc= await Database.select('*').from('blog').where('id',params.id)
    console.log(abc[0])
    return view.render('blogvisit',{abc:abc})

    }
}

module.exports = UserController
