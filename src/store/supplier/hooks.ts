import {useAppSelector} from '../hooks';

export function useSupplier() {
  return useAppSelector(store => store.supplier);
}

