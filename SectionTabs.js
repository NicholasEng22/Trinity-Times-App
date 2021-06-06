import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
// import { Header } from '../components/header';
import { Tab } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import {PostComponent} from './PostComponent';
import {SectionComponent} from './SectionComponent';
import {Politics, TrinLife, TrinSports, Opinion, ArtInn, SearchSection, Category, CategoryContainer, SecondContainer} from './Categories'
import { PoliticsContainer } from './Containers/Politics';
import { TrinLifeContainer } from './Containers/TrinLife';
import { TrinSportsContainer } from './Containers/TrinSports';
import { OpinionContainer } from './Containers/Opinion';
import { ArtInnContainer } from './Containers/ArtInn';
import { RecentContainer } from './Containers/Recent';

//URL: https://github.com/react-native-elements/react-native-elements-app/blob/next/src/views/tabs.tsx

var URL = 'https://trinitytimes.org';

export default (navigation) => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={true}>
        <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
            backgroundColor: 'black',
            height: 0,
            }}
            variant="primary"
        >
            <Tab.Item
            title="Home"
            titleStyle={{ fontSize: 12 }}
            />
            <Tab.Item
            title="Poltics"
            titleStyle={{ fontSize: 12 }}
            />
            <Tab.Item
            title="Trinity Life"
            titleStyle={{ fontSize: 12 }}
            />
            <Tab.Item
            title="Trinity Sports"
            titleStyle={{ fontSize: 12 }}
            />
            <Tab.Item
            title="Opinion"
            titleStyle={{ fontSize: 12 }}
            />
            <Tab.Item
            title="Art and Innovation"
            titleStyle={{ fontSize: 12 }}
            />
        </Tab>
        </ScrollView>
      {(() => {
        switch (index) {
            case 0:
              return <RecentContainer url="https://trinitytimes.org/wp-json/wp/v2/posts/"/>
                // URL = 'https://trinitytimes.org';
                // return <WebView source={{ uri: URL }} style={{ flex: 1 }} />;
            case 1:
              return  <PoliticsContainer url="https://trinitytimes.org/wp-json/wp/v2/posts?categories=7"/>;
                // URL = 'https://trinitytimes.org/category/politics-news/';
                // return <WebView source={{ uri: URL }} style={{ flex: 1 }} />;
            case 2:
              return <TrinLifeContainer url="https://trinitytimes.org/wp-json/wp/v2/posts?categories=6"/>;
                // URL = 'https://trinitytimes.org/category/trinity-life/';
                // return <WebView source={{ uri: URL }} style={{ flex: 1 }} />;
            case 3:
              return <TrinSportsContainer url="https://trinitytimes.org/wp-json/wp/v2/posts?categories=4"/>;
                // URL = 'https://trinitytimes.org/category/trinity-sports/';
                // return <WebView source={{ uri: URL }} style={{ flex: 1 }} />;
            case 4:
              return <OpinionContainer url="https://trinitytimes.org/wp-json/wp/v2/posts?categories=8"/>;
                // URL = 'https://trinitytimes.org/category/opinion/';
                // return <WebView source={{ uri: URL }} style={{ flex: 1 }} />;
            case 5:
              return <ArtInnContainer url="https://trinitytimes.org/wp-json/wp/v2/posts?categories=23"/>;
                // URL = 'https://trinitytimes.org/category/arts-innovation/';
                // return <WebView source={{ uri: URL }} style={{ flex: 1 }} />;
        }
       
      })()}
    </>
  );
};

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
      maxHeight: '7%',
    },
  });