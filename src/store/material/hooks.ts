import {useAppSelector} from '../hooks';

export function useMaterial() {
  return useAppSelector(store => store.material);
}

