import { StyleSheet, Text, View, Pressable, TextInput,Image, TouchableOpacity } from 'react-native'
import React , { useState }from 'react'
import CountryPicker from 'react-native-country-picker-modal';

const LoginWithPhoneNumber = () => {
    const [countryCode, setCountryCode] = useState(''); // Mã quốc gia
  const [countryName, setCountryName] = useState(''); // Tên quốc gia

  const onSelectCountry = (country) => {
    if (country) {
        const countryCode = Array.isArray(country.callingCode) ? country.callingCode[0] : '';
        const countryName = country.name || '';
    
        setCountryCode(countryCode);
        setCountryName(countryName);
    
        console.log(`Selected Country Code: ${countryCode}`);
    }
  };
    return (
        <View style={styles.body}>
             <Image style={styles.imgLogo} source={require('../Image/Login/logo2.png')}/>
            <Text style={styles.txttitle1}>Chào mừng bạn đến với</Text>
            <Text style={styles.txttitle}>Dshoes</Text>
            <Text style={styles.txttitle}>Đăng nhập ngay bây giờ</Text>

            <View style={styles.formChoose}>
                <Pressable style={styles.btnChoose} >
                    <Text style={styles.txtchoose}>Email</Text>
                </Pressable>
                <Pressable style={styles.btnChoose} >
                    <Text style={styles.txtchoose}>Số điện thoại</Text>
                </Pressable>
            </View>

            <Text>Chọn quốc gia:</Text>
           
           <CountryPicker
             withFilter
             withFlag
             withCountryNameButton
             withAlphaFilter
             onSelect={onSelectCountry}
             containerButtonStyle={styles.countryPickerButton}
             countryCode={countryCode}
             withCallingCode
             withEmoji
             
           />
           
           <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
  <Text>Mã quốc gia: {countryCode}</Text>
  <Text>Tên quốc gia: {countryName}</Text>
  {countryCode && countryCode.indexOf('+84') !== -1 && <Text>🇻ietnam</Text>} 

</View>


            <View style={styles.inputView}>
            <Text style={styles.txtTitleText}>Số điện thoại</Text>
           
            <TextInput

                style={styles.textEmail} placeholder='Số điện thoại'

                placeholderTextColor="black"  ></TextInput>
            </View>

           
            <Text style={styles.txtQuenMK}>Quên mật khẩu?</Text>

             <Pressable style={styles.btnLogin} >
                    <Text style={styles.txtLogin}>Gửi mã OTP</Text>
                </Pressable>

                <Text style={styles.txtHoac}>Hoặc</Text>

                <View style={styles.viewMXH}>
                <Pressable style={styles.btnCircle} >
                    <Text style={styles.txtMXH}>Fb</Text>
                </Pressable>
                <Pressable style={styles.btnCircle} >
                    <Text style={styles.txtMXH}>Gg</Text>
                </Pressable>
                <Pressable style={styles.btnCircle} >
                    <Text style={styles.txtMXH}>Gh</Text>
                </Pressable>
                </View>
               
                

                

        </View>
    )
}

export default LoginWithPhoneNumber

const styles = StyleSheet.create({
    countryPickerButton: {
        backgroundColor: '#b6f1fe',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        color:'#A4A4A4'
    },
    imgLogo:{
       
     alignSelf:'center',
     width:'100%',
     height:'30%'


    },
    txtNull2:{
        fontSize:15,
        textAlign: 'center',
        marginTop:10,
        color:'blue',
        fontWeight:'bold',
       
        
        
       
    },
    txtNull1:{
        fontSize:15,
        textAlign: 'center',
        marginTop:10 ,
        
        color:'black'
    },
    viewMXH:{
            flexDirection:'row',
            justifyContent:'space-between',
            width:'50%',
            alignSelf:'center',
            marginTop:5

    },
    txtMXH:{
       
        lineHeight:45,
        textAlign: 'center',
        color:'black',
        fontWeight:'bold',
        
    },
    btnCircle:{
        backgroundColor:'#ffffff',
        width:50,
        height:50,
        overflow: 'hidden', // Đảm bảo nội dung không tràn ra ngoài khi áp dụng borderRadius
        borderRadius:25,
        elevation: 7,
        margin:10
    },
    txtHoac:{
          
     fontSize:15,
     textAlign: 'center',
     marginTop:15 ,
     fontWeight:'bold',
     color:'black'
    },
    txtLogin:{
      fontSize:21,
     fontWeight:'bold'
     
    },
    btnLogin:{
        
      
        marginTop: 10,
        backgroundColor: '#29bcbe',
        width: '80%',
        height: '6%',
        borderRadius: 25,
          justifyContent: 'center',
        alignItems: 'center',
     alignSelf:'center',
      elevation: 7,
       
      
    },
    txtQuenMK:{
       
     fontSize:10,
       textAlign: 'right',
       margin:10
       

    },
    inputView:{
       
       marginTop:10
        
    },
    txtTitleText:{
        color: 'black',
       
       
        fontSize: 12
    },
    textEmail: {
        backgroundColor: '#b6f1fe',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        
    },
    txtchoose: {
        color: 'black',
        fontStyle: 'normal',
        textAlign: 'center',
        fontSize: 12


    },
    btnChoose: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '75%',
        width: '47%',
        backgroundColor: 'white',
        borderRadius: 25,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',

    },
    formChoose: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#E2FAFF',
        width: '60%',
        height: '6%',
        borderRadius: 25,
        marginLeft: 70,
        marginRight: 70,
       

    },
    txttitle1: {
        color: 'blue',
        fontStyle: 'italic',
        marginLeft: 20,
      


    },
    txttitle: {
        color: 'blue',
        fontStyle: 'italic',
        marginLeft: 20,
        marginTop: 2


    },

    body: {
        backgroundColor: "#effffd",
        width: '100%',
        height: '100%',
        padding: 8
    }
})