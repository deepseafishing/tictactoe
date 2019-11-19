import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function GameBoard({ length, board, putIcon, renderIcon }) {
  let grid = [];
  for (let i = 0; i < length; i++) {
    let children = [];
    for (let j = 0; j < length; j++) {
      children.push(
        <TouchableOpacity
          key={i * length + j}
          disabled={board[i][j] ? true : false}
          onPress={() => putIcon(i, j)}
          style={[
            styles.cell,
            {
              borderRightWidth: j === length - 1 ? 0 : 3,
              borderLeftWidth: j === 0 ? 0 : 3,
              borderBottomWidth: i === length - 1 ? 0 : 3,
              borderTopWidth: i === 0 ? 0 : 3
            }
          ]}
        >
          {renderIcon(i, j)}
        </TouchableOpacity>
      );
    }
    grid.push(
      <View style={{ flexDirection: 'row' }} key={i}>
        {children}
      </View>
    );
  }

  return <View>{grid}</View>;
}

const styles = StyleSheet.create({
  cell: {
    color: 'black',
    borderColor: '#82AAFF',
    borderWidth: 3,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
