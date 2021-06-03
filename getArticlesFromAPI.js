import React, { useState, useEffect } from 'react'
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { WebView } from 'react-native-webview';

/* 
* excerpt text
* Author
* Date
* Featured Image
* Category
*/
  
export default getArticlesFromApi = async (url) => {

    /* Variables */
    var posts = [];

    try {
    let response = await fetch(
        url
    );
    let json = await response.json();
    for (var i = 0; i < json.length;i++){
        var title = json[i].title.rendered;
        var excerpt = json[i].excerpt.rendered;
        var date = json[i].date;
        var author = json[i].author;
        var featured = json[i].featured_media;
        const PTagOpen = new RegExp("<p>", "g");
        const PTagClose = new RegExp("</p>", "g");
        const SpanTagOpen = new RegExp("<span style=\"font-weight: 400;\">", "g");
        const SpanTagClose = new RegExp("</span>", "g");
        const Elipsis = new RegExp("&#8230;", "g");
        const Apostrophe = new RegExp("&#8217;", "g");
        excerpt = excerpt.replace(PTagOpen, "");
        excerpt = excerpt.replace(PTagClose, "\n");
        excerpt = excerpt.replace(SpanTagOpen, "");
        excerpt = excerpt.replace(SpanTagClose, "");
        excerpt = excerpt.replace(Elipsis, "...");
        excerpt = excerpt.replace(Apostrophe, "TEST" );
        var date = json[i].date;
        var featImage;
        // if (featured !== 0){
        //     featImage = getFeaturedImageURL(featured);
        // }
        // else{
        //     featImage = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png";
        // }
        // console.log(featImage);
        posts.push({title: title, author: author, excerpt: excerpt, date: date, featured_image: featImage});
    }
    } catch (error) {
    console.error(error);
    }
    return(
        posts
    );
};  

// const getFeaturedImageURL = async (imageNumber) => {
//     console.log(imageNumber);
//     try {
//     let response = await fetch(
//         'https://trinitytimes.org/wp-json/wp/v2/media/' + imageNumber.toString()
//     );
//     let json = await response.json();
//     const imageURL = json.guid.rendered;

//     } catch (error) {
//     console.error(error);
//     }
//     return(
//         imageURL
//     );
// };