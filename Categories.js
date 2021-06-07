import React, { Component } from 'react'
import { Image, Text, ScrollView, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Tab, Divider, SearchBar } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { WebView } from 'react-native-webview';
import getArticlesFromAPI from './getArticlesFromAPI';
import { useNavigation } from '@react-navigation/native'; // https://reactnavigation.org/docs/connecting-navigation-prop/
import { FONT_FAMILY, FONT_TITLE_SIZE, FONT_TEXT_SIZE, FONT_SECTION_TEXT_SIZE } from './Constants';
import { getPageFromApi } from './getPageFromApi';
import { SafeAreaView } from 'react-native';

//https://reactnavigation.org/docs/use-navigation/
export const CategoryContainer = (props) => {
      const navigation = useNavigation();
     return <Category {...props} navigation={navigation} />;
}

export class Category extends Component {
  constructor(props) {
    super(props);
  }

    state = {
        posts: [],
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        getArticlesFromApi(this.props.url).then((posts) => {
            this.setState({posts: posts});
        }).catch(( error) => {
            console.log(error)
        });
    }

    render() {
        const { navigation } = this.props;

        function renderPost(post) { return(
                <TouchableOpacity style={{backgroundColor: "white"}} onPress={() =>
                     navigation.navigate('Post', {post})
                } >
                    <Text style={styles.title}>{post.title} </Text>

                    { post.featured_image !== "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png" && 
                    (
                    <Image style={styles.image} source={{uri: post.featured_image}} PlaceholderContent={require("./assets/image.png")}/>
                    )
                    }
                    <Text style={styles.author}>{post.author}, {post.job} {"\n"}{post.date} </Text>
                    <Text style={styles.text}>{post.excerpt} </Text>
                    
                </TouchableOpacity>
            );
        }
        return (
            <FlatList
            style={{backgroundColor: "white"}}
            data={this.state.posts}
            renderItem={(post) => renderPost(post.item)}
            keyExtractor={item => item.id}
            />
        );
    };
};

export class SearchSection extends Component {
  constructor(props) {
    super(props);
  }

    state = {
        posts: [],
        search: '',
    };

    updateSearch = (searchKeys) => {
        this.setState({search: searchKeys});
    }

    componentDidMount(){
        this.refreshSearch();
    }

    refreshSearch = () => {
        getArticlesFromApi('https://trinitytimes.org/wp-json/wp/v2/posts?search=' + this.state.search).then((posts) => {
            this.setState({posts: posts});
            console.log("POSTS", posts[2].title)
        }).catch(( error) => {
            console.log(error)
        });
    }

    render() {
        const { navigation } = this.props;
        function renderPost(post) { return(
                <TouchableOpacity style={{backgroundColor: "white"}} onPress={() =>
                     navigation.navigate('Post', {post})
                } >
                    <Text style={styles.title}>{post.title} </Text>

                    { post.featured_image !== "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png" && 
                    (
                    <Image style={styles.image} source={{uri: post.featured_image}} PlaceholderContent={require("./assets/image.png")}/>
                    )
                    }
                    <Text style={styles.author}>{post.author}, {post.job} {"\n"}{post.date} </Text>
                    <Text style={styles.text}>{post.excerpt} </Text>
                    
                </TouchableOpacity>
            );
        }
        return (
            <>
                <SearchBar
                    platform={'ios'}
                    //inputStyle={{backgroundColor: 'white'}}
                    // containerStyle={{backgroundColor: '#2C4BEE', borderWidth: 1, borderRadius: 0}}
                    value={this.state.search}
                    onChangeText={this.updateSearch}
                    onEndEditing={this.refreshSearch.bind(this)}
                    placeholderTextColor={'#000000'}
                    showLoading={false}
                    placeholder="Search for an article!"
                    />
            <FlatList 
            data={this.state.posts}
            renderItem={(post) => renderPost(post.item)}
            keyExtractor={item => item.id}
            />
            </>
        );
    };
};

export class Page extends Component {
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
            <SafeAreaView>
                <View>
                    <Text style={styles.title}> 
                        {this.state.posts.title}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.posts.content}
                    </Text>
                </View>
            </SafeAreaView>
            // <FlatList
            // style={{backgroundColor: "white"}}
            // data={this.state.posts}
            // renderItem={(post) => renderPost(post.item)}
            // keyExtractor={item => item.id}
            // />
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
    date: {
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
        fontFamily: FONT_FAMILY,
        fontStyle: 'italic',
        textAlign: 'left',
    },
    sectionAuthor: {
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: FONT_FAMILY,
        fontWeight: 'bold',
        color: 'black',
        fontSize: FONT_SECTION_TEXT_SIZE,
    },
    sectionDate: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        textAlign: 'left',
        fontFamily: FONT_FAMILY,
        color: 'black',
        fontSize: FONT_SECTION_TEXT_SIZE,
    },
    sectionRenderedText: {
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: FONT_FAMILY,
        color: 'black',
        fontSize: FONT_SECTION_TEXT_SIZE,
    },
  });           