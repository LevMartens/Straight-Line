import React, { useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { getTheme } from "../../theme/themes";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { getPositionOnce } from "../../../resources/operating_system/get-position-once";
import { getLineMarkers } from "../../../domain/use_cases/get-line-markers";
import { useSelector } from "react-redux";
import {
  selectPublicLine,
  resetSelectedPublicLine,
  mapIsLoadedUpdate,
  exploreMapViewRefUpdate,
  exploreMapHeadingUpdate,
} from "../../state_management/actions/actions";
import store from "../../state_management/store/store";
import MarkerSvgComponent from "../_re-useables/svg_components/marker-svg";
import { uniqueId } from "lodash";
import MarkerEndSvgComponent from "../_re-useables/svg_components/marker-end-svg";

export default function MapViewExplore() {
  const { mapView, activityIndicator, activityIndicatorView } = styles();

  useEffect(() => {
    store.dispatch(resetSelectedPublicLine());
    getPositionOnce(); //TODO this function bypasses use_cases
  }, []);

  const mapType = useSelector((state) => state.exploreMapTypeHandler);

  const { publicLines, selectedPublicLine } = useSelector(
    (state) => state.lineDataHandler
  );

  const { aSingleCurrentPosition } = useSelector(
    (state) => state.locationHandler
  );

  const initialCamera = {
    center: aSingleCurrentPosition,
    pitch: 2,
    heading: 0.0,
    altitude: 200000,
    zoom: 40,
  };

  let mapViewRef;

  const positionHasChanged = async function (currentRegion) {
    getLineMarkers(currentRegion);
  };

  return aSingleCurrentPosition.isLoaded === true ? (
    <MapView
      ref={async (ref) => {
        mapViewRef = ref;
        store.dispatch(exploreMapViewRefUpdate(mapViewRef));
      }}
      onRegionChange={async () => {
        const mapHeading = await mapViewRef.getCamera();
        store.dispatch(exploreMapHeadingUpdate(mapHeading.heading));
      }}
      showsUserLocation={true}
      onMapReady={() => {
        store.dispatch(mapIsLoadedUpdate(true));
      }}
      mapType={mapType}
      liteMode={true}
      showsCompass={false}
      style={mapView}
      onRegionChangeComplete={(region) => {
        positionHasChanged(region);
      }}
      initialCamera={initialCamera}
    >
      {publicLines.map((marker) => {
        const { id, isLoaded, markerCoordinates, markerRegion } = marker;

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
                mapViewRef.animateToRegion(markerRegion, 1000);
                store.dispatch(selectPublicLine(marker));
              }}
            >
              <MarkerSvgComponent
                height={id === selectedPublicLine.id ? 40 : 30}
                width={id === selectedPublicLine.id ? 40 : 30}
              ></MarkerSvgComponent>
            </Marker>
          );
        }
      })}
      {selectedPublicLine.isLoaded && (
        <Polyline
          strokeColor={"white"}
          strokeWidth={4}
          coordinates={[
            {
              latitude: selectedPublicLine.rawLineData.startingCoordinates.lat,
              longitude: selectedPublicLine.rawLineData.startingCoordinates.lng,
            },
            {
              latitude: selectedPublicLine.rawLineData.finishCoordinates.lat,
              longitude: selectedPublicLine.rawLineData.finishCoordinates.lng,
            },
          ]}
        />
      )}
      {selectedPublicLine.isLoaded && (
        <Marker
          key={uniqueId()}
          centerOffset={{ x: 0.2, y: -12 }}
          coordinate={{
            latitude: selectedPublicLine.rawLineData.finishCoordinates.lat,
            longitude: selectedPublicLine.rawLineData.finishCoordinates.lng,
          }}
        >
          <MarkerEndSvgComponent height={30} width={30}></MarkerEndSvgComponent>
        </Marker>
      )}
    </MapView>
  ) : (
    <View style={activityIndicatorView}>
      <ActivityIndicator
        animating={true}
        color={activityIndicator}
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
    mapView: {
      zIndex: 3,
      ...StyleSheet.absoluteFillObject,
    },
  });
};
