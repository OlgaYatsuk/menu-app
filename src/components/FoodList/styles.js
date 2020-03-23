import {StyleSheet} from 'react-native';
import {colors} from '../../ui/colors';

export const s = StyleSheet.create({
  foodList: {
    flex: 1,
  },
  product: {
    flexDirection: 'row-reverse',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: 12,
    marginHorizontal: 24,
    justifyContent: 'flex-end',
  },
  productPhoto: {
    borderRadius: 8,
    width: 56,
    height: 56,
    resizeMode: 'cover',
  },
  productTextBlock: {
    flex: 1,
    paddingHorizontal: 16,
  },
  productTitle: {
    fontSize: 18,
    textAlign: 'right',
    fontWeight: '600',
  },
  productDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.grey,
    textAlign: 'right',
    flex: 1,
    lineHeight: 18,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
  },
  filter: {
    color: colors.grey,
    borderBottomWidth: 2,
    borderBottomColor: colors.grey,
    fontSize: 24,
    paddingBottom: 8,
    paddingHorizontal: 10,
  },
  filterActive: {
    color: colors.blue,
    borderBottomColor: colors.blue,
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 140,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  summaryPrice: {
    fontWeight: '600',
    fontSize: 24,
  },
  footer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: colors.white,
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
  },
});
