import React from 'react';
import { TouchableOpacity } from 'react-native';

const Tile = (props) => {
  return (
    <TouchableOpacity style={styles.containerStyle}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '25%'
  }
}

export default Tile;
