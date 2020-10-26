import React from 'react';
import {ScrollView, StyleSheet, Image, Text, Dimensions, View} from "react-native";
import Avatar from '../assets/avatar1.png';

/**
 *
 * @param {[]} data
 * @returns {*}
 * @constructor
 */
export default function StoryBoard ({data = []}) {

    if( ! data.length) return null;

    return (
        <ScrollView horizontal style={styles.container}>
            {data.map(story => {
                return (
                    <View key={story.user} style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={story.avatar} />
                        <Text style={styles.avatarText}>{story.user}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        paddingTop: 15,
        paddingBottom: 10
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        marginHorizontal: 10,
        width: 60,
        height: 60,
        borderColor: 'orange',
        borderWidth: 3,
        borderRadius: 30,
    },
    avatarText: {
        fontSize: 12,
        marginTop: 8
    }
});