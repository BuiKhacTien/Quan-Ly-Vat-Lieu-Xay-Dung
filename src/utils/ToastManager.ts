import Toast, { ToastPosition } from 'react-native-toast-message';

type TToast = {
  text1?: string;
  text2?: string;
  position?: ToastPosition;
  bottomOffset?: number;
}

export function ToastSuccess({text1 = '', text2 = '', position = 'bottom', bottomOffset = 60}: TToast) {
  Toast.show({
    type: 'success',
    text1,
    text2,
    position,
    bottomOffset,
  });
}

export function ToastError({text1 = '', text2 = '', position = 'bottom', bottomOffset = 60}: TToast) {
  Toast.show({
    type: 'error',
    text1,
    text2,
    position,
    bottomOffset,
  });
}
