import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'; // https://reactnavigation.org/docs/connecting-navigation-prop/
import { Category } from './../Categories'
//https://reactnavigation.org/docs/use-navigation/
export const TrinSportsContainer = (props) => {
     const navigation = useNavigation();
     return <Category {...props} navigation={navigation} />;
}