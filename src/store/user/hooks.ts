import {useAppSelector} from '../hooks';

export function useUser() {
  return useAppSelector(store => ({...store.user}));
}

// export function useUserDistributor() {
//   const {JNpp: [distributor] = [{id: '', name: ''}]} = useUser();
//   return distributor;
// }

// export function useIsGTUser() {
//   return useUser()?.Position === 'CHGTSP';
// }
