import numeral from 'numeral';
import {useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import CodePush, {DownloadProgress} from 'react-native-code-push';

export default function useCodePush() {
  const [progress, setProgress] = useState<DownloadProgress>({
    receivedBytes: 0,
    totalBytes: 0,
  });
  const [status, setStatus] = useState<CodePush.SyncStatus>(CodePush.SyncStatus.CHECKING_FOR_UPDATE);

  const percent = useMemo(() => {
    if (progress.totalBytes === 0) return 0;
    return +numeral(progress.receivedBytes / progress.totalBytes).format('0.00');
  }, [progress]);

  const message = useCodePushMessage(status, percent);

  useEffect(() => {
    CodePush.sync(
      {
        mandatoryInstallMode: CodePush.InstallMode.ON_NEXT_RESUME,
        updateDialog: {
          appendReleaseDescription: true,
          title: '',
          optionalUpdateMessage: 'A new version is available, please update!',
          optionalInstallButtonLabel: 'Update',
          optionalIgnoreButtonLabel: '',
          mandatoryUpdateMessage: 'A new version is available, please update!',
          mandatoryContinueButtonLabel: 'Update',
        },
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      status => {
        setStatus(status);
        switch (status) {
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            setTimeout(() => CodePush.restartApp(), 100);
            break;
        }
      },
      progress => setProgress(progress),
    ).catch(e => {
      Alert.alert(
        '',
        `Error updating to the new version, the application will restart.`,
        [
          {
            onPress: () => CodePush.restartApp(),
            text: 'Restart the application',
          },
          {
            onPress: () => setStatus(CodePush.SyncStatus.UP_TO_DATE),
            text: 'Use the old version',
          },
        ],
        {
          cancelable: false,
        },
      );
    });
  }, []);

  return {status, progress, message};
}

function useCodePushMessage(status: CodePush.SyncStatus, percent: number) {
  const [message, setMessage] = useState(`Checking for updates`);
  useEffect(() => {
    switch (status) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE: {
        setMessage(`Checking for updates`);
        break;
      }
      case CodePush.SyncStatus.UP_TO_DATE: {
        setMessage(`Version check completed`);
        break;
      }
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE: {
        setMessage(`Downloading update package ${numeral(percent).format('00.0%')}`);
        break;
      }
      case CodePush.SyncStatus.INSTALLING_UPDATE: {
        setMessage(`Installing update package`);
        break;
      }
    }
  }, [status, percent]);

  return message;
}
