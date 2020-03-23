import {StyleSheet} from 'react-native';
import {colors} from '../../ui/colors';

export const s = StyleSheet.create({
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'right',
  },
  description: {
    fontSize: 16,
    color: colors.grey,
    lineHeight: 20,
    fontWeight: '400',
    marginTop: 8,
    textAlign: 'right',
  },
  rowItem: {
    flex: 1,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  location: {
    marginTop: 18,
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
  },
  locationName: {
    color: colors.grey,
  },
  locationIcon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
});
