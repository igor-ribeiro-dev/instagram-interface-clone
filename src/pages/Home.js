import React from "react";
import StoryBoard from "../../components/StoryBoard";
import {SafeAreaView, StyleSheet, View, FlatList, Dimensions, StatusBar} from "react-native";
import Footer from "../../components/Footer";
import Post from "../../components/Post";
import fakeData from "../fake/fakePosts";
import fakeStories from "../fake/fakeStories";

export default function Home() {

    function renderItem({item}) {
        return <Post
            author={item.author}
            source={item.image}
            date={item.date}
            description={item.description}
        />
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'light-content'} />
            <FlatList
                keyExtractor={(item) => String(item.id)}
                ListHeaderComponent={() => <StoryBoard data={fakeStories} />}
                renderItem={renderItem}
                data={fakeData}
                ListHeaderComponentStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#c7c7c7'
                }}
            />
            <View style={{flex: 5, backgroundColor: 'green'}}/>
            <Footer style={{flex: 1, backgroundColor: 'blue'}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width
    },
});