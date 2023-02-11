import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"


export const TaskInput = (props) => {

    //this useState for  task  value  that user enter
    const [task, setTask] = useState();
    // now pass the inpute task to the function AddTask to add it in the task array
    const handelTask = (value) => {
        props.AddTask(value)
        ///set setTask null for new input task
        setTask(null)
    }
    return (
        <View style={style.container}>
            <TextInput
                style={style.inputFielde}
                placeholder="enter new task"
                onChangeText={(e) => {
                    setTask(e)
                }}
                value={task}
            />
            <TouchableOpacity
                onPress={() => {
                    ///handle error if user try to input empty value
                    if (task != null) {
                        handelTask(task)
                    } else {
                        alert("you need to enter task")
                    }

                }}
            >
                <View style={style.btn}>

                    <MaterialIcons name="add" style={style.icon} />
                </View>
            </TouchableOpacity>

        </View>
    )



};

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",

    },
    inputFielde: {
        backgroundColor: "#f2f2f2",
        width: "80%",
        borderWidth: 2,
        marginVertical: 20,
        marginLeft: 8,
        padding: 8,
        borderRadius: 18,
        borderColor: "#81b2f3"

    },
    btn: {
        backgroundColor: "#81b2f3",
        width: 50,
        height: 50,
        borderRadius: 20,
        margin: 6,
        alignItems: "center",
        justifyContent: "center"

    },
    icon: {
        fontSize: 24,
        color: "white",

    }

})