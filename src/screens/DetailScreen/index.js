import React from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DetailScreen extends React.Component { 

    render() {
        return (
            // Container
            <View style={{
                backgroundColor: '#ddd',
                flex: 1
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Image */}
                    <View style={{
                        backgroundColor: '#38383b',
                        height: 200
                    }}>
                        <Image source={require('../../assets/dummy/kost-satu.jpg')} style={{flex: 1, width: undefined, height: undefined, resizeMode: 'cover'}} />
                    </View>

                    {/* Menu Options */}
                    <View style={{
                        backgroundColor: '#1d1f1d',
                        height: 60,
                        flexDirection: 'row',
                    }}>
                        <TouchableHighlight style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                            <View style={{
                                padding: 5, 
                                flexDirection: 'row', 
                                marginRight: 5
                            }}>
                                <View style={{backgroundColor: '#ddd', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: '#0e1df0', borderWidth: .4}}>
                                    <Icon name='image' size={15} color='#0e1df0' />
                                </View>
                                <Text style={{color:'#0e1df0', fontSize: 14, fontWeight: '600', marginHorizontal: 12, paddingVertical: 6}}>Foto</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                            <View style={{padding: 5, flexDirection: 'row', marginRight: 5}}>
                                <View style={{backgroundColor: '#ddd', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 150/4, borderColor: '#fff', borderWidth: .4}}>
                                    <Icon name='map-marker-alt' size={15} color='#000' />
                                </View>
                                <Text style={{color:'#fff', fontSize: 14, fontWeight: '400', marginHorizontal: 12, paddingVertical: 6}}>Peta</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    
                    {/* Category & Stock */}
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 17,
                        paddingTop: 6
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#0e1df0',
                            fontWeight: '300',
                            marginRight: 18,
                        }}>
                            Putri
                        </Text>

                        <Text style={{
                            fontSize: 16,
                            color: '#0e1df0',
                            fontWeight: '600',
                            marginRight: 18,
                        }}>
                            Tinggal 1 Kamar
                        </Text>
                    </View>

                    {/* Title & Date Updated */}
                    <View style={{
                        marginHorizontal: 17,
                        paddingVertical: 6,
                        borderBottomColor: '#b0b0b0',
                        borderBottomWidth: 0.7
                    }}>
                        {/* Title */}
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#000',
                            width: '75%'
                        }}>
                            Kost AnaRooms Nyaman Tidur Mimpi Indah
                        </Text>

                        {/* Date Updated */}
                        <Text style={{
                            paddingVertical: 6
                        }}>
                            Update 12 August 2019 at 14.00
                        </Text>
                    </View>

                    {/* Notes */}
                    <View style={{
                        marginHorizontal: 17,
                        paddingVertical: 14,
                        borderBottomColor: '#b0b0b0',
                        borderBottomWidth: 0.7,
                        flexDirection: 'row'
                    }}>
                        <Text style={{ marginRight: 12} }>
                            <Icon name='circle' color='#000' /> Tidak termasuk listrik
                        </Text>

                        <Text style={{ marginRight: 12} }>
                            <Icon name='circle' color='#000' /> Tidak ada min. bayar
                        </Text>
                    </View>

                    {/* Luas & Fasilitas */}
                    <View style={{
                        marginHorizontal: 17,
                        paddingVertical: 10,
                        borderBottomColor: '#b0b0b0',
                        borderBottomWidth: 0.7,
                    }}>
                        {/* Luas */}
                        <View>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#000',
                                fontSize: 14,
                            }}>
                                Luas Kamar
                            </Text>

                            <View style={{ marginVertical: 10, flexDirection: 'row',alignItems: 'center'}}>
                                <Icon name='expand-arrows-alt' size={30} />
                                <Text style={{ marginHorizontal: 8}}>5x3 meter</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent:'space-between', marginVertical: 4}}>
                            <Text style={{color: '#1c1c1c', fontWeight: 'bold'}}>
                                Fasilitas kost dan kamar
                            </Text>
                            <TouchableHighlight>
                                <Text style={{color: '#cf0e04'}}>Lihat Semua</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </ScrollView>
            
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 8,
                    height: 80,
                    marginHorizontal: 4,
                    marginTop: 8,
                }}>

                </View>
            
            </View>
        )
    }
}