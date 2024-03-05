import { View } from "react-native";
import { useState, useContext } from "react";
import { RadioButton, Text } from "react-native-paper";
import { UnitsContext } from "./Contexts";
import Style from "../style/Style";

export default function Units() {

const [changeUnits, setChangeUnits] = useState('kilometers');
const { units, setUnits } = useContext(UnitsContext);
console.log(units);

    return (
            <View style={Style.addWorkoutView}>
                    <Text style={Style.header}>Distance unit conversion</Text>
            <View style={Style.unitChangeView}>
                <RadioButton.Group 
                    onValueChange={newValue => { setChangeUnits(newValue); setUnits(newValue) }} 
                    value={changeUnits}>
                    <RadioButton.Item label="Kilometers" value="kilometers" />
                    <RadioButton.Item label="Miles" value="miles" />
                </RadioButton.Group>
            </View>
            </View>
    );
}