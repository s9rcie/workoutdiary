import React from 'react';
import { useState } from 'react';
import { Icon, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DistanceContext, TimeContext, DateContext, SelectedButtonContext, WorkoutsContext, UnitsContext } from './components/Contexts';
import Style from './style/Style';
import AddWorkout from './components/AddWorkout';
import ViewExcercisesList from './components/ViewExcercisesList';
import Units from './components/Units';

export default function App() {

  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState();
  const [sport, setSport] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [units, setUnits] = useState('km');

  return (
      <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
        <SelectedButtonContext.Provider value={{ sport, setSport }}>
          <DistanceContext.Provider value={{ distance, setDistance }}>
            <TimeContext.Provider value={{ duration, setDuration }}>
              <DateContext.Provider value={{ date, setDate }}>
                <UnitsContext.Provider value={{ units, setUnits }}>
                  <PaperProvider theme={Style}>
                    <SafeAreaProvider>
                      <Navi />
                    </SafeAreaProvider>
                  </PaperProvider>
                </UnitsContext.Provider>
              </DateContext.Provider>
            </TimeContext.Provider>
          </DistanceContext.Provider>
        </SelectedButtonContext.Provider>
      </WorkoutsContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navi() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarPosition="bottom"
      style={Style.container}
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.5)',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          fontFamily: 'Roboto'
        },
        tabBarStyle: {
          backgroundColor: '#c741b5',
          borderTopWidth: 2
        }
      }}>
        <Tab.Screen
          name="add workout"
          options={{title: 'Add Workout', tabBarIcon: () => <Icon color="black" source="calendar-edit" size={26} />}}
          component={AddWorkout} />
        <Tab.Screen
          name="view excercises"
          options={{title: 'View Excercises', tabBarIcon: () => <Icon color="black" source="arm-flex" size={26} />}}
          component={ViewExcercisesList} />
        <Tab.Screen
          name="units"
          options={{title: 'Units', tabBarIcon: () => <Icon color="black" source="cached" size={26} />}}
          component={Units} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
