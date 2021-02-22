'use strict'
const Helpers = use('Helpers')
const Database=use('Database')
class AdminController {
    async visible ({ view }) {
    const abc= await Database.select('*').from('blog').where('flag','show')
    return view.render('admina.blog.showvisiblepost',{abc:abc})
    }
    async hide ({ view }) {  
    const abc= await Database.select('*').from('blog').where('flag','hide')
    return view.render('admina.blog.showhidepost',{abc})
    }
async add({request, response,view}){
    const term = request.all()
    console.log(term)
    const profilePic = request.file('image')
    profilePic.move(Helpers.publicPath('uploads'))
    console.log(profilePic.clientName)
    
    if(term.val==undefined){
    const abc= await Database.table('blog').insert({title:term.title,content:term.blog_data,flag:'hide',category:term.category,img:profilePic.clientName})
    const a={
        code:'<div class="alert alert-dismissible alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>New Blog Add Successfully in Draft</strong></div>'
        }
        return view.render('admina.blog.fp',{a})
    }
    else{
    const abc= await Database.table('blog').insert({title:term.title,content:term.blog_data,flag:'show',category:term.category,img:profilePic.clientName})
    const a={
        code:'<div class="alert alert-dismissible alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>New Blog Add Successfully in Visible Mode</strong></div>'
    }
    return view.render('admina.blog.fp',{a})
    }
}


async edit({request, response,view}){
    const term = request.all()
    if(term.val==undefined){
        const abc= await Database.table('blog').where({id:term.id}).update({title:term.title,content:term.blog_data,flag:'hide'})
        const a={
            code:'<div class="alert alert-dismissible alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Updated Blog</strong></div>'
        }
        return view.render('admina.blog.fp',{a})
    }
    else{
        const abc= await Database.table('blog').where({id:term.id}).update({title:term.title,content:term.blog_data,flag:'show'})
        const a={
            code:'<div class="alert alert-dismissible alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Updated Blog</strong></div>'
        }
        return view.render('admina.blog.fp',{a})
    }
    
}
async delete({params,view}){

    const abc= await Database.delete('id').from('blog').where('id',params.id)
    const a={
        code:'<div class="alert alert-dismissible alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button><strong> Blog Deleted </strong></div>'
    }
    return view.render('admina.blog.fp',{a})

}
async visit({params,view}){

    const abc= await Database.table('blog').where({id:params.id}).update({flag:'show'})
    const a={
        code:'<div class="alert alert-dismissible alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button><strong> Hide to Visible Blog</strong></div>'
    }
    return view.render('admina.blog.fp',{a})
}
async hideed({params,view}){

    const abc= await Database.table('blog').where({id:params.id}).update({flag:'hide'})
    const a={
        code:'<div class="alert alert-dismissible alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button><strong> Visible To Hide Blog</strong></div>'
    }
    return view.render('admina.blog.fp',{a})
}
async edited({params,view}){

    const abc= await Database.select('*').from('blog').where('id',params.id)
    return view.render('admina.blog.edit',{abc})
}
async posts({params,view}) {
    const abc= await Database.select('*').from('blog').where('id',params.id)
    return view.render('admina.blog.showpostid',{abc})
}

async postss({params,view}) {
    const abc= await Database.select('*').from('blog').where('id',params.id)
    return view.render('admina.blog.showposts',{abc})
}
async main({params,view}) {
    const a={
        code:""
    }
    return view.render('admina.blog.fp',{a})
}
async create_new_post({params,view}) {
    return view.render('admina.blog.create_new_post')
}

}

module.exports = AdminController
