import React, { useEffect, useRef } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { getTheme } from "../../theme/themes";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { getPositionOnce } from "../../../domain/resources/environment/get-position-once";
import { getLineMarkers } from "../../../domain/use_cases/get-line-markers";
import { useSelector } from "react-redux";
import {
  selectMarker,
  resetMarker,
} from "../../state-management/actions/actions";
import store from "../../state-management/store/store";
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from "../../../domain/resources/environment/dimensions";
import MarkerSvgComponent from "../svg-components/marker-svg";

export default function MapViewExplore() {
  useEffect(() => {
    store.dispatch(resetMarker());
    getPositionOnce(); //TODO this function bypasses use_cases
  }, []);

  const markerCurrentlySelected = useSelector(
    (state) => state.selectedMarkerHandler
  );

  const lineMarkers = useSelector((state) => state.lineMarkersHandler);
  const aSingleCurrentPosition = useSelector(
    (state) => state.aSingleCurrentPosition
  );
  const themedStyles = styles();
  const initialRegion = {
    latitude: aSingleCurrentPosition.latitude,
    longitude: aSingleCurrentPosition.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  let mapView;

  const positionHasChanged = async function (currentRegion) {
    getLineMarkers(currentRegion);
  };

  return aSingleCurrentPosition.isLoaded === true ? (
    <MapView
      ref={(ref) => (mapView = ref)}
      showsUserLocation={true}
      liteMode={true}
      style={themedStyles.mapView}
      onRegionChangeComplete={(region) => {
        positionHasChanged(region);
      }}
      initialRegion={initialRegion}
    >
      {lineMarkers.map((marker) => {
        const {
          id,
          isLoaded,
          markerCoordinates,
          markerRegion,
          image,
          imageSelected,
        } = marker;

        if (isLoaded === true) {
          return (
            <Marker
              key={id}
              coordinate={markerCoordinates}
              centerOffset={
                id === markerCurrentlySelected.id
                  ? { x: 0.2, y: -15 }
                  : { x: 0, y: 0 }
              }
              onPress={() => {
                mapView.animateToRegion(markerRegion, 1000);
                store.dispatch(selectMarker(marker));
              }}
            >
              <MarkerSvgComponent
                height={id === markerCurrentlySelected.id ? 40 : 30}
                width={id === markerCurrentlySelected.id ? 40 : 30}
              ></MarkerSvgComponent>
            </Marker>
          );
        }
      })}
      {markerCurrentlySelected.isLoaded && (
        <Polyline
          strokeColor={"white"}
          strokeWidth={4}
          coordinates={[
            {
              latitude:
                markerCurrentlySelected.rawLineData.startingCoordinates.lat,
              longitude:
                markerCurrentlySelected.rawLineData.startingCoordinates.lng,
            },
            {
              latitude: -37.840935,
              longitude: 144.946457,
            },
          ]}
        />
      )}
    </MapView>
  ) : (
    <View style={themedStyles.activityIndicatorView}>
      <ActivityIndicator
        animating={true}
        color={themedStyles.activityIndicator}
        size={"large"}
      />
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    activityIndicator: {
      color: theme.buttonColor,
    },
    activityIndicatorView: {
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.primaryColor,
    },
    lineMarkerImageLayout: {
      width: 40,
      height: 40,
    },
    mapView: {
      ...StyleSheet.absoluteFillObject,
    },
  });
};
