import { StyleSheet, StatusBar } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealOverviewScreen from './screens/MealOverviewScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoryScreen}/>
        <Stack.Screen name="Meal" component={MealOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

