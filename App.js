import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
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

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      currPlayer: 1,
      board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      diagonal: 0,
      antiDiagonal: 0,
      row: [0, 0, 0],
      col: [0, 0, 0]
    });
  };

  putIcon = (row, col) => {
    const newBoard = this.state.board.slice();
    newBoard[row][col] = this.state.currPlayer;
    this.setState({ board: newBoard });
    this.checkWin(row, col);
    this.setState({ currPlayer: this.state.currPlayer === 1 ? 2 : 1 });
  };

  checkWin = (row, col) => {
    const val = this.state.currPlayer === 1 ? 1 : -1;
    const newRow = this.state.row.slice();
    newRow[row] += val;
    const newCol = this.state.col.slice();
    newCol[col] += val;
    const newDiag =
      row === col ? this.state.diagonal + val : this.state.diagonal;
    const newAntiDiag =
      row === this.state.col.length - col - 1
        ? this.state.antiDiagonal + val
        : this.state.antiDiagonal;
    this.setState({
      row: newRow,
      col: newCol,
      diagonal: newDiag,
      antiDiagonal: newAntiDiag
    });
    if (
      newRow[row] === val * 3 ||
      newCol[col] === val * 3 ||
      newDiag === val * 3 ||
      newAntiDiag === 3
    )
      return Alert.alert(`Player ${this.state.currPlayer} is the winner!`, '', [
        { text: 'OK', onPress: () => this.initializeGame() }
      ]);
    else return 0;
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
        <Text style={styles.title}>The War of{'\n'} Sword vs. Shield</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            disabled={this.state.board[0][0] ? true : false}
            onPress={() => this.putIcon(0, 0)}
            style={[styles.cell, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[0][1] ? true : false}
            onPress={() => this.putIcon(0, 1)}
            style={[styles.cell, { borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[0][2] ? true : false}
            onPress={() => this.putIcon(0, 2)}
            style={[styles.cell, { borderRightWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            disabled={this.state.board[1][0] ? true : false}
            onPress={() => this.putIcon(1, 0)}
            style={[styles.cell, { borderLeftWidth: 0 }]}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[1][1] ? true : false}
            onPress={() => this.putIcon(1, 1)}
            style={styles.cell}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[1][2] ? true : false}
            onPress={() => this.putIcon(1, 2)}
            style={[styles.cell, { borderRightWidth: 0 }]}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            disabled={this.state.board[2][0] ? true : false}
            onPress={() => this.putIcon(2, 0)}
            style={[styles.cell, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[2][1] ? true : false}
            onPress={() => this.putIcon(2, 1)}
            style={[styles.cell, { borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.board[2][2] ? true : false}
            onPress={() => this.putIcon(2, 2)}
            style={[styles.cell, { borderRightWidth: 0, borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 50 }}>
          <Button title="Start Again!" onPress={() => this.initializeGame()} />
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
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
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
    textAlign: 'center',
    paddingBottom: 50
  }
});
