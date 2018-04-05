import React from 'react';
import {Divider,Button, Icon, Form} from 'semantic-ui-react'

export default ({styles, handleClick}) => {
  const args={}

  const handleChange = (ev, input)=>{
    console.log(input);
  }

  return (
    <div>
      <div style={styles.box}>
        <img src='images/logo.png'/>
        <h4>Registrate para ver fotos y videos de tus amigos.</h4>
        <Form >
          <Button color="facebook">
            <Icon name="facebook"/> Iniciar sesion con facebook
          </Button>
          <Divider horizontal> 0 </Divider>
          <Form.Field>
            <Form.Input  onChange={handleChange} placeholder='email' icon={<Icon name="remove circle" color="red" size="large" />}/>
          </Form.Field>
          <Form.Field>
            <Form.Input  placeholder='nombre completo' icon={<Icon name="remove circle" color="red" size="large" />}/>
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder='nombre de usuario' icon={<Icon name="remove circle" color="red" size="large" />}/>
          </Form.Field>
          <Form.Field>
            <Form.Input type="password" placeholder='password' icon={<Icon name="remove circle" color="red" size="large" />}/>
          </Form.Field>

          <Button type='submit' primary fluid> Registrarse </Button>
        </Form>




      </div>
      <div style={styles.box}>
        ¿Ya tienes una cuenta? <a href="" onClick={handleClick}>Inicia Sesion</a>
      </div>
    </div>
  )
}
