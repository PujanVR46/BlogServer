'use strict'

const User=use('App/Models/User');
const { validate } = use('Validator')

class UserController {

  async login({request,auth}){
    const {email,password}=request.all();
    const token=await auth.attempt(email,password);
    return token;
  }

  async register({request}){
    const {name,email,password}=request.all();
    const rules={
      name:'required',
      email:'required|email',
      password:'required'
    }
    const validation=await validate(request.all(),rules)

    if(validation.fails()){
      return validation.messages();
    }
    
    await User.create({
      name,
      email,
      password,
      username:email
    })
    return this.login(...arguments);
  }
}

module.exports = UserController
