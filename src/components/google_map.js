import React, {Component} from 'react';


class GoogleMap extends Component {

    render() {
        //create a direct reference to this.refs.map
        return <div ref="map"></div>;
    }

    //Lifecycle method
    //Called after the component has been rendered to the screen
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

}

export default GoogleMap;
