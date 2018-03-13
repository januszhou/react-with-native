import React from 'react';
// import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Content, Button, Text, Icon, Title } from 'native-base';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title>Setting</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});