import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen from './components/screen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SIGNIN" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}



export default App;
