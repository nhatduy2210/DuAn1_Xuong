import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Text, Pressable, TextInput, ScrollView,Dimensions } from 'react-native';

const MainSanPhamShop = () => {

  const [categories, setCategories] = useState([
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Boots' },
    { id: 3, name: 'Sandals' },
    { id: 4, name: 'Formal' },
    { id: 5, name: 'Slippers' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category.id === selectedCategory ? null : category.id);
  };

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

  const data = [
    { id: 1, image: require('../Image/Login/shop1.png') },
    { id: 2, image: require('../Image/Login/shop2.png') },
    { id: 3, image: require('../Image/Login/shop1.png') },
    { id: 4, image: require('../Image/Login/shop2.png') },
  ];
  const data_2 = [
    { id: 1, image: require('../Image/Login/shop2.png') },
    { id: 2, image: require('../Image/Login/shop1.png') },
    { id: 3, image: require('../Image/Login/shop2.png') },
    { id: 4, image: require('../Image/Login/shop1.png') },
  ];
  const data_3 = [
    { id: 1, image: require('../Image/Login/shop1.png') },
    { id: 2, image: require('../Image/Login/shop1.png') },
    { id: 3, image: require('../Image/Login/shop2.png') },
    { id: 4, image: require('../Image/Login/shop2.png') },
  ];
  const data_4 = [
    { id: 1, image: require('../Image/Login/shop2.png') },
    { id: 2, image: require('../Image/Login/shop2.png') },
    { id: 3, image: require('../Image/Login/shop1.png') },
    { id: 4, image: require('../Image/Login/shop1.png') },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item.id === selectedItem ? null : item.id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <Image
        source={item.image}
        style={[styles.image, { width: item.id === selectedItem ? 180 : 150,height: item.id === selectedItem ? "100%" : '90%' }]}
      />
    </TouchableOpacity>
  );

  const [data2, setData] = useState([
    require('../Image/Main/banner1.png'),
    require('../Image/Main/banner2.png'),
    require('../Image/Main/banner3.png'),
    // Add more images as needed
    


  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.floor(contentOffset.x / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const renderItem2 = ({ item }) => (
    <Image source={item} style={{ width: Dimensions.get('window').width, height: 270 ,elevation:10,marginTop:-10}} />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data2.length);
      flatListRef.current.scrollToIndex({
        index: (currentIndex + 1) % data2.length,
        animated: true,
      });
    }, 3000); // Thay đổi số 3000 thành khoảng thời gian bạn muốn
    return () => clearInterval(interval);
  }, [currentIndex, data2.length]);

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
        return  <View style={{height:320,padding:5}}>
       
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.Flat3}
        />
        </View>;
      case 2:
        return  <View style={{height:320,padding:5}}>
       
        <FlatList
          data={data_2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.Flat3}
        />
        </View>;
      case 3:
        return  <View style={{height:320,padding:5}}>
       
        <FlatList
          data={data_3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.Flat3}
        />
        </View>;
      case 4:
        return  <View style={{height:320,padding:5}}>
       
        <FlatList
          data={data_4}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.Flat3}
        />
        </View>;
      case 5:
        return  <View style={{height:320,padding:5}}>
       
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.Flat3}
        />
        </View>;
      default:
        return  <View style={{height:320,padding:5}}>
       
        <FlatList
          data={data_2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.Flat3}
        />
        </View>;
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.body}>
        <View style={styles.ViewSearch}>
          <TextInput
            style={styles.textEmail} placeholder='Tìm kiếm sản phẩm'
            placeholderTextColor="#024C62" />
          <Pressable style={styles.btnSearch}>
            <Text style={{ color: 'white' }}>Search</Text>
          </Pressable>
        </View>
        <Text style={styles.txttitle}>Chọn danh mục</Text>
       <View style={{width:'100%'}}>
       <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          style={styles.Flat2}
        />
       </View>
       <Text style={styles.txttitle}>Chọn sản phẩm</Text>

       <View >{renderContentView()}</View>
       

        <Text style={styles.txttitle}>Sản phẩm bán chạy</Text>

        <View style={{  }}>
        
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
              ref={flatListRef}
              data={data2}
              renderItem={renderItem2}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScrollEndDrag={handleScroll}
              onViewableItemsChanged={onViewableItemsChanged.current}
            />
            
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Flat3: {
    marginTop: 10
  },
  image: {
    margin: 3,
    borderRadius: 8,
    elevation:5
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
    height: "85%",
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
    marginTop: 10,
    fontSize: 13
  },
  btnSearch: {
    backgroundColor: '#6fe7dc',
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
    padding: 5,
    flex: 1,
    marginBottom:100
  },
  scrollContainer: {
    backgroundColor: "#effffd",
    flexGrow: 0,
    justifyContent: 'center'
  }
});

export default MainSanPhamShop;
