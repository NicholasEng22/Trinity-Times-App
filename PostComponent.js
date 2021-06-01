import React, { Component } from 'react'
import { Image, Text, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { WebView } from 'react-native-webview';
import getArticleFromAPI from './getArticleFromAPI';


export class PostComponent extends Component {
    state = {
        post: {}
    };
    render() {
        getArticleFromApi('https://trinitytimes.org/wp-json/wp/v2/posts/1738').then((post) => {
            this.setState({post: post});
        }).catch(( error) => {
            console.log(error)
        });
        

        /* Variables for the post */
        const title = "Is Beta Testing Worth the Time?";
        const contentText = "For the past year we have adapted to a “new normal.” Today it seems shocking to remember that the terms social distancing, global pandemic, or mask, weren’t a part of our vocabulary just over a year ago. Our world reeks of Covid; it pervades daily life–our schools, our travel, our work, our interactions. So a vaccine seems like our only option to eradicate the virus, and now it is finally here. While the vaccine does not offer a perfect solution, nor does it immediately eliminate the need for mitigation practices, it does offer some security and solace. It reduces rates of transmission and prevents serious illness, hospitalization, and death. So how will this vaccine affect the Trinity community and our return to school?";
        const author = "Nicholas Eng '22, Editor Online";
        const date = "April 2, 2021";

        /* Variables for the Sections Data - Pull from API*/
        const recentArticle1Title = "Article 1 Title";
        const recentArticle1Author = "John Doe '21, Staff Writer";
        const recentArticle1Date = "May 12, 2021";
        const recentArticle1RenderedText = "While the COVID-19 pandemic has had well-documented impacts on classes and club activities at Trinity, another aspect of student life has been hit especially hard: the athletic...    ";

        const recentArticle2Title = "Article 2 Title";
        const recentArticle2Author = "Jane Doe '22, Contributing Writer";
        const recentArticle2Date = "May 11, 2021";
        const recentArticle2RenderedText = "Again? In a 232-197 vote, the House of Representatives impeached now-Former President Donald Trump for the second time, only for him to be acquitted a few weeks later on the Senate...";

        const recentArticle3Title = "Article 3 Title";
        const recentArticle3Author = "Jared Doe '23, Politics Editor";
        const recentArticle3Date = "May 10, 2021";
        const recentArticle3RenderedText = "In fifth grade, I applied to four all-girls and three co-educational institutions. My mother, having attended an all-girls middle and high school, strongly recommended that I enroll...";

        const recentArticle4Title = "Article 4 Title";
        const recentArticle4Date = "May 10, 2021";

        const recentArticle5Title = "Article 5 Title";
        const recentArticle5Date = "May 9, 2021";

        const recentArticle6Title = "Article 6 Title";
        const recentArticle6Date = "May 8, 2021";

        return (
            <ScrollView> 
                <Text style={styles.title}> {this.state.post.title}</Text> 
                <Image style={styles.image} source={require("./assets/image.png")} PlaceholderContent={require("./assets/image.png")}/>
                <Text style={styles.author}> By </Text>
                <Text style={styles.date}> {this.state.post.date}</Text> 
                <Text style={styles.text}> {this.state.post.content}</Text> 
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