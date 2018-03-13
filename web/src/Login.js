import React, { Component } from 'react';
import { connect, doLogin } from 'shared';
import { Grid, Row, Col } from '@abot/react-higgs/lib/grid';
import { Input } from '@abot/react-higgs/lib/input';
import { Button } from '@abot/react-higgs/lib/button';
import { Typography } from '@abot/react-higgs/lib/typography';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  onChange = (value, ev) => {
    this.setState({ [ev.target.name]: value });
  };

  onLogin = (evt) => {
    evt.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Typography tag="h1">Login</Typography>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input label="Username" autoComplete="off" value={this.state.username} onChange={this.onChange} name="username"/>
          </Col>
          <Col>
            <Input label="Password" autoComplete="off" type="password" value={this.state.password} onChange={this.onChange} name="password"/>
          </Col>
          <Col>
            <Button label="Login" onClick={this.onLogin}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: ({ username, password }) => dispatch(doLogin({ username, password }))
});

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
