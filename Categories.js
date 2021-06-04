import React, { Component } from 'react'
import { Image, Text, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { Tab, Divider, SearchBar } from 'react-native-elements';
import { fonts } from 'react-native-elements/dist/config';
import { WebView } from 'react-native-webview';
import getArticlesFromAPI from './getArticlesFromAPI';

export class categories extends Component {
    
};

export class Politics extends Component {
    state = {
        posts: []
    };
    render() {
        getArticlesFromApi('https://trinitytimes.org/wp-json/wp/v2/posts?categories=7').then((posts) => {
            this.setState({posts: posts});
        }).catch(( error) => {
            console.log(error)
        });

        function renderPost(post) {
            return(
                <View>
                    <Text style={styles.title}> {post.title} </Text>
                    <Image style={styles.image} source={require("./assets/image.png")} PlaceholderContent={require("./assets/image.png")}/>
                    <Text style={styles.author}> {post.author}, {posts.job} • {post.date} </Text>
                    <Text style={styles.text}> {post.excerpt} </Text>
                </View>
            );
        };
        return (
            <FlatList 
            data={this.state.posts}
            renderItem={(post) => renderPost(post.item)}
            keyExtractor={item => item.title}
            />
        );
    };
};

export class TrinLife extends Component {
    state = {
        posts: []
    };
    render() {
        getArticlesFromApi('https://trinitytimes.org/wp-json/wp/v2/posts?categories=6').then((posts) => {
            this.setState({posts: posts});
        }).catch(( error) => {
            console.log(error)
        });

        function renderPost(post) {
            return(
                <View>
                    <Text style={styles.title}> {post.title} </Text>
                    <Image style={styles.image} source={require("./assets/image.png")} PlaceholderContent={require("./assets/image.png")}/>
                    <Text style={styles.author}> {post.author} • {post.date} </Text>
                    <Text style={styles.text}> {post.excerpt} </Text>
                </View>
            );
        };
        return (
            <FlatList 
            data={this.state.posts}
            renderItem={(post) => renderPost(post.item)}
            keyExtractor={item => item.title}
            />
        );
    };
};

export class TrinSports extends Component {
    state = {
        posts: []
    };
    render() {
        getArticlesFromApi('https://trinitytimes.org/wp-json/wp/v2/posts?categories=4').then((posts) => {
            this.setState({posts: posts});
        }).catch(( error) => {
            console.log(error)
        });

        function renderPost(post) {
            return(
                <View>
                    <Text style={styles.title}> {post.title} </Text>
                    <Image style={styles.image} source={require("./assets/image.png")} PlaceholderContent={require("./assets/image.png")}/>
                    <Text style={styles.author}> {post.author} • {post.date} </Text>
                    <Text style={styles.text}> {post.excerpt} </Text>
                </View>
            );
        };
        return (
            <FlatList 
            data={this.state.posts}
            renderItem={(post) => renderPost(post.item)}
            keyExtractor={item => item.title}
            />
        );
    };
};

export class Opinion extends Component {
    state = {
        posts: []
    };
    render() {
        getArticlesFromApi('https://trinitytimes.org/wp-json/wp/v2/posts?categories=8').then((posts) => {
            this.setState({posts: posts});
        }).catch(( error) => {
            console.log(error)
        });

        function renderPost(post) {
            return(
                <View>
                    <Text style={styles.title}> {post.title} </Text>
                    <Image style={styles.image} source={require("./assets/image.png")} PlaceholderContent={require("./assets/image.png")}/>
                    <Text style={styles.author}> {post.author} • {post.date} </Text>
                    <Text style={styles.text}> {post.excerpt} </Text>
                </View>
            );
        };
        return (
            <FlatList 
            data={this.state.posts}
            renderItem={(post) => renderPost(post.item)}
            keyExtractor={item => item.title}
            />
        );
    };
};

export class ArtInn extends Component {
    state = {
        posts: []
    };
    render() {
        getArticlesFromApi('https://trinitytimes.org/wp-json/wp/v2/posts?categories=23').then((posts) => {
            this.setState({posts: posts});
        }).catch(( error) => {
            console.log(error)
        });

        function renderPost(post) {
            return(
                <View>
                    <Text style={styles.title}> {post.title} </Text>
                    <Image style={styles.image} source={require("./assets/image.png")} PlaceholderContent={require("./assets/image.png")}/>
                    <Text style={styles.author}> {post.author} • {post.date} </Text>
                    <Text style={styles.text}> {post.excerpt} </Text>
                </View>
            );
        };
        return (
            <FlatList 
            data={this.state.posts}
            renderItem={(post) => renderPost(post.item)}
            keyExtractor={item => item.title}
            />
        );
    };
};

export class SearchSection extends Component {
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
        function renderPost(post) { return(
                <View>
                    <Text style={styles.title}> {post.title} </Text>
                    <Image style={styles.image} source={{uri: post.featured_image}} PlaceholderContent={require("./assets/image.png")}/>
                    <Text style={styles.author}>{post.author}, {post.job} • {post.date} </Text>
                    <Text style={styles.text}> {post.excerpt} </Text>
                </View>
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
        fontFamily: 'Times New Roman', //PT Serif is the actually font that is being used
        fontStyle: 'italic',
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
        fontSize: 16,
    },
    date: {
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
        fontFamily: 'Times New Roman',
        fontSize: 16,
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
        fontSize: 16,
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