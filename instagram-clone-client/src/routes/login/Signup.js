import React from 'react';
import {Divider,Button, Icon, Form, Message} from 'semantic-ui-react';
import _find from 'lodash/find';

export default ({styles, handleClick, handleSubmit,handleChange, args, errors}) => {



  return (
    <div>
      <div style={styles.box}>
        <img alt="logo" src='images/logo.png'/>
        <h4>Registrate para ver fotos y videos de tus amigos.</h4>
        <Form onSubmit={(ev)=>handleSubmit(ev,args)} >
          <Button color="facebook">
            <Icon name="facebook"/> Iniciar sesion con facebook
          </Button>
          <Divider horizontal> 0 </Divider>
          <Form.Field>
            <Form.Input  name="email" onChange={handleChange} placeholder='email' icon={!errors.length?null:_find(errors, {path:'email'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />}/>
          </Form.Field>
          <Form.Field>
            <Form.Input name="fullname" onChange={handleChange} placeholder='nombre completo' icon={!errors.length?null:_find(errors, {path:'fullname'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />}/>
          </Form.Field>
          <Form.Field>
            <Form.Input name="username" onChange={handleChange} placeholder='nombre de usuario' icon={!errors.length?null:_find(errors, {path:'username'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />}/>
          </Form.Field>
          <Form.Field>
            <Form.Input name="password" onChange={handleChange} type="password" placeholder='password' icon={!errors.length?null:_find(errors, {path:'password'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />}/>
          </Form.Field>

          <Button type='submit'
            disabled = {!args.email || !args.username || !args.fullname || !args.password}
            primary
            fluid> Registrarse
          </Button>


          {
            errors.length?<Message negative header="los sieguientes errores:"
            list={errors.map(error=>`[${error.path}] ${error.message}`)} />:null
          }

        </Form>




      </div>
      <div style={styles.box}>
        ¿Ya tienes una cuenta? <a href="" onClick={handleClick}>Inicia Sesion</a>
      </div>
    </div>
  )
}
