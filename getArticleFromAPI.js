import React, { useState, useEffect } from 'react'
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';

/* 
* Content text
* Author
* Date
* Featured Image
* Category
*/
  
export default getArticleFromApi = async (url) => {

    /* Variables */

    try {
    let response = await fetch(
        url
    );
    let json = await response.json();
    const title = json.title.rendered;
    var content = json.content.rendered;
    const PTagOpen = new RegExp("<p>", "g");
    const PTagClose = new RegExp("</p>", "g");
    const SpanTagOpen = new RegExp("<span style=\"font-weight: 400;\">", "g");
    const SpanTagClose = new RegExp("</span>", "g");
    content = content.replace(PTagOpen, "");
    content = content.replace(PTagClose, "\n");
    content = content.replace(SpanTagOpen, "");
    content = content.replace(SpanTagClose, "");
    var date = json.date;
    posts = {title: title, content: content, date: date,};

    } catch (error) {
    console.error(error);
    }
    return(
        posts
    );
};  