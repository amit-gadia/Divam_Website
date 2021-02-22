'use strict'

class CreateContact {
  get rules () {
    return {
      // validation rules
      'name':'required',
      'email':'required|email',
      'mobile':'required',
      'message':'required'
    }
  }
  get messages()
  {
    return{
      'required':'Woah now , {{ field }} is required.',
    }
  }
  async fails(error){
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateContact
