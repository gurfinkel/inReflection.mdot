import React, { Component } from 'react';

import {
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    inject,
    observer,
} from 'mobx-react';

import {
    Card,
    CardItem,
    Container,
    Content,
    Icon,
    Tab,
    Tabs,
    TabHeading,
    Text,
} from 'native-base';

import { GarmentItem } from './GarmentItem';
import { HeaderIcon } from '../sections/HeaderIcon';

const { height, width } = Dimensions.get('window');

@inject('store') @observer
export class LookDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={ () => navigation.goBack() } style={ styles.headerLeftStyles }>
                    <HeaderIcon iconType={ 1 } />
                </TouchableOpacity>
            ),
            headerTitle: null,
            headerRight: null,
        }
    };

    render() {
        const { navigation } = this.props;
        const lookId = navigation.getParam('id', 0);
        let look = {};

        for (let i = 0; i < this.props.store.looks.length; ++i) {
            const x = this.props.store.looks[i];
            look = x.data.find(y => y.id === lookId);
            if (look) {
                break;
            }
        }
        
        return (
            <Container>
                <View style={ styles.container }>
                    <Content>
                        <Tabs>
                            <Tab heading={ <TabHeading><Icon type="FontAwesome5" name='file-alt' /><Text>Description</Text></TabHeading> }>
                                <Card>
                                    <CardItem header bordered>
                                        <Text style={ styles.textStyles }>{ look.name }</Text>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Text style={ styles.textStyles }>{ look.description }</Text>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Text style={ styles.textStyles }>{ look.recipe }</Text>
                                    </CardItem>
                                    <CardItem>
                                        <FlatList
                                            data={ look.ingredients }
                                            renderItem={({ item, index, section }) => <GarmentItem info={ item } />}
                                            keyExtractor={(item, index) => item + index}
                                        />
                                    </CardItem>
                                </Card>
                            </Tab>
                            <Tab heading={ <TabHeading><Icon type="FontAwesome5" name='file-image' /><Text>Image</Text></TabHeading> }>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={{ uri: 'data:image/png;base64,' + look.picture }} style={ styles.lookImage } />
                                    </CardItem>
                                </Card>
                            </Tab>
                        </Tabs>
                    </Content>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    
    headerLeftStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        height: '100%',
        width: '100%',
    },
    
    textStyles: {
        fontSize: 12,
        color: '#808080',
    },
    
    lookImage: {
        flex: 1,
        height: height,
        width: width,
    },
});
