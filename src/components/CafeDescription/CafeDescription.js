// @flow

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import * as images from '../../ui/images';
import {s} from './styles';

class CafeDescription extends Component {
  getContent = () => require('./mockedData');

  state = {
    content: this.getContent(),
  };

  render() {
    const {content} = this.state;

    return (
      <View style={s.row}>
        <View style={s.rowItem}>
          <View style={s.textBlock}>
            <Text style={s.title}>{content.title}</Text>
            <Text style={s.description}>{content.description}</Text>
          </View>
          <View style={s.location}>
            <Text style={s.locationName}>{content.location}</Text>
            <Image style={s.locationIcon} source={images.default.location} />
          </View>
        </View>
        <View style={s.logo}>
          <Image style={s.image} source={images.default.truck} />
        </View>
      </View>
    );
  }
}

export default CafeDescription;
