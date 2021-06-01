import React from 'react';
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { WebView } from 'react-native-webview';

export default () => {

    const sectionName = "Section Title";
 
    /* Variables for the Sections Data - Pull from API*/
    const Article1Title = "Article 1 Title";
    const Article1Author = "John Doe '21, Staff Writer";
    const Article1Date = "May 12, 2021";
    const Article1RenderedText = "While the COVID-19 pandemic has had well-documented impacts on classes and club activities at Trinity, another aspect of student life has been hit especially hard: the athletic...    ";

    const Article2Title = "Article 2 Title";
    const Article2Author = "Jane Doe '22, Contributing Writer";
    const Article2Date = "May 11, 2021";
    const Article2RenderedText = "Again? In a 232-197 vote, the House of Representatives impeached now-Former President Donald Trump for the second time, only for him to be acquitted a few weeks later on the Senate...";

    const Article3Title = "Article 3 Title";
    const Article3Date = "May 10, 2021";
    
    const Article4Title = "Article 4 Title";
    const Article4Date = "May 9, 2021";

  return (
      <ScrollView style={styles.scrollView}> 
          <View style={styles.post}>  
              <Text style={styles.sectionBar}>___________________________________________</Text>
              <Text style={styles.sectionTitle}> {sectionName} </Text>
              <Text style={styles.sectionBar}>___________________________________________</Text>
              <Image style={styles.sectionImage} source={require("./assets/Trinity.jpg")}/>
              <Text style={styles.sectionArticleTitle}> {Article1Title}  </Text>
              <Text style={styles.sectionAuthor}> By {Article1Author}  </Text>
              <Text style={styles.sectionDate}> {Article1Date} </Text>
              <Text style={styles.sectionRenderedText}> {Article1RenderedText} </Text>
              <Image style={styles.sectionImage} source={require("./assets/Trinity.jpg")}/>
              <Text style={styles.sectionArticleTitle}> {Article2Title}  </Text>
              <Text style={styles.sectionAuthor}> By {Article2Author}  </Text>
              <Text style={styles.sectionDate}> {Article2Date} </Text>
              <Text style={styles.sectionRenderedText}> {Article2RenderedText} </Text>
              <Text style={styles.sectionBulletTitle}> • {Article3Title}: {Article3Date}</Text>
              <Text style={styles.sectionBulletTitle}> • {Article4Title}: {Article4Date}</Text>
          </View>
          {/* Create a new component called Recent Stories that can generate a list of most recently publis */}
      </ScrollView> 
  );
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