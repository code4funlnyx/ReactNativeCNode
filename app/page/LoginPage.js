'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserLogic from '../logic/UserLogic';
import HomePage from './HomePage';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false,
            token: null
        }
    }

    validToken = () => {
        if(!this.state.token){
            return alert('token 不能为空')
        }
        // this.setState({
        //    disable: true
        // });

        // UserLogic.doValidToken(this.state.token)
        //     .catch((error) => {
        //         alert(error);
        //     })
        //     .then((res) => {
        //         alert(JSON.stringify(res));
        //     })
        //     .then(()=>{
        //         this.setState({
        //            disable: false
        //         });
        //
        //     })
        this.props.navigator.push({
            component: HomePage,
            passProps: {
                id: '111'
            }
        })
    };


    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{height:20,backgroundColor:'#80bd01'}}></View>
                <View style={{flexDirection:'row',backgroundColor:'#80bd01',height:50}}>
                    <View style={{width:50,alignItems:'center',justifyContent:'center'}}>
                        <Icon name="angle-left" size={24} color="#fff" />
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
                        placeholder='Access Token' value={this.state.token}
                        onChangeText={(token)=>{this.setState({token})}}
                    />

                    <View style={{marginTop:30}}>
                        <TouchableOpacity
                            style={[{height:38,borderRadius:5,
                        marginLeft:50, marginRight:50,
                        backgroundColor:'#80bd01',
                        alignItems:'center',justifyContent:'center',
                        },this.state.disable && {backgroundColor:'grey'}]}
                            onPress={this.validToken} disable={this.state.disable}
                        >
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
