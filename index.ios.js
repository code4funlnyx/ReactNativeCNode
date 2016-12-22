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
import LoginPage from './app/page/LoginPage';
import HomePage from './app/page/HomePage';

export default class ReactNativeCNode extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: '登录', component:HomePage }}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeCNode', () => ReactNativeCNode);
