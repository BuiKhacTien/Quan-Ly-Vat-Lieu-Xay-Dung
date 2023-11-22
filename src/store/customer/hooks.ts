import {useAppSelector} from '../hooks';

export function useCustomer() {
  return useAppSelector(store => store.customer);
}

