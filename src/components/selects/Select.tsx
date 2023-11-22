import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Select, CheckIcon } from 'native-base'
import IconEntypo from 'react-native-vector-icons/Entypo';
import Colors from '../../contants/Colors';
import { TItemSelect } from '../../types/Types';

type TSelectTuyen = {
  color?: string;
  colorText?: string;
  bgColor?: string;
  listItemSelect: TItemSelect[];
  id: string;
  setId: (value: string) => any;
}


export default function SelectCustom({ color, colorText, bgColor, listItemSelect, id, setId }: TSelectTuyen) {


  return (
    <View style={[styles.selectedBox]}>
      <Select
        dropdownIcon={<View style={{ marginRight: 10 }}><IconEntypo name='chevron-down' size={25} color={color || Colors.white} /></View>}
        fontSize={15}
        height={39}
        color={colorText || Colors.white}
        borderColor={color || Colors.white}
        placeholderTextColor={color || Colors.white}
        shadow={2}
        selectedValue={id}
        minWidth="200"
        placeholder={listItemSelect[0].name}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }}
        _light={{
          bg: bgColor || Colors.blackO1,
        }}
        onValueChange={itemValue => setId(itemValue)}
      >
        {
          listItemSelect.length > 0 ?
            listItemSelect.map((value, index) => (
              <Select.Item key={"npp" + index} shadow={2} label={value.name} value={value.id} />
            )) : (
              <Select.Item shadow={2} label="Chưa có dữ liệu" value="" />
            )
        }
      </Select>
    </View>
  )
}

const styles = StyleSheet.create({
  selectedBox: {
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
