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
  
export default getArticlesFromApiFromBackUp = async () => {

    /* Variables */
    var posts = [];

    try {
    let response = await fetch(
        'https://trinitytimes.org/wp-json/wp/v2/posts?categories=7'
    );
    let json = await response.json();
    for (var i = 0; i < json.length;i++){
        var title = json[i].title.rendered;
        var excerpt = json[i].excerpt.rendered;
        var date = json[i].date;
        var author = json[i].author;
        const PTagOpen = new RegExp("<p>", "g");
        const PTagClose = new RegExp("</p>", "g");
        const SpanTagOpen = new RegExp("<span style=\"font-weight: 400;\">", "g");
        const SpanTagClose = new RegExp("</span>", "g");
        const Elipsis = new RegExp("&#8230;", "g");
        excerpt = excerpt.replace(PTagOpen, "");
        excerpt = excerpt.replace(PTagClose, "\n");
        excerpt = excerpt.replace(SpanTagOpen, "");
        excerpt = excerpt.replace(SpanTagClose, "");
        excerpt = excerpt.replace(Elipsis, "...");
        var date = json[i].date;
        posts.push({title: title, author: author, excerpt: excerpt, date: date,});
    }
    } catch (error) {
    console.error(error);
    }
    return(
        posts
    );
};  