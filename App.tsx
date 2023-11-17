
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet
 
} from 'react-native';

import DuyTesst from './Testt/DuyTesst';
import Login from './Layout/Login';
import Register from './Layout/Register';
import LoginWithPhoneNumber from './Layout/LoginWithPhoneNumber';
import MainSanPham from './Layout/MainSanPham';
import MainSanPhamShop from './Layout/MainSanPhamShop';



function App(): JSX.Element {


  return (
    <SafeAreaView >
      {/* <Login/> */}
      {/*<Register/>*/}
      {/* <LoginWithPhoneNumber/> */}
      {/* <MainSanPham/> */}
      <MainSanPhamShop/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
