import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
export const TaskItem = (props) => {
    //to apply mark task as done 
    const [done, setDone] = useState(true)

    return (


        <View style={style.container}>
            <Text style={{
                backgroundColor: done ? "#f2f2f2 " : '#0f1350', width: 220,
                borderWidth: 2,
                marginVertical: 20,
                padding: 13,
                borderRadius: 18,
                borderColor: "#81b2f3"
            }}>{props.index}:{props.task}</Text>

            <TouchableOpacity
                onPress={() => {
                    props.deletTask()
                }}
            >
                <View style={style.btn}>
                    <MaterialIcons size={24} color="#fff" name="remove" />
                </View>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    setDone(!done)
                }}
            >
                <View style={style.btn}>
                    <MaterialIcons size={24} color="#fff" name="done" />
                </View>
            </TouchableOpacity>

        </View>



    )

}

const style = StyleSheet.create({
    container: {

        alignItems: "center",
        flexDirection: "row",


    },
    textFielde: {

        width: 220,
        borderWidth: 2,
        marginVertical: 20,

        padding: 13,
        borderRadius: 18,
        borderColor: "#81b2f3"

    },
    btn: {
        backgroundColor: "#81b2f3",
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 2,
        alignItems: "center",
        justifyContent: "center"

    },
})





