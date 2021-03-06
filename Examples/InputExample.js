/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2018/7/14
 *
 */

import React from "react";
import { VerticalScrollView } from "../src";
import { TextInput, StyleSheet, Text } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

class InputExampleStatic extends React.Component {
  _topInput = React.createRef();
  _bottomInput = React.createRef();

  render() {
    const arr = [];
    for (let i = 0; i < 20; ++i) arr.push(i);
    return (
      <VerticalScrollView
        style={styles.container}
        contentStyle={styles.content}
        tapToHideKeyboard={false}
        textInputRefs={[this._topInput, this._bottomInput]}
      >
        <TextInput
          ref={this._topInput}
          style={styles.input}
          placeholder="Keyboard Test Top"
        />
        <Text style={[styles.text, styles.input]}>
          Keyboard will never cover the focused TextInput
        </Text>
        <TextInput
          ref={this._bottomInput}
          style={styles.input}
          placeholder="Keyboard Test Bottom"
        />
      </VerticalScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    // flex: 1,
    // justifyContent: "space-between"
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 100
  },
  text: {
    marginHorizontal: 20,
    marginVertical: 100,
    fontSize: 30
  }
});

export const InputExample = gestureHandlerRootHOC(InputExampleStatic);
