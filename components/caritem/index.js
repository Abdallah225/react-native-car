import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButtom/index';
import styles from './styles';

const CarItem = (props) => {
  // VARIABLE PROPS 
  const {name, tagline, taglineCTA, image} = props.car;
    return (
        <View style={styles.carContainer}>
          <ImageBackground source= {image}
          style={styles.image}
          />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline} 
            {' '}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
            </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton type="primary"
          content={"custom order"}
          onPress={()=>{
            console.warn("custom order was pressed")
          }}
          />
          <StyledButton type="secondary"
          content={"Existing inventory"}
          onPress={()=>{
            console.warn("Existing inventory was pressed")
          }}
          />
        </View>
      </View>
    );
};

export default CarItem;