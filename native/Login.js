import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect, doLogin } from 'shared';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  onChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  onLogin = (evt) => {
    evt.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            { !!this.props.error &&
            <Item fixedLabel>
              <Label>{this.props.error}</Label>
            </Item>
            }
            { !!this.props.token &&
            <Item fixedLabel>
              <Label>{this.props.token}</Label>
            </Item>
            }
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={value => this.onChange({ name: 'username', value})} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={value => this.onChange({ name: 'password', value})}
              />
            </Item>
            <Item last={true}>
              <Button block onPress={this.onLogin}>
                <Text>Login</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: ({ username, password }) => dispatch(doLogin({ username, password }))
});

const mapStateToProps = state => {
  const { app } = state;
  return {
    error: app.loginError,
    token: app.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);