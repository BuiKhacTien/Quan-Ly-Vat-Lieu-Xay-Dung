import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export {width, height};

export const vw = width / 100;
export const vh = height / 100;
export const xs = 2 * vw;
export const sm = 3 * vw;
export const md = 4 * vw;
export const lg = 5 * vw;
export const xl = 6 * vw;
