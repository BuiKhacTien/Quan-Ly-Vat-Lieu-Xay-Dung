import React, { useState, useEffect, useCallback } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Lottie_Files } from '../../assets';
import { useAppNavigation } from '../AppNavigator';
import { useAppState } from '../../hooks/useAppState';
import Screen from '../../components/common/Screen';
import FastImage from 'react-native-fast-image';
import { vw, height, vh, md, sm, xs, lg } from '../../contants/Sizes';
import Colors from '../../contants/Colors';
import { useAppDispatch } from '../../store/hooks';
import numeral from 'numeral';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YEAR_DATA } from '../../contants/InitialState';
import Footer from '../../components/common/Footer';
import { useCustomer } from '../../store/customer/hooks';
import EmptyData from '../../components/common/EmptyData';
import { TCustomer, TSupplier } from '../../types/Types';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import useDebounce from '../../hooks/useDebounce';
import { removeDiacritics } from '../../contants/Function';
import { useSupplier } from '../../store/supplier/hooks';

function SupplierScreen() {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const { supplier: suppliers = [] } = useSupplier();
  const [filterListSupplier, setFilterListSupplier] = useState<TSupplier[]>([]);
  const [search, setSearch] = useState('');
  const debounce = useDebounce(search, 300);

  console.log('search', search);

  useEffect(() => {
    if (debounce) {
      // chỉ search 1 thuộc tính name thôi:
      // const filter = customer.filter((value: TCustomer, index) => {
      //   return (removeDiacritics(value.name).toUpperCase()).includes(removeDiacritics(debounce).toUpperCase())
      // })

      // search 1 lúc nhiều thuộc tính
      const filter = suppliers.filter((value: TSupplier) => {
        const normalizedSearch = removeDiacritics(debounce).toUpperCase();
        const normalizedName = removeDiacritics(value.name).toUpperCase();
        const normalizedPhone = removeDiacritics(value.phone).toUpperCase();
        const normalizedAddress = removeDiacritics(value.address).toUpperCase();
        const normalizedNote = removeDiacritics(value.note).toUpperCase();

        return (
          normalizedName.includes(normalizedSearch) ||
          normalizedPhone.includes(normalizedSearch) ||
          normalizedAddress.includes(normalizedSearch) ||
          normalizedNote.includes(normalizedSearch)
        );
      });
      setFilterListSupplier(filter)
    } else {
      setFilterListSupplier([])
    }
  }, [debounce])

  return (
    <Screen
      fullscreen
      headerShown
      title='Nhà cung cấp'
      iconLeft='chevron-back'
      onIconLeftPress={() => navigation.goBack()}
      iconRight='add-circle-sharp'
      onIconRightPress={() => navigation.navigate('CreateEditSupplier')}
    >
      <View style={[styles.container]}>
        <FlatList
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          ListHeaderComponent={suppliers.length > 0 ? <SearchBox setSearch={setSearch} /> : <></>}
          ListEmptyComponent={<EmptyData color={Colors.mainColor} label={debounce ? 'Không tìm thấy nhà cung cấp này' : 'Chưa có dữ liệu!'} />}
          ListFooterComponent={<View style={{ height: 30 }}></View>}
          style={[styles.list]}
          data={debounce ? filterListSupplier : suppliers}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id + ''}
        />

      </View>
    </Screen>
  )
}

type TItem = {
  data: TSupplier;
}

const Item = ({ data }: TItem) => {

  return (
    <View style={[styles.itemBox]}>
      <View style={[styles.row]}>
        <Text style={[styles.text]}>Nhà cung cấp:</Text>
        <Text style={[styles.value]}>{data.name}</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.text]}>Người đại diện:</Text>
        <Text style={[styles.value]}>{data.contactPerson}</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.text]}>Số điện thoại:</Text>
        <Text style={[styles.value]}>{data.phone}</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.text]}>Địa chỉ:</Text>
        <Text style={[styles.value]}>{data.address}</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.text]}>Email:</Text>
        <Text style={[styles.value]}>{data.email}</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.text]}>Ghi chú:</Text>
        <Text style={[styles.value]}>{data.note}</Text>
      </View>
    </View>
  )
}

type TSearch = {
  setSearch: (value: string) => any;
}

const SearchBox = ({ setSearch }: TSearch) => {

  return (
    <View style={[styles.searchBox]}>
      <TextInput
        onChangeText={setSearch}
        style={[styles.search]}
        placeholder="Tìm kiếm..."
        placeholderTextColor={Colors.mainColor}
      />
      <IconIonicons name="search" size={25} color={Colors.mainColor} />
    </View>
  )
}

export default SupplierScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.whiteO1,
  },
  list: {

  },
  itemBox: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.mainColor,
    marginHorizontal: sm,
    marginTop: sm,
    padding: sm,
    backgroundColor: Colors.background + '11',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: Colors.white,
    paddingVertical: sm * 0.7,
    // backgroundColor: Colors.mainColor + '66',

  },
  text: {
    width: '35%',
    fontSize: sm*1.2,
    fontWeight: '700',
    color: Colors.mainColor,
  },
  value: {
    flex: 1,
    fontSize: sm*1.2,
    fontWeight: '700',
    color: Colors.mainColor,
    // backgroundColor: Colors.mainColor + '55',
    textAlign: 'right',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.mainColor,
    margin: sm,
    paddingRight: sm/2,
  },
  search: {
    flex: 1,
    padding: sm/2,
    width: '100%',
    fontSize: sm*1.2,
    color: Colors.mainColor,
  },
})