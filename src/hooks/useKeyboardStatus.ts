import {useEffect, useLayoutEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export default function useKeyboardStatus() {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return [visible];
}
