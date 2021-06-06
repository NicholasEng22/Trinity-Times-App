import React, { useState, useEffect } from 'react'
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Tab, Divider } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { WebView } from 'react-native-webview';
import moment from 'moment';

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
        date = date.slice(0,10)
        date = moment(date).format('MMMM Do, YYYY')
        var author = json[i].custom_fields.writer[0];
        var job = json[i].custom_fields.jobtitle[0];
        var featured = json[i].featured_media;
        var content = json[i].content.rendered;
        const PTagClose = new RegExp("</p>", "g");
        const Elipsis = new RegExp("&#8230;", "g");
        const Apostrophe = new RegExp("&#8217;", "g");
        const NBSP = new RegExp("&nbsp;", "g");
        const AngleBrackets = new RegExp("<.*?>", "g")
        // Excerpt is the short description
        excerpt = excerpt.replace(PTagClose, "\n");
        excerpt = excerpt.replace(Elipsis, "...");
        excerpt = excerpt.replace(Apostrophe, "'" );
        excerpt = excerpt.replace(AngleBrackets, "");
        excerpt = excerpt.replace(NBSP, "");

        // Content is full content
        content = content.replace(PTagClose, "\n");
        content = content.replace(Elipsis, "...");
        content = content.replace(Apostrophe, "'" );
        content = content.replace(AngleBrackets, "");
        content = content.replace(NBSP, "");

        var featImage;
        if (featured !== 0){
                try {
    let response = await fetch(
        'https://trinitytimes.org/wp-json/wp/v2/media/' + featured.toString()
    );
    let json = await response.json();
    const featImage = json.guid.rendered;
                const id = Math.random().toString(20).slice(-4);
                posts.push({title: title, author: author, job: job, excerpt: excerpt, date: date, featured_image: featImage, id: id, content: content,});
    } catch (error) {
    console.error(error);
    }
        }
        else{
            const id = Math.random().toString(20).slice(-4);
            featImage = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png";
            posts.push({title: title, author: author, job: job, excerpt: excerpt, date: date, featured_image: featImage, id: id, content: content,});
        }
    }
    } catch (error) {
    console.error(error);
    }
    return(
        posts
    );
};  