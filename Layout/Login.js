import { StyleSheet, Text, View, Pressable, TextInput,Image } from 'react-native'
import React from 'react'



const Login = () => {
    
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

            <View style={styles.inputView}>
            <Text style={styles.txtTitleText}>Username</Text>
            <TextInput

                style={styles.textEmail} placeholder='Tên đăng nhập' ></TextInput>
            </View>

            <View style={styles.inputView}>
            <Text style={styles.txtTitleText}>Password</Text>
            <TextInput

                style={styles.textEmail} placeholder='Mật khẩu' ></TextInput>
            </View>
            <Text style={styles.txtQuenMK}>Quên mật khẩu?</Text>

             <Pressable style={styles.btnLogin} >
                    <Text style={styles.txtLogin}>Đăng nhập</Text>
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
                <View style={{flexDirection:'row',  alignSelf:'center'}}>
                <Text style={styles.txtNull1}>Bạn chưa có tài khoản?</Text>
                <Text style={styles.txtNull2}>Đăng ký</Text>
                </View>
                

                

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
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
        paddingLeft: 15,
        borderWidth: 1,
        backgroundColor: "#b6f1fe",
        borderRadius: 5,
        marginTop: 5,
        borderWidth: 0.2,
        height: 45,
        
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