/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';
import login from './app/login';

export default class ReactNativeCNode extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: '登录', component:login }}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeCNode', () => ReactNativeCNode);
