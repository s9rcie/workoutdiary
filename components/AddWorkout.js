import { Alert, Modal, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { Text, TextInput } from "react-native-paper";
import { useContext, useState } from "react";
import { DistanceContext, TimeContext, WorkoutsContext } from "./Contexts";
import { Pressable } from "react-native";
import StyledButton from "./StyledButton";
import Style from "../style/Style";
import { Calendar } from "react-native-calendars";

const values = [
    { icon: "run-fast", label: "Running", value: "0" },
    { icon: "bike", label: "Cycling", value: "1" },
    { icon: "hiking", label: "Hiking", value: "2" }
];

export default function AddWorkout() {

    const { distance, setDistance } = useContext(DistanceContext);
    const { duration, setDuration } = useContext(TimeContext);
    const { workouts, setWorkouts } = useContext(WorkoutsContext);

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const [sport, setSport] = useState("");


    const handleButtonSelect = (selectedValue) => {
        const selectedButton = values.find(button => button.value === selectedValue);
        setSport(selectedButton ? selectedButton.value : "");
        console.log(selectedButton.label);
    }

    function dateSelected(day) {
        setVisible(false);
        setDate(day);
    }

    function submitWorkout() {

        const selectedButton = values.find(button => button.value === sport);
        const label = selectedButton ? selectedButton.label : '';

        function checkValues(distance, duration, date) {
            if (!sport) {
                Alert.alert("No sport selected", "Please select a sport");
                return false;
            }
            else if (!distance || distance < 0) {
                Alert.alert("Invalid distance", "Please enter a valid distance");
                console.log(distance);
                return false;
            }
            else if (!duration || duration < 0) {
                Alert.alert("Invalid duration", "Please enter a valid duration");
                return false;
            }
            else if (!date || date === undefined) {
                Alert.alert("Invalid date", "Please enter a valid date");
                return false;
            }
            return true;
        }

        if (checkValues(distance, duration, date)) {
            setWorkouts(prev => [...prev, { sport: label, distance, duration, date }])
            setSport("");
            setDistance("");
            setDuration("");
            setDate(null);
            console.log(workouts);
            console.log(distance, duration, date);
        }
    }

    return (
        <View style={Style.addWorkoutView}>
            <Text style={Style.header}>Add a workout</Text>
            <SegmentedButtons style={Style.segButtons}
                value={sport}
                onValueChange={handleButtonSelect}
                buttons={values} />
            <Text style={Style.inputTitles}>Distance (km/miles)</Text>
            <TextInput style={Style.TextInputs}
                mode="outlined"
                keyboardType="numeric"
                left={<TextInput.Icon icon="map-marker-distance" />}
                value={distance}
                onChangeText={distance => {
                    if (!isNaN(Number(distance))) {
                        setDistance(distance);
                    }
                }} />
            <Text style={Style.inputTitles}>Duration (minutes)</Text>
            <TextInput style={Style.TextInputs}
                mode="outlined"
                keyboardType="numeric"
                left={<TextInput.Icon icon="clock-start" />}
                value={duration}
                onChangeText={duration => {
                    if (!isNaN(Number(duration))) {
                        setDuration(duration);
                    }
                }} />
            <Modal visible={visible} transparent={true}>
                <Calendar onDayPress={dateSelected}/>
            </Modal>
            <Pressable onPress={()=> setVisible(true)}>
                <Text style={Style.dateText}>{date ? date.dateString.split('-').reverse().join('-') : "Select date"}</Text>
            </Pressable>
            <StyledButton title="Submit workout" onPress={submitWorkout}/>
        </View>
    );
}