import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import style from "../styles/style";

import {colors, dimensions} from '../styles/base.js';

export default function BigButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <View style={styles.content}>
                    <Image
                        source = {require("./assets/images/Alert.png")}
                        resizeMode="contain"
                        style={styles.buttonImage}
                    ></Image>
                    <View style={styles.text}>
                        <Text style={styles.buttonText_light}>{text}</Text>
                        <Text style={styles.buttonText}>{text}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.ea_pink,
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
        width: 3,
        height: 3
        },
        elevation: 30,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        width: 319,
        height: 82
    },
    buttonText_light: {
        fontFamily: "poppins-300",
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        lineHeight: 26,
        flex: 1
    },
    buttonText: {
        fontFamily: "poppins-700",
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        lineHeight: 32,
        flex: 1
    },
    buttonImage: {
        width: 48,
        height: 48
    },
    content: {
        height: 50,
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 25
    },
    text: {
        width: 225,
        marginLeft: 15
    }
})