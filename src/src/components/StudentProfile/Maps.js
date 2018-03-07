import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import {API_KEY} from "../../utils/constants";

export class Maps extends Component {
    state = {
        showMap: false,
        position: {
            lat: '-33.890542',
            lng: '151.274856'
        }
    };

    //LifecycleMethods
    componentDidMount() {
        if (!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                this.props.markers.push({
                    title: 'position',
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                });
                this.setState({
                    showMap: true,
                    position: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                }
            })});
        }

        if (this.props.initialCenter) {
            const {
                initialCenter: { lat, lng }
            } = this.props;
            this.setState({
                position: {
                    lat: lat,
                    lng: lng
                }
            })
        }
    };

    //Actions
    fetchPlaces = ({ google }, map) => {
    };

    //Renders
    markersOnMap = () => {
        const markers = this.props.markers;

        return markers.map((item, index) => {

            return(
                <Marker
                    key={"marker_" + index}
                    title={item.title}
                    name={item.title}
                    position={{
                        lat: item.latitude,
                        lng: item.longitude
                    }}
            />
         )})
    };

    render() {

        return (
            <div>
            {this.state.showMap &&
                <Map
                    onReady={this.fetchPlaces}
                    google={this.props.google}
                    zoom={7}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }}
                    initialCenter={this.state.position}
                >
                    {this.markersOnMap()}
                </Map>
            }
            </div>
        )
    }
}

Maps.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    markers: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    initialCenter: PropTypes.objectOf({
        lat: PropTypes.string,
        lng: PropTypes.string
    }),
    type: PropTypes.string,
    getPositionOnMap: PropTypes.func
};

export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(Maps)