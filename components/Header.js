import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Dimensions} from "react-native";
import {FontAwesome} from '@expo/vector-icons'

export default function Header() {

    return (
        <View style={styles.container}>
            <FontAwesome.Button backgroundColor={null} name={'camera'} size={24} color={'white'} />
            <Text style={styles.text}>Instagram</Text>
            <FontAwesome.Button backgroundColor={null} name={'paper-plane'} size={24} color={'white'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingTop: 8,
        paddingHorizontal: 8,
        width: Dimensions.get('window').width
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    }
});