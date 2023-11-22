import React, {PropsWithChildren, useContext, useEffect, useMemo} from 'react';
import CodePush from 'react-native-code-push';
import useCodePush from '../hooks/useCodePush';

export enum EAppVersionStatus {
  OUTDATE = 'OUTDATE',
  CHECKING = 'CHECKING',
  UPDATED = 'UPDATED',
}
export type TAppContext = {
  preparing: string | null;
};
export const AppContext = React.createContext<TAppContext>({
  preparing: EAppVersionStatus.CHECKING,
});

export function useAppRun() {
  const {preparing} = useContext(AppContext);
  return {preparing};
}

export function AppProvider(props: PropsWithChildren<any>) {
  const {status, message} = useCodePush();

  const preparing = useMemo(() => {
    if (status !== CodePush.SyncStatus.UP_TO_DATE) return message;
    return null;
  }, [status, message]);

  return (
    <AppContext.Provider value={{preparing}}>
      {props.children}
    </AppContext.Provider>
  );
}
