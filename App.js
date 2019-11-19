import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The War of Sword and Shield</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[styles.cell, { borderLeftWidth: 0, borderTopWidth: 0 }]}
        >
          <Icon name="shield" style={styles.shield} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, { borderTopWidth: 0 }]}>
          <Icon name="sword" style={styles.sword} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cell, { borderRightWidth: 0, borderTopWidth: 0 }]}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={[styles.cell, { borderLeftWidth: 0 }]} />
        <TouchableOpacity style={styles.cell} />
        <TouchableOpacity style={[styles.cell, { borderRightWidth: 0 }]} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[styles.cell, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
        />
        <TouchableOpacity style={[styles.cell, { borderBottomWidth: 0 }]} />
        <TouchableOpacity
          style={[styles.cell, { borderRightWidth: 0, borderBottomWidth: 0 }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292D3E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cell: {
    color: 'black',
    borderColor: '#82AAFF',
    borderWidth: 3,
    width: 130,
    height: 130
  },
  shield: {
    color: '#C3E88D',
    fontSize: 100,
    alignItems: 'center'
  },
  sword: {
    color: '#FF5370',
    fontSize: 100,
    alignItems: 'center'
  },
  title: {
    color: '#959DCB',
    fontSize: 30,
    paddingBottom: 100
  }
});
