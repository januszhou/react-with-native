import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
// import Button from './components/Button';
import { Input, Icon, Button, Header } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MyApp from './MyApp';

const MyCustomLeftComponent = props => {
  return (<Text>Component</Text>)
};

// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <View>
//           <Header
//             leftComponent={{ icon: 'menu', color: '#fff' }}
//             centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//             rightComponent={{ icon: 'home', color: '#fff' }}
//           />
//         </View>
//         <View>
//           <Text>Open up App.js to start working on your app!</Text>
//           <Text>Changes you make will automatically reload.</Text>
//           <Text>Shake your phone to open the developer menu.</Text>
//           {/*<Button onPress={() => Alert.alert('You tapped the button!', 'Hello')} title="Search"/>*/}
//           <Input
//             placeholder='INPUT WITH SHAKING EFFECT'
//             shake={true}
//           />
//
//           <Input
//             placeholder='INPUT WITH ERROR MESSAGE'
//             displayError={true}
//             errorStyle={{ color: 'red' }}
//             errorMessage='ENTER A VALID ERROR HERE'
//           />
//           <Input
//             placeholder='INPUT WITH ICON'
//             icon={
//               <FontAwesomeIcon
//                 raised
//                 name='heartbeat'
//                 type='font-awesome'
//                 color='#f50'
//               />
//             }
//           />
//           <Icon
//             raised
//             name='heartbeat'
//             type='font-awesome'
//             color='#f50'
//             onPress={() => console.log({a: 1})} />
//
//           <Button
//             text="LOADING BUTTON"
//             loading
//             loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
//             textStyle={{ fontWeight: "700" }}
//             buttonStyle={{
//               backgroundColor: "rgba(92, 99,216, 1)",
//               width: 300,
//               height: 45,
//               borderColor: "transparent",
//               borderWidth: 0,
//               borderRadius: 5
//             }}
//             containerStyle={{ marginTop: 20 }}
//           />
//
//           <Button
//             icon={
//               <FontAwesomeIcon
//                 name='arrow-right'
//                 size={15}
//                 color='white'
//               />
//             }
//             iconRight
//             text='BUTTON WITH RIGHT ICON'
//           />
//         </View>
//       </View>
//
//     );
//   }
// }

export default MyApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
