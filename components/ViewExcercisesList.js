import { useEffect, useContext, useState } from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Style from "../style/Style";
import { DistanceContext, TimeContext, DateContext, SelectedButtonContext, WorkoutsContext, UnitsContext } from "./Contexts";

export default function ViewExcercisesList() {

    const { workouts, setWorkouts } = useContext(WorkoutsContext);
    const { sport } = useContext(SelectedButtonContext);
    const { distance } = useContext(DistanceContext);
    const { duration } = useContext(TimeContext);
    const { date } = useContext(DateContext);
    const { units } = useContext(UnitsContext);
    console.log(sport, distance, duration, date);

    useEffect(() => {
        setWorkouts([
            { date: { dateString: '2024-03-02' }, distance: 5, duration: 30, sport: 'Running' },
            { date: { dateString: '2024-04-27' }, distance: 10, duration: 60, sport: 'Cycling' },
            { date: { dateString: '2023-12-31' }, distance: 17, duration: 90, sport: 'Cycling' }
        ]);
    }, []);

    return (
        <View style={Style.addWorkoutView}>
            <Text style={Style.header}>Added workouts</Text>
            <FlatList
                data={workouts}
                renderItem={({item}) => <Item item={item} units={units}/>}
            />
        </View>
    )
}

function Item({item, units}) {
    console.log(item);
    console.log(item.distance);

    let iconName;
    let distanceUnit = item.distance;
    if (units === 'miles') {
        distanceUnit = (item.distance * 0.621371).toFixed(2);
    }

    switch(item.sport) {
        case 'Running':
            iconName = 'run-fast';
            break;
        case 'Cycling':
            iconName = 'bike';
            break;
        case 'Hiking':
            iconName = 'hiking';
            break;
    }

    return (
            <View style={Style.submittedWorkouts}>
                <View style={Style.iconBg}>
                    <MaterialCommunityIcons name={iconName} size={26} color="black" />
                </View>
                <Text style={Style.inputTitles}>Date: {item.date.dateString.split('-').reverse().join('-')}</Text>
                <Text style={Style.inputTitles}>Distance: {distanceUnit} {units}</Text>
                <Text style={Style.inputTitles}>Duration: {item.duration} minutes</Text>
            </View>
    )
}
