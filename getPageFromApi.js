import React, { useState, useEffect } from 'react'
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';

export const getPageFromApi = async (url) => {

    /* Variables */

    try {
    let response = await fetch(
        url
    );
    let json = await response.json();
    console.log(json)
    const title = json.title.rendered;
    var content = json.content.rendered;
    
    const Apostrophe = new RegExp("&#8217;", "g");
    const PageBreak = new RegExp("<br />", "g");
    const AngleBrackets = new RegExp("<.*?>", "g")
    const Elipsis = new RegExp("&#8230;", "g");
    const NBSP = new RegExp("&nbsp;", "g");
    content = content.replace(Apostrophe, "'");
    content = content.replace(PageBreak, "");
    content = content.replace(Elipsis, "...");
    content = content.replace(NBSP, "")
    content = content.replace(AngleBrackets, "");
    const id = Math.random().toString(20).slice(-4);
    page = {id: id, title: title, content: content};   
    return page
    } catch (error) {
    console.error(error);
    }
    // return(
    //     page
    // );
};  