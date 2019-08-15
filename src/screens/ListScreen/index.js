import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import HeaderBar from '../../components/HeaderBar';

export default class ListScreen extends Component {

    constructor() {
        super()
        this.state = {
            tabs : 2,
            bgTabs1 : '#c22121',
            bgTabs2 : '#fff',
            colorTabs1 : '#000',
            colorTabs2 : '#fff',
        }
    }

    handleButton = (props) => {
        if(props===1) {
            this.setState({
                tabs: props,
                bgTabs1 : '#fff',
                bgTabs2: '#c22121',
                colorTabs1 : '#fff',
                colorTabs2 : '#000',
            })
        } else {
            this.setState({
                tabs: props,
                bgTabs1: '#c22121',
                bgTabs2 : '#fff',
                colorTabs1 : '#000',
                colorTabs2 : '#fff',
            })
        }
    }

    render() {

        const Tabs = this.state.tabs;

        if(Tabs === 1) {
            return (
                <View>
                    <HeaderBar />
                    {/* Tab Menu */}
                    <View style={{
                        height: 60,
                        flexDirection: 'row',
                    }}>
                        <TouchableHighlight onPress={() => this.handleButton(1)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs2
                        }}>
                            <Text style={{color : this.state.colorTabs1, fontSize: 18, fontWeight: 'bold'}}>Maps</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleButton(2)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs1
                        }}>
                            <Text style={{color : this.state.colorTabs2, fontSize: 18, fontWeight: 'bold'}}>List Kost</Text>
                        </TouchableHighlight>
                    </View>

                    <View>
                        <Text>Tab 1</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <HeaderBar />
                    {/* Tab Menu */}
                    <View style={{
                        height: 60,
                        flexDirection: 'row',
                    }}>
                        <TouchableHighlight onPress={() => this.handleButton(1)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs2
                        }}>
                            <Text style={{color : this.state.colorTabs1, fontSize: 18, fontWeight: 'bold'}}>Maps</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleButton(2)} style={{
                            flex: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.bgTabs1
                        }}>
                            <Text style={{color : this.state.colorTabs2, fontSize: 18, fontWeight: 'bold'}}>List Kost</Text>
                        </TouchableHighlight>
                    </View>

                    <View>
                        <Text>Tab 2</Text>
                    </View>
                </View>
            )
        }
    }
}

