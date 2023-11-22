import {useEffect, useMemo, useState} from 'react';
import CodePush, {LocalPackage} from 'react-native-code-push';

export default function useCodePushVersion() {
  const [meta, setMeta] = useState<LocalPackage | null>(null);
  useEffect(() => {
    CodePush.getUpdateMetadata()
      .then(setMeta)
      .catch(() => {});
  }, []);

  const build = useMemo(() => (meta?.label || 'v1').replace(/\D+/g, ''), [meta]);
  return {version: meta?.appVersion || '1.0', build};
}
