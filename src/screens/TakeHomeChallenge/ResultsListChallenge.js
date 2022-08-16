import React from "react";
import {View, Text, FlatList, Dimensions, StyleSheet} from "react-native";


const data = [{ key: 'A'}, { key: 'B'}, { key: 'C'}, { key: 'D'}, { key: 'E'}, { key: 'F'}, { key: 'G'}, { key: 'H'}, { key: 'I'}, { key: 'J'}];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true});
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return data;
}

const numColumns = 3;

export default class ResultList extends React.Component {
    renderItem = ({item, index}) => {
        if (item.empty == true) {
            return <View style={[styles.item, styles.itemInvisible]} />
        }
        return (
            <View style={styles.item} >
                <Text style={styles.itemText}>{item.key}</Text>
            </View>
        );
    };

    render() {
        return (
                <FlatList data={formatData(data, numColumns)} style={styles.container} renderItem={this.renderItem} numColumns={numColumns} />
            );
    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / numColumns,

    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    itemText: {
        color: '#fff'
    },
});

    // constructor (props) {
    //     super(props);

    //     this.state = {
    //         loading: false,
    //         data: [],
    //         page: 1,
    //         seed: 1,
    //         error: null,
    //         refreshing: false
    //     };
    // }

    // componentDidMount() {
    //     this.makeRemoteRequest();
    // }

    // //https://api.nasa.gov/planetary/apod?start_date=2022-08-01&end_date=2022-08-12&api_key=AddEttsg0VRFmHNcF1kkRJJ4daTbn85PiCIDK9Br
    // makeRemoteRequest = () => {
    //     const {page, seed } = this.state;
    //     const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    //     this.setState({loading: true});
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //         this.setState ({
    //             data: page == 1 ? res.results : [...this.state.date, ...res.results],
    //             error: res.error || null,
    //             loading: false,
    //             refreshing: false
    //         });
    //     })
    //     .catch(error => {
    //         this.setState({error, loading: false})
    //     });
    // };


    // render() {
    //     return(
    //         <List>
    //             <FlatList
    //                 date={this.state.data}
    //                 renderItem={({item}) => {
    //                     <ListItem
    //                         roundAvatar
    //                         title={`${item.name.first} ${item.name.last}`}
    //                         subtitle={item.email}
    //                         avatar={{uri: item.picture.thumnail}}
    //                     />
    //                 }}
    //                 keyExtractor={item => item.email}
    //             />
    //         </List>
    //     )
    // }

