'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false,
            token: null
        }
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{flexDirection:'row',backgroundColor:'#80bd01',marginTop:20,height:50}}>
                    <View style={{width:50,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:12}}>
                            返回
                        </Text>
                    </View>
                    <View style={{flex: 1,justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:16,textAlign:'center'}}>登录</Text>
                    </View>
                    <View style={{width:50,alignItems:'center',justifyContent:'center'}}>

                    </View>
                </View>

                <View style={{flex: 1,justifyContent:'center'}}>
                    <TextInput
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        numberOfLines={1}
                        autoFocus={true}
                        secureTextEntry={true}
                        style={{
                        height:40,fontSize:14,
                        marginTop:-150,
                        marginLeft:50, marginRight:50,
                        borderWidth :1,borderRadius:5,borderColor :'#eee',
                        paddingLeft:10,paddingRight:10,
                        }}
                        placeholder='Access Token' value={this.state.token}/>

                    <View style={{marginTop:30}}>
                        <TouchableOpacity
                            style={{height:38,borderRadius:5,
                        marginLeft:50, marginRight:50,
                        backgroundColor:'#80bd01',
                        alignItems:'center',justifyContent:'center',
                        }}>
                            <Text style={{color:'white',fontSize:14}}>
                                登录
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

}
