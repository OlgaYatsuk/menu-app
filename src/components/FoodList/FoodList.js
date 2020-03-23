import React, {Component} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {s} from './styles';
import {mockedData} from './mockedData';

class FoodList extends Component {
  state = {
    selectedFilter: '',
  };

  renderFilters = () => {
    const {selectedFilter} = this.state;

    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {mockedData.filters.map((filter, index) => {
          const isSelected = selectedFilter === filter;
          console.log(isSelected);
          console.log(filter);
          return (
            <TouchableOpacity
              key={index}
              disabled={isSelected}
              style={[s.filter, isSelected && s.filterActive]}>
              <Text style={[s.filter, isSelected && s.filterActive]}>
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity key={item.id} style={s.product}>
        <Image source={require('./images/burger.png')} style={s.productPhoto} />
        <View style={s.productTextBlock}>
          <Text style={s.productTitle}>{item.title}</Text>
          <Text style={s.productDescription}>{item.description}</Text>
        </View>
        <Text style={s.productPrice}>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  renderListFooter = () => {
    return (
      <View style={s.footer}>
        <View style={s.summary}>
          <Text style={s.summaryText}>مستر تاكو</Text>
          <Text style={s.summaryPrice}>1200.00</Text>
        </View>
        <TouchableOpacity style={s.button}>
          <Text style={s.buttonText}>{mockedData.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={s.foodList}>
        {this.renderFilters()}
        <FlatList
          data={mockedData.burgers}
          renderItem={item => this.renderItem(item)}
        />
        {this.renderListFooter()}
      </View>
    );
  }
}

export default FoodList;
