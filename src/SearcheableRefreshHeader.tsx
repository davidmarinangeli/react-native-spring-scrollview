import React from 'react';
import { Text, View } from 'react-native';
import RefreshHeader, { IHeaderProps, IHeaderState } from 'react-native-spring-scrollview/RefreshHeader';
import { CloudLoader } from '../CloudLoader';

export type HeaderStatus =
  | 'waiting'
  | 'pulling'
  | 'pullingEnough'
  | 'pullingCancel'
  | 'refreshing'
  | 'cancelRefresh'
  | 'rebound';

export default class SearcheableRefreshHeader extends RefreshHeader<IHeaderProps, IHeaderState> {

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

  private getTitle() {
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
