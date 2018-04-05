import React from 'react';
import {Divider, Form, Button, Icon} from 'semantic-ui-react';

export default ({styles,handleClick, handleSubmit}) => {
  const args = {}

  const handleChange= (env, input)=>{
    args[input.name] = input.value

  }

  return (
    <div>
      <div style={styles.box}>
        <img src='images/logo.png'/>
        <Form onSubmit={(ev)=>handleSubmit(ev, args)}>
          <Form.Field>
            <Form.Input name="email" onChange={handleChange } placeholder='email o  nombre de usuario' icon={<Icon name="check circle outline" size="large" />} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="password" onChange={handleChange} type="password" placeholder='password' icon={<Icon name="remove circle" color="red" size="large" />} />
          </Form.Field>
          <Button type='submit' primary fluid>iniciar sesion</Button>
          <Divider horizontal >0</Divider>
          <Button color="facebook">
            <Icon name="facebook"/> Iniciar sesion con facebook
          </Button>

        </Form>

      </div>
      <div style={styles.box}>
        ¿No tienes una cuenta? <a href="" onClick={handleClick}>Registrate</a>
      </div>
    </div>
  )
}
