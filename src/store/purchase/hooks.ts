import {useAppSelector} from '../hooks';

export function usePurchase() {
  return useAppSelector(store => store.purchase);
}

