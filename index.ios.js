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
import RootPage from './app/page/RootPage';

export default class ReactNativeCNode extends Component {
    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{ title: 'root', component:RootPage }}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeCNode', () => ReactNativeCNode);
