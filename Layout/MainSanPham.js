import { StyleSheet, Text, View, Pressable, TextInput, Image, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'




const MainSanPham = () => {
  const [data, setData] = useState([
    require('../Image/Main/banner1.png'),
    require('../Image/Main/banner2.png'),
    require('../Image/Main/banner3.png'),
    // Add more images as needed


  ]);

  //Tạo State Cho Các Thể Loại và Chỉ Số Thể Loại Được Chọn:
  const [categories, setCategories] = useState([
    { id: 1, name: 'Sneakers' },
    { id: 2, name: 'Boots' },
    { id: 3, name: 'Sandals' },
    { id: 4, name: 'Formal' },
    { id: 5, name: 'Slippers' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //hàm xử lí khi click vào thể loại
  const handleCategoryPress = (category) => {
    setSelectedCategory(category.id === selectedCategory ? null : category.id);
  };
  //render cho flatlisst
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        { backgroundColor: item.id === selectedCategory ? '#29bcbe' : '#ffffff' },
      ]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={{ color: item.id === selectedCategory ? '#ffffff' : '#006863', fontWeight: 'bold' }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );


  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.floor(contentOffset.x / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <Image source={item} style={{ width: Dimensions.get('window').width, height: 250 }} />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      flatListRef.current.scrollToIndex({
        index: (currentIndex + 1) % data.length,
        animated: true,
      });
    }, 3000); // Thay đổi số 3000 thành khoảng thời gian bạn muốn
    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const handleFloatingButtonPress = () => {
    // Xử lý sự kiện khi nút được nhấn
    console.log('Floating button pressed!');
  };

  const renderContentView = () => {
    switch (selectedCategory) {
      case 1:
        return   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.layoutGiay1}>
          <Image source={require('../Image/Login/giay.png')}
            style={styles.imgGiay} />
          <Text style={styles.txtGiayInf}>Air Max Pegasus 37</Text>
          <Text style={styles.txtGiayInf2}>225.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutGiay2}>
          <Image source={require('../Image/Login/giay2.png')}
            style={styles.imgGiay2} />
          <Text style={styles.txtGiayInfX}>Air Max Alaba 700</Text>
          <Text style={styles.txtGiayInf2}>325.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton2}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>;
      case 2:
        return  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.layoutGiay1}>
          <Image source={require('../Image/Login/giay2.png')}
            style={styles.imgGiay} />
          <Text style={styles.txtGiayInf}>Air Max Pegasus 37</Text>
          <Text style={styles.txtGiayInf2}>325.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutGiay2}>
          <Image source={require('../Image/Login/giay.png')}
            style={styles.imgGiay2} />
          <Text style={styles.txtGiayInfX}>Air Max Alaba 700</Text>
          <Text style={styles.txtGiayInf2}>425.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton2}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>;;
      case 3:
        return  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.layoutGiay1}>
          <Image source={require('../Image/Login/giay.png')}
            style={styles.imgGiay} />
          <Text style={styles.txtGiayInf}>Air Max Pegasus 37</Text>
          <Text style={styles.txtGiayInf2}>525.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutGiay2}>
          <Image source={require('../Image/Login/giay2.png')}
            style={styles.imgGiay2} />
          <Text style={styles.txtGiayInfX}>Air Max Alaba 700</Text>
          <Text style={styles.txtGiayInf2}>625.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton2}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>;;
      case 4:
        return  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.layoutGiay1}>
          <Image source={require('../Image/Login/giay2.png')}
            style={styles.imgGiay} />
          <Text style={styles.txtGiayInf}>Air Max Pegasus 37</Text>
          <Text style={styles.txtGiayInf2}>2225.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutGiay2}>
          <Image source={require('../Image/Login/giay.png')}
            style={styles.imgGiay2} />
          <Text style={styles.txtGiayInfX}>Air Max Alaba 700</Text>
          <Text style={styles.txtGiayInf2}>1325.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton2}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>;;
      case 5:
        return  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.layoutGiay1}>
          <Image source={require('../Image/Login/giay.png')}
            style={styles.imgGiay} />
          <Text style={styles.txtGiayInf}>Air Max Pegasus 37</Text>
          <Text style={styles.txtGiayInf2}>5225.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutGiay2}>
          <Image source={require('../Image/Login/giay2.png')}
            style={styles.imgGiay2} />
          <Text style={styles.txtGiayInfX}>Air Max Alaba 700</Text>
          <Text style={styles.txtGiayInf2}>4325.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton2}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>;;
      default:
        return  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.layoutGiay1}>
          <Image source={require('../Image/Login/giay.png')}
            style={styles.imgGiay} />
          <Text style={styles.txtGiayInf}>Air Max Pegasus 37</Text>
          <Text style={styles.txtGiayInf2}>225.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutGiay2}>
          <Image source={require('../Image/Login/giay2.png')}
            style={styles.imgGiay2} />
          <Text style={styles.txtGiayInfX}>Air Max Alaba 700</Text>
          <Text style={styles.txtGiayInf2}>325.000 VNĐ</Text>
          <Image source={require('../Image/Login/color.png')}
            style={styles.txtGiayInf3}
          />

          <TouchableOpacity
            style={styles.floatingButton2}
            onPress={handleFloatingButtonPress}
          >
            <Text style={styles.buttonText2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>;;
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.body}>
        <View style={styles.ViewSearch}>
          <TextInput

            style={styles.textEmail} placeholder='Tìm kiếm sản phẩm'

            placeholderTextColor="#024C62"  ></TextInput>

          <Pressable style={styles.btnSearch}>
            <Text style={{ color: 'white' }}>Search</Text>
          </Pressable>
        </View>
        <View style={{ height: '30%' }}>
          <Text style={styles.txttitle}>Sản phẩm xu hướng</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
              ref={flatListRef}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScrollEndDrag={handleScroll}
              onViewableItemsChanged={onViewableItemsChanged.current}
            />
          
          </View>
        </View>

        <View style={{ height: 46,marginTop:10 }}>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.Flat2}

          />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.txttitle}>New Men's</Text>
          <Text style={styles.txttitle2}>Tất cả</Text>
        </View>

        <View >{renderContentView()}</View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.txttitle}>Giảm giá</Text>
          <Text style={styles.txttitle2}>Tất cả</Text>
        </View>

        <View style={styles.banner2}>
          <View style={styles.bannerItem}>
          <Text style={styles.bannerTxt1}>Summer Sale</Text>
          <Text style={styles.bannerTxt2}>30% OFF</Text>
            
          <Pressable style={styles.btnSeeMore}>
            <Text style={{ color: 'white',fontWeight:'bold' }}>See more</Text>
          </Pressable>

          </View >

          <Image source={require('../Image/Login/giay3.png')}
          style={{zIndex:100,width:170,height:170,marginTop:-20,marginLeft:-30}}

          />



        </View>

       
      </View>
    </ScrollView>
  )
}

export default MainSanPham

const styles = StyleSheet.create({
  btnSeeMore: {
    backgroundColor: '#04A5AE',
    borderRadius: 20,
    borderColor: '#C5C1C1',
    height: 40,
    
   
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    
    color: '#000000',
    width:100
  },
  bannerTxt2:{
    color:'#024C62',
    fontSize:45,
    fontWeight: 'bold',
    margin:3

  },
  bannerTxt1:{
    color:'#024C62',
    fontSize:15,
    
    margin:3

  },
  bannerItem:{
    flexDirection:'column',

  },
  banner2: {
    width: '96%',
    height: "auto",
    backgroundColor: '#ffffff',
    borderRadius: 25,
    elevation: 10,
    shadowColor:'#29bcbe',
    margin: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:7,
    zIndex:1,

  },
  buttonText2: {
    fontSize: 20,
    color: '#29bcbe',
    fontWeight: 'bold',
  },
  layoutGiay2: {
    backgroundColor: '#29bcbe',
    flexDirection: 'column',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    zIndex: 1,
    marginTop: 50,
    height: 210,
    elevation:10

  },
  floatingButton2: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    right: 75,
    bottom: 8,
    backgroundColor: '#befdf5', // Màu của nút
    borderRadius: 28, // Bán kính để làm cho nút tròn
    elevation: 8, // Độ nâng của nút, tạo hiệu ứng nhấp nhô
  },
  txtGiayInfX: {
    color: 'blue',
    fontWeight: 'bold',
    zIndex: 1,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    marginTop: -20

  },
  imgGiay2: {
    zIndex: 100,
    marginTop: -140

  },
  floatingButton: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    right: 75,
    bottom: 8,
    backgroundColor: '#29bcbe', // Màu của nút
    borderRadius: 28, // Bán kính để làm cho nút tròn
    elevation: 8, // Độ nâng của nút, tạo hiệu ứng nhấp nhô
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  txtGiayInf3: {

    zIndex: 1,
    marginTop: 5





  },
  txtGiayInf2: {
    color: 'red',
    fontWeight: 'bold',
    zIndex: 1,
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    marginTop: 5

  },
  txtGiayInf: {
    color: 'blue',
    fontWeight: 'bold',
    zIndex: 1,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    marginTop: -40

  },
  imgGiay: {
    zIndex: 100,
    marginTop: -150

  },
  layoutGiay1: {
    backgroundColor: '#befdf5',
    flexDirection: 'column',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    zIndex: 1,
    marginTop: 50,
    height: 210,
    elevation:5

  },

  txttitle2: {
    color: 'blue',

    marginLeft: 15,
    marginTop: 12,
    fontSize: 11,

  },
  Flat2: {





  },
  categoryItem: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#006863',
    backgroundColor: '#ffffff',
    height: "75%",
    width: 'auto',
    color: '#006863',
    paddingBottom: -10,
    paddingTop: 5


  },
  selectedCategoryItem: {
    backgroundColor: '#29bcbe',
  },
  categoryText: {
    color: '#006863',
  },
  selectedCategoryText: {
    color: '#ffffff',
  },
  txttitle: {
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 12,
    fontSize: 13
  },
  btnSearch: {
    backgroundColor: '#04A5AE',
    borderRadius: 20,
    borderColor: '#C5C1C1',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#000000',
  },
  textEmail: {
    backgroundColor: '#ffffff',
    borderColor: 'gray',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  ViewSearch: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C5C1C1',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#000000',
  },
  body: {
    backgroundColor: "#effffd",
    alignSelf: 'center',
    padding: 13,
     flex: 1,
    marginBottom:80,
   

  },
  scrollContainer: {
    backgroundColor: "#effffd",
    flexGrow: 0,
    justifyContent: 'center',
   
  }
});
