import React from 'react';
import { Text, View } from 'react-native';
import { CloudLoader } from '../../../src/components/behaviour/CloudLoader';
import { RefreshHeader } from "./RefreshHeader";

export default class SearcheableRefreshHeader extends RefreshHeader {

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
        {this.state.status === 'refreshing' ? <CloudLoader /> : <Text>{this.getTitle()}</Text>}
      </View>
    );
  }

  getTitle() {
    const s = this.state.status;
    if (s === 'pullingEnough') {
      return 'Rilascia per aggiornare';
    } else if (s === 'pullingCancel') {
      return 'Rilascia per annullare';
    } else if (s === 'cancelRefresh') {
      return 'Aggiornamento cancellato';
    } else if (s === 'rebound') {
      return 'Aggiornato';
    } else {
      return 'Trascina per aggiornare';
    }
  }
}
