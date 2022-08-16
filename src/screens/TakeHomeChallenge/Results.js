import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from "axios";

const Results = (props) => {

    const nasaURL = "https://api.nasa.gov/planetary/apod?start_date=2022-08-01&end_date=2022-08-12&api_key=AddEttsg0VRFmHNcF1kkRJJ4daTbn85PiCIDK9Br"

    
    const [data, setData] = useState([]);

    //Fetching our data:
    useEffect(() => {
        axios.get(nasaURL).then(res=> {console.log(res.data[1].url);return setData(res.data)}).catch(err=>console.log(err));
    },[]);

    return (
    <View>
        <Text style={styles.resultsText} >Results ({data.length}):</Text>
        {
            data.length ===  0 ? 
            <Text style={styles.warningText} >No results found. Enter a start and end date.</Text> : 
            <View style={styles.container}>
            {data.map((comp)=> <Image key={comp.date} source={{uri:comp.url}} style={styles.imageStyle} />)}
            </View>
        }
    </View>           
    );
};      

const styles = StyleSheet.create({
   container : {
    marginTop: 20,
    flexDirection: "row",
    alignItems: 'left',
   },
   imageStyle: {
    height:130, 
    width:130, 
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
    fontSize: 15
  },
  });

  export default Results;