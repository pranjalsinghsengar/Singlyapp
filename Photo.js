import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Photo = ({navigation}) => {
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image && image !== undefined && image !== null) {
      setPhotos(photos => [...photos, image]);

      console.log('====================================');
      console.log('photos length', photos.length, photos);
      console.log('====================================');
      setImage();
    }
  }, [image]);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const handlePhotoPress = async () => {
  //   const {status} = await ImagePicker.requestCameraPermissionsAsync();
  //   if (status !== 'granted') {
  //     alert('Permission to access camera roll is required!');
  //     return;
  //   }

  //   let result = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     quality: 0.5,
  //   });

  //   if (!result.cancelled) {
  //     setPhotos([...photos, {uri: result.uri}]);
  //   }
  // };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 720,
      cropping: true,
    }).then(image => {
      // console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      setIsDropdownVisible(false);
    });
  };
  const handleCameraLaunch = async () => {
    ImagePicker.openCamera({
      width: 200,
      height: 300,
      cropping: true,
    }).then(image => {
      // console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      setIsDropdownVisible(false);
    });
  };

  return (
    <ImageBackground
      source={require('./img/bgsingly.jpg')}
      style={styles.backgroundImage}
      blurRadius={25}>
      <Text style={styles.title}>Add Your Best Photos</Text>
      <View style={styles.container}>
        <View style={styles.photosContainer}>
          {/* <Image
            source={{
              uri: 'file:///storage/emulated/0/Android/data/com.singlyapp/files/Pictures/407b696a-b2e0-417d-acc3-5adece5be057.jpg',
            }}
            style={styles.photo}
          /> */}

          {photos.map((photo, index) => (
            <View key={index} style={styles.addPhotoButton}>
              <Image key={index} source={{uri: photo}} style={styles.photo} />

              {/* {photos.length ? null : (
                  <TouchableOpacity
                    // key={index}
                    onPress={() => setIsDropdownVisible(true)}>
                    <View style={styles.addPhotoButton}>
                      <Text style={styles.addPhotoButtonText}>+</Text>
                    </View>
                  </TouchableOpacity>
                )} */}
            </View>
          ))}

          {photos.length !== 4 && (
            <TouchableOpacity
              // key={index}
              onPress={() => setIsDropdownVisible(true)}>
              <View style={styles.addPhotoButton}>
                <Text style={styles.addPhotoButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          )}

          {/* {[...Array(4 - photos.length)].map((_, index) => (
            <>
              <TouchableOpacity
                key={index}
                onPress={() => setIsDropdownVisible(true)}>
                <View style={styles.addPhotoButton}>
                  <Text style={styles.addPhotoButtonText}>+</Text>
                </View>
              </TouchableOpacity>
            </>
          ))} */}
          <Modal
            visible={isDropdownVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setIsDropdownVisible(false)}>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
                onPress={() => setIsDropdownVisible(false)}
                style={{
                  fontSize: '5rem',
                  fontWeight: 900,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                }}>
                <Text>X</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={openImagePicker}>
                <Text style={styles.dropdownText}>GALLERY</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={handleCameraLaunch}>
                <Text style={styles.dropdownText}>CAMERA</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Location')}
          disabled={photos.length !== 4}
          color={photos.length === 4}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    // marginBottom: 60,
    marginTop: 30,
    padding: 20,
    color: 'white',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop:  10,
    marginBottom: 70,
    // padding: 10,
  },
  photo: {
    width: '100%',
    height: '100%',
    // margin: 5,
  },
  addPhotoButton: {
    width: 130,
    height: 130,
    background: 'Transparent',
    borderWidth: 1,
    borderColor: '#ff4f4f',
    borderRadius: 10,
    justifyContent: 'center',
    // marginTop: 80,
    alignItems: 'center',
    margin: 13,
    overflow: 'hidden',
  },
  addPhotoButtonText: {
    fontSize: 30,
    color: '#FF4F4F',
  },
  button: {
    backgroundColor: '#FF4F4F',
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 18,
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  dropdownContainer: {
    marginTop: 370,
    backgroundColor: '#CCC',
    borderRadius: 16,
    // borderWidth: ,
    width: 290,
    marginLeft: 53,
    borderColor: '#ccc',
    padding: 5,
  },
  dropdownItem: {
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 20,
    color: '#000000',
    marginLeft: 80,
  },
});

export default Photo;
