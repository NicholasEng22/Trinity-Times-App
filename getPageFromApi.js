import React, { useState, useEffect } from 'react'
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';

export default getPageFromApi = async (url) => {

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
    const BoldTagOpen = new RegExp("<strong>", "g");
    const BoldTagClose = new RegExp("</strong>", "g");
    const Apostrophe = new RegExp("&#8217;", "g");
    const PageBreak = new RegExp("<br />", "g");
    content = content.replace(PTagOpen, "");
    content = content.replace(PTagClose, "\n");
    content = content.replace(BoldTagOpen, "");
    content = content.replace(BoldTagClose, "");
    content = content.replace(Apostrophe, "'");
    content = content.replace(PageBreak, "");
    page = {title: title, content: content,};

    } catch (error) {
    console.error(error);
    }
    return(
        page
    );
};  