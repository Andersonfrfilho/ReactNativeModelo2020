import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  baseMarginTop: () => (Platform.OS === 'ios' ? '40px' : '0px'),
  screenWidth: width < height ? width : height,
  screenHeigth: width < height ? width : width,
  fontSize: (accentuate = 0) => {
    if (width > 400) {
      return `${18 + accentuate}px`;
    }
    if (width > 250) {
      return `${14 + accentuate}px`;
    }
    return `${12 + accentuate}px`;
  },
};
