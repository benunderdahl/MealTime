import { StyleSheet, StatusBar } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealOverviewScreen from './screens/MealOverviewScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoryScreen} options={{ 
          title: 'Welcome to the Thunderdome',
          headerStyle: { backgroundColor: '#eeec79ff'},
          headerTintColor: "#d66464ff",
          contentStyle: { backgroundColor: "#fccffcff" }
           }}/>
        <Stack.Screen name="Meal" component={MealOverviewScreen} 
        options={({ route, navigation }) => {
          const dish = route.params.title
          return {
            title: dish,
          }
        }}
        />
        <Stack.Screen name="details" component={DetailScreen} options={({ route }) => {
          const meal = route.params.title
          return {
            title: meal
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

