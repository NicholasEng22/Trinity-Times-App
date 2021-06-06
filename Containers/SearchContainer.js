import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'; // https://reactnavigation.org/docs/connecting-navigation-prop/
import { SearchSection } from './../Categories'
//https://reactnavigation.org/docs/use-navigation/
export const SearchContainer = (props) => {
     const navigation = useNavigation();
     return <SearchSection {...props} navigation={navigation} />;
}