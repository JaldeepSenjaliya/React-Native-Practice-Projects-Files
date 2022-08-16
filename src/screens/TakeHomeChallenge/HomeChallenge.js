import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image, 
  FlatList, Dimensions
} from "react-native";
import axios from "axios";


 let {width: screenWidth, height: screenHeight} = Dimensions.get('window')

const Home = ({navigation}) => {

  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  const searchResults = () => {

    if ((startDate === '') || (endDate === '')) {
        alert("Start date or end date is empty");

    } else if (startDate > endDate) {
        alert("Start date should be less than or equal to end date.")

    } else {
        const url = `https://api.nasa.gov/planetary/apod?start_date=${
      startDate
    }&end_date=${
      endDate}&api_key=AddEttsg0VRFmHNcF1kkRJJ4daTbn85PiCIDK9Br`;

        axios
          .get(url)
          .then((res) => {
            console.log(res.data[0].url);
            setData(res.data);
          })
          .catch((err) => console.log(err));
    }
    
  
  };

  const renderImages = item => {
    return (
        <TouchableOpacity style={{flex: 1, alignItems: 'left'}} onPress={() => navigation.navigate("Picture Details", {data:item})}>
            <Image source={{uri: item.item.url}} style={styles.imageStyle} ></Image>
        </TouchableOpacity>
    )
  }

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Text style={styles.headingText}>Picture of the day:</Text>
      <Text style={styles.subHeadingText}>
        Search for Astronomy: Picture of the day by date.
      </Text>
      <TextInput
        style={styles.textInputs}
        placeholder="  Start date (DD-MM-YYYY)"
        onChangeText={(val) => setStartDate(val.split('-').reverse().join('-'))}
      />
      <Text>{startDate}</Text>
      <TextInput
        style={styles.textInputs}
        placeholder="  End date (DD-MM-YYYY)"
        onChangeText={(val) => setEndDate(val.split('-').reverse().join('-'))}
      />
      <Text>{endDate}</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => searchResults()}>
        <Text>Search</Text>
      </TouchableOpacity>

      <Text style={styles.resultsText}>Results ({data.length}):</Text>
      {data.length === 0 ? (
        <Text style={styles.warningText}>
          No results found. Enter a start and end date.
        </Text>
      ) : (
        <FlatList horizontal={false} 
                  numColumns={3} 
                  data={data}
                  keyExtractor={(item, index) => index.toString()} 
                  renderItem={renderImages} />
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginTop: 30,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  subHeadingText: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "normal",
    fontSize: 15,
  },
  textInputs: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 60,
    borderRadius: 10,
    alignSelf: "stretch",
    fontSize: 20,
    backgroundColor: "#f6f9fc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f9fc",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    alignSelf: "stretch",
    borderRadius: 8,
    borderWidth: 2,
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    backgroundColor: "#fff"
  },
  imageStyle: {
    height: 130,
    width: 130,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  resultsText: {
    marginTop: 40,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  warningText: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "normal",
    fontSize: 15,
  },
});

export default Home;



// (
//     <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'left', flexDirection: 'row', marginTop: 20 }}>
//       {data.map((comp) => (
//         <TouchableOpacity  key={comp.date}>
//         <Image
//           source={{ uri: comp.url }}
//           style={styles.imageStyle}
//         />
//         </TouchableOpacity>
       
//       ))}
//     </ScrollView>
//   )
