import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { FONT_FAMILY, FONT_TITLE_SIZE, FONT_TEXT_SIZE} from './Constants';
import { getPageFromApi } from './getPageFromApi';


export class AboutPage extends Component {
    constructor(props) {
      super(props);
    }

    state = {
        posts: []
    };
  
    componentDidMount(){
        this.getData();
    }

    getData = () => {
        getPageFromApi(this.props.url).then((posts) => {
             this.setState({posts: posts});
        }).catch(( error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={styles.title}> 
                        {this.state.posts.title}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.posts.content}
                    </Text>
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
        textAlign: 'left',
        fontFamily: FONT_FAMILY, //PT Serif is the actually font that is being used
        fontStyle: 'italic',
        fontSize: FONT_TITLE_SIZE,
    },
    sectionTitle: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: FONT_FAMILY,
        fontSize: 24,
    },
    post: {
        paddingTop: 10,
        paddingBottom: 10,
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
        fontFamily: FONT_FAMILY,
        fontSize: FONT_TEXT_SIZE,
    },
    text: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: FONT_FAMILY,
        color: 'black',
        fontSize: FONT_TEXT_SIZE,
    },



  });           