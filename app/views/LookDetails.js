import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Body, Button, Card, CardItem, Container, Content, Icon, Left, List, ListItem, Right, Tab, Tabs, TabHeading, Text, Thumbnail } from 'native-base';

import { getLooks } from '../services/dataService';

import { HeaderIcon } from '../sections/HeaderIcon';

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
        const look = getLooks().find((item) => lookId === item.id);
        const ingredients = look.items.map((ingredient) => {
            return (
                <ListItem key={ ingredient.id } thumbnail>
                    <Left>
                        <Thumbnail square source={ ingredient.img } />
                    </Left>
                    <Right>
                        <Text style={ styles.textStyles }>{ ingredient.name }</Text>
                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                    </Right>
                </ListItem>
            )
        });
        
        return (
            <Container>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon type="FontAwesome5" name='file-alt' /><Text>Description</Text></TabHeading> }>
                        <Card>
                            <CardItem header bordered>
                                <Text style={ styles.textStyles }>{ look.name }</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Text style={ styles.textStyles }>{ look.description }</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={ styles.textStyles }>{ look.recipe }</Text>
                            </CardItem>
                            <CardItem>
                                <List>
                                    { ingredients }
                                </List>
                            </CardItem>
                        </Card>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon type="FontAwesome5" name='file-image' /><Text>Image</Text></TabHeading> }>
                        <Image
                            style={ styles.lookImage }
                            source={ look.img }
                        />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
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
        height: undefined,
        width: undefined,
    },
});
