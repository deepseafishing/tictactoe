import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import GameBoard from './gameBoard';
const LENGTH = 3;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPlayer: 1,
      board: Array(LENGTH)
        .fill(0)
        .map(el => Array(LENGTH).fill(0)),
      diagonal: 0,
      antiDiagonal: 0,
      row: Array(LENGTH).fill(0),
      col: Array(LENGTH).fill(0)
    };
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      currPlayer: 1,
      board: Array(LENGTH)
        .fill(0)
        .map(el => Array(LENGTH).fill(0)),
      diagonal: 0,
      antiDiagonal: 0,
      row: Array(LENGTH).fill(0),
      col: Array(LENGTH).fill(0)
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
      newRow[row] === val * LENGTH ||
      newCol[col] === val * LENGTH ||
      newDiag === val * LENGTH ||
      newAntiDiag === LENGTH
    )
      return Alert.alert(
        `${this.state.currPlayer === 1 ? 'Shield' : 'Sword'} is the winner!`,
        '',
        [{ text: 'OK', onPress: () => this.initializeGame() }]
      );
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
        <GameBoard
          length={LENGTH}
          board={this.state.board}
          putIcon={this.putIcon}
          renderIcon={this.renderIcon}
        />
        <View style={{ paddingTop: 50 }}>
          <Text style={styles.title}>
            It's {this.state.currPlayer === 1 ? 'Shield' : 'Sword'}'s turn!{' '}
          </Text>
        </View>
        <View>
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
  shield: {
    color: '#C3E88D',
    fontSize: 80,
    alignItems: 'center'
  },
  sword: {
    color: '#FF5370',
    fontSize: 80,
    alignItems: 'center'
  },
  title: {
    color: '#959DCB',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 50
  }
});
