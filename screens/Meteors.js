import React, { Component } from 'react';
import { Text, View,Alert } from 'react-native';
import axios from "axios";

export default class MeteorScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            metors:{}
        }
    }

    getMeteors=()=> {
         axios
         .get("https://api.nasa.gov/planetary/apod?api_key=HbHMqaUt9IVcT4sIJItGV5YfKo3l7Wq5FRiRBgSW")
         .then(response =>{
             this.setState({meteors:response.data.near_earth_objects})
         })
         .catch(error =>{
             Alert.alert(error.message)
         })
    }

    componentDidMount(){
        this.getMeteors();
    }
    render() {

        if(Object.keys(this.state.meteors).length === 0  ){
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Loading!</Text>
            </View>
        )
    } else{
        let meteor_arr=object.keys(this.state.meteors).map(meteor_date =>{
            return this.state.metors[meteor_date]
        })
        let meteors=[].concat.apply([],meteor_arr);
        
        meteors.forEach(function (element) { 
            let diameter =
         (element.estimated_diameter.kilometers.estimated_diameter_min +
         element.estimated_diameter.kilometers.estimated_diameter_max) / 2 
         let threatScore = (diameter /
         element.close_approach_data[0].miss_distance.kilometers) * 1000000000 
         element.threat_score = threatScore;
         });


        return(
        <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>MeteorScreen!</Text>
            </View>
            )
    }
}
}