import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Dimensions, Image, TouchableOpacity } from 'react-native';

import {
    Body,
    Card,
    CardItem,
    Container,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Tab,
    Tabs,
    TabHeading,
    Text,
    Thumbnail,
    CheckBox
} from 'native-base';

import { getLooks } from '../services/dataService';

import { HeaderIcon } from '../sections/HeaderIcon';

const { height, width } = Dimensions.get('window');

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

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const lookId = navigation.getParam('id', 0);
        const look = getLooks().find((item) => lookId === item.id);

        this.state = {
            look,
            userSex: 0,
        }
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        await AsyncStorage.getItem('userSex', (err, userSex) => {
            this.setState({ userSex, });
        });

        console.log('LookDetails view got user sex: ' + this.state.userSex);
    };

    onGarmentCheck(id) {
        const { look } = this.state;
        const garment = look.items.find(item => id === item.id);

        garment.checked = !garment.checked;

        this.setState({ look });
    };
    
    render() {
        const { look } = this.state;

        return (
            <Container style={ styles.containerStyles }>
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
                                <List
                                    dataArray={ look.items }
                                    renderRow={(item) =>
                                        <ListItem
                                            thumbnail
                                            onPress={() => this.onGarmentCheck(item.id)}
                                            style={ styles.listItemStyles }
                                        >
                                            <Left>
                                                <Thumbnail square source={ item.img } />
                                            </Left>
                                            <Body>
                                                <Text>{ item.name }</Text>
                                            </Body>
                                            <Right>
                                                <CheckBox checked={ item.checked } />
                                            </Right>
                                        </ListItem>
                                    }
                                    keyExtractor={item => item.id.toString()} />
                            </CardItem>
                        </Card>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon type="FontAwesome5" name='file-image' /><Text>Image</Text></TabHeading> }>
                        <Card>
                            <CardItem cardBody>
                                <Image source={ look.img } style={ styles.lookImage } />
                            </CardItem>
                        </Card>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerStyles: {
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
    
    listItemStyles: {
        marginBottom: 3,
        marginTop: 3,
    },
    
    lookImage: {
        flex: 1,
        height: height,
        width: width,
    },
});
