import React from "react";
import {Image, Text, View, StyleSheet, Dimensions} from "react-native";
import moment from 'moment/min/moment-with-locales'

moment.locale('pt-BR');

import {Entypo, AntDesign, FontAwesome5, FontAwesome, SimpleLineIcons} from '@expo/vector-icons';

const avatars = [
    require('../assets/avatar1.png'),
    require('../assets/avatar1.png'),
    require('../assets/avatar2.png'),
    require('../assets/avatar3.png'),
    require('../assets/avatar4.png'),
    require('../assets/avatar5.png'),
    require('../assets/avatar6.png'),
];

function genImage() {
    let min = 0;
    let max = avatars.length - 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param source
 * @param author {string}
 * @param description {string}
 * @param date {Date}
 * @returns {*}
 * @constructor
 */
export default function Post({source, author, description, date}) {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerSections}>
                        <Image resizeMode={'contain'} style={styles.avatar} source={avatars[genImage()]} />
                        <Text style={[styles.author, styles.authorText]}>{author}</Text>
                    </View>
                    <View style={styles.headerSections}>
                        <Entypo.Button
                            onPress={() => {}}
                            style={{backgroundColor: 'white'}}
                            color={'black'}
                            name={'dots-three-horizontal'}
                        />
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode={'cover'} resizeMethod={'scale'} source={{uri: source}} />
                </View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.descriptionActions}>
                        <View style={styles.descriptionActionsLeft}>
                            <AntDesign style={styles.descriptionsButtons} name={'hearto'} size={23}/>
                            <FontAwesome5 style={styles.descriptionsButtons} name={'comment'} size={23}/>
                            <SimpleLineIcons style={styles.descriptionsButtons} name={'paper-plane'} size={23} color={'black'} />
                        </View>
                        <View style={styles.descriptionActionsRight}>
                            <FontAwesome style={[styles.descriptionsButtons, {alignSelf: 'flex-end'}]} name={'bookmark-o'} size={23}/>
                        </View>
                    </View>
                    <View style={styles.descriptionInfo}>
                        <Text style={styles.commonText}>
                            <Text>Curtida por </Text>
                            <Text style={styles.authorText}>darth_vader</Text>
                            <Text> e por </Text>
                            <Text style={styles.authorText}>milhares de outras pessoas</Text>
                        </Text>
                    </View>
                    <View style={styles.descriptionContent}>
                        {description && (
                            <Text style={styles.commonText}>
                                <Text style={[styles.authorText]}>{author}</Text>
                                <Text> {description}</Text>
                            </Text>
                        )}
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.dateText}>{moment(date).format('LL')}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const imageHeight = 350;

const styles = StyleSheet.create({
    container: {
        // height: 400,
        width: Dimensions.get('screen').width
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    headerSections: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    avatar: {
        height: 40,
        width: 40,
    },
    author: {
        lineHeight: 20,
        marginLeft: 5
    },
    authorText: {
        fontWeight: 'bold',
        color: 'black',
    },
    imageContainer: {
        height: imageHeight
    },
    descriptionContainer: {
        paddingBottom: 10
    },
    image: {
        width: Dimensions.get('screen').width,
        height: imageHeight
    },
    descriptionActions: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    descriptionActionsLeft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 15
    },
    descriptionActionsRight: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    descriptionsButtons: {
        paddingRight: 15,
        color: 'black'
    },
    descriptionInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10,
        marginHorizontal: 15
    },
    descriptionContent: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 15
    },
    commonText: {
        color: 'black',
        fontSize: 15,
    },
    date: {
        marginTop: 3,
        marginLeft: 15
    },
    dateText: {
        color: 'gray'
    },
    divider: {
        height: 5,
        width: Dimensions.get('screen').width,
        backgroundColor: 'black'
    }
});