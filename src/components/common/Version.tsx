import { View, Text, Platform } from 'react-native';
import React, { useRef } from 'react';
import Colors from '../../contants/Colors';
import VersionChecker from 'react-native-version-check';
import useCodePushVersion from '../../hooks/useCodePushVersion';


export default function Version() {
  const version = VersionChecker.getCurrentVersion();
  const {build} = useCodePushVersion();
  return (
    <View>
      <Text style={{ textAlign: 'center', color: Colors.white }}>
        Version {`${version}.${build}`}
      </Text>
    </View>
  );
}
