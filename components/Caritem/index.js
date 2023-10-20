import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bg1 from '../../assets/ModelS.jpeg'
import styles from './styles';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={bg1} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </View>
    )
}

export default CarItem