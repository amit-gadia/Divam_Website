'use strict'
const Contact = use('App/Models/Contact')

class ContactController {
    async create({request, response, session, auth}){
        const contact = await Contact.create(request.only(['name','email', 'mobile', 'category', 'subject','message' , 'location', 'ip_address']));
        //await auth.contact(contact);

        session.flash({message:'Thank You For Contacting Us'});
        session.flash({message2:'We will Contact You Soon'});
        response.redirect('/contact_thank');
    }
}

module.exports = ContactController
