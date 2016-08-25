/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

'use strict';

import React from 'react';
import { StyleSheet, View, ListView, Text, TouchableOpacity } from 'react-native';

export default class CategoryList extends React.Component {

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.categories),
        };
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <View>
                <Text>{rowId}</Text>
            </View>
        );
    }

    _pressRow(rowId){
        alert("hellow"+rowId);
    }

    render() {
        return (
            <TouchableOpacity onPress={(rowId) => this._pressRow(rowId)}>
                <View style={styles.container}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eef0f3',
        width: 80,
    },
    category:{
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
    },
    category_bg_select:{
        backgroundColor:'#d7ead6',
    },
    category_bg_normal:{
        backgroundColor:'#ffffff',
    },
    line:{
        backgroundColor:'#eef0f3',
        height:1,
    },
})