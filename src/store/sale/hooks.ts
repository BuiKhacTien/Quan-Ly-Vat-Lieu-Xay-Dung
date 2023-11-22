import {useAppSelector} from '../hooks';

export function useSale() {
  return useAppSelector(store => store.sale);
}

