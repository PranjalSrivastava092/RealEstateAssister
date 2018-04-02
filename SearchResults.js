'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class SearchResults extends Component {
    static navigationOptions = {
      title: 'Results',
      headerTintColor: '#ffffff',
                headerStyle: {
                  backgroundColor: '#2F95D6',
                  borderBottomColor: '#ffffff',
                  borderBottomWidth: 3,
                },
                headerTitleStyle: {
                  fontSize: 18,
                },
    };
  
    _keyExtractor = (item, index) => index;
  
    _renderItem = ({item}) => {
      return (
        <TouchableHighlight
          underlayColor='#dddddd'>
          <View>
            <Text>{item.title}</Text>
          </View>
        </TouchableHighlight>
      );
      
    };
  
    render() {
      const { params } = this.props.navigation.state;
      return (
        <FlatList
          data={params.listings}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    }
  }