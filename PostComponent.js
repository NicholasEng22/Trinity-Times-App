import React, { Component } from 'react'
import { Image, Text, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { WebView } from 'react-native-webview';



export class PostComponent extends Component {
    constructor(props) {
        super(props);
        console.log("LETS SEE THE DATA", props.route.params.post.author)
    }


    render() {
        const { post } = this.props.route.params

        return (
            <ScrollView> 
                <View style={{backgroundColor: "white"}}>
                <Text style={styles.title}>{post.title}</Text> 
                <Image style={styles.image} source={{uri: post.featured_image}} PlaceholderContent={require("./assets/image.png")}/>
                <Text style={styles.author}>{post.author}, {post.job} {"\n"}{post.date} </Text>
                <Text style={styles.text}>{post.content}</Text> 
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white'
    },
    title: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'center',
        fontFamily: 'Times New Roman', //PT Serif is the actually font that is being used
        fontStyle: 'italic',
        fontSize: 30,
    },
    sectionTitle: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        fontSize: 24,

    },
    post: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    aboutWriter: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontSize: 24,
    },
    image: {
        alignSelf: 'center',
        width: 350, 
        height: 250, 
        resizeMode: 'contain',
    },
    author: {
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        fontSize: 19,
    },
    date: {
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        fontSize: 19,
    },
    text: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color: 'black',
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        color: 'black',
        fontSize: 19,
    },
    bar: {
        textAlign: 'center',
        color: 'blue' ,
        fontWeight: 'bold', 
    },
    sectionBar: {
        textAlign: 'center',
        color: 'black' ,
        fontWeight: 'bold', 
    },
    sectionImage: {
        paddingTop: 20,
        paddingBottom: 20,
        alignSelf: 'center',
    },
    sectionArticleTitle: {
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 24,
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
        textAlign: 'left',
    },
    sectionBulletTitle: {
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
        color: 'black',
        fontSize: 24,
    },
    sectionAuthor: {
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
    sectionDate: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        color: 'black',
        fontSize: 15,
    },
    sectionRenderedText: {
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        color: 'black',
        fontSize: 15,
    },
  });           