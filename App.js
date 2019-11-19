import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPlayer: 1,
      board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      diagonal: 0,
      antiDiagonal: 0,
      row: [0, 0, 0],
      col: [0, 0, 0]
    };
  }

  initialize = () => {
    this.setState({
      board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currPlayer: 1
    });
  };

  move = (row, col) => {
    const val = this.state.currPlayer === 1 ? -1 : 1;
    this.state.row[row] += val;
    this.state.col[col] += col;
    const newBoard = this.state.board.slice();
    newBoard[row][col] = this.state.currPlayer;
    this.setState({
      board: newBoard
    });
    this.setState({ currPlayer: this.state.currPlayer === 1 ? 2 : 1 });
  };

  renderIcon = (row, col) => {
    switch (this.state.board[row][col]) {
      case 1:
        return <Icon name="shield" style={styles.shield} />;
      case 2:
        return <Icon name="sword" style={styles.sword} />;
      default:
        <View />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The War of Sword and Shield</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            disabled={this.state.board[0][0] ? true : false}
            onPress={() => this.move(0, 0)}
            style={[styles.cell, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[0][1] ? true : false}
            onPress={() => this.move(0, 1)}
            style={[styles.cell, { borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[0][2] ? true : false}
            onPress={() => this.move(0, 2)}
            style={[styles.cell, { borderRightWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            disabled={this.state.board[1][0] ? true : false}
            onPress={() => this.move(1, 0)}
            style={[styles.cell, { borderLeftWidth: 0 }]}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[1][1] ? true : false}
            onPress={() => this.move(1, 1)}
            style={styles.cell}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[1][2] ? true : false}
            onPress={() => this.move(1, 2)}
            style={[styles.cell, { borderRightWidth: 0 }]}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            disabled={this.state.board[2][0] ? true : false}
            onPress={() => this.move(2, 0)}
            style={[styles.cell, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[2][1] ? true : false}
            onPress={() => this.move(2, 1)}
            style={[styles.cell, { borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[2][2] ? true : false}
            onPress={() => this.move(2, 2)}
            style={[styles.cell, { borderRightWidth: 0, borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
