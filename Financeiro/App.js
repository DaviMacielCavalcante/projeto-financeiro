import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import NovaTransacaoScreen from './screens/NovaTransacaoScreen';

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator initialRouteName='NovaTransacaoScreen'>
        <Tab.Screen name='LoginScreen' component={LoginScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='DashboardScreen' component={DashboardScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='NovaTransacaoScreen' component={NovaTransacaoScreen} options={{headerTitle: 'NOVA TRANSAÇÃO'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
