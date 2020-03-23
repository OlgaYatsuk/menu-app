// @flow

import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import * as images from '../../ui/images';
import {s} from './styles';

class Header extends Component {
  getContent = () => require('./mockedData');

  state = {
    content: this.getContent(),
  };

  render() {
    const {content} = this.state;

    return (
      <View style={s.header}>
        <TouchableOpacity>
          <Image style={s.icon} source={images.default.menu} />
        </TouchableOpacity>
        <Text style={s.title}>{content.title}</Text>
        <TouchableOpacity>
          <Image style={s.icon} source={images.default.arrow} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
