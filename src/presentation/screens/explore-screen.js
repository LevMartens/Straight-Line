import React from "react";
import { StyleSheet, View } from "react-native";
import MapViewExplore from "../components/mapviews/map-view-explore";
import { useSelector } from "react-redux";
import Banner from "../components/explore_screen_components/es-banner";
import { getTheme } from "../theme/themes";
import SwipeModal from "../components/explore_screen_components/es-swipe-modal";
import SearchView from "../components/explore_screen_components/es-search-view";
import ExploreMapMenu from "../components/explore_screen_components/es-explore-map-menu";
import LoadingMapIndicator from "../components/explore_screen_components/es-loading-map-indicator";
import SwipeModalContent from "../components/explore_screen_components/es-swipe-modal-content";
import SwipeModalLoading from "../components/explore_screen_components/es-swipe-modal-loading";

export default function Explore({ navigation }) {
  const { containerStyle } = styles();

  const mapIsLoaded = useSelector((state) => state.mapIsLoadedHandler);
  const { visible, message } = useSelector((state) => state.bannerHandler);
  const searchVisible = useSelector((state) => state.searchVisibleHandler);
  const menuVisible = useSelector((state) => state.menuVisibleHandler);
  const { isLoaded: linesAreLoaded } = useSelector(
    (state) => state.selectedMarkerHandler
  );

  return (
    <View style={containerStyle}>
      {!mapIsLoaded && <LoadingMapIndicator></LoadingMapIndicator>}
      <SwipeModal>
        {linesAreLoaded && <SwipeModalContent></SwipeModalContent>}
        {mapIsLoaded && !linesAreLoaded && (
          <SwipeModalLoading></SwipeModalLoading>
        )}
      </SwipeModal>
      {menuVisible && (
        <ExploreMapMenu
          compassOnPress={() => {}}
          layersOnPress={() => {}}
          myLocationOnPress={() => {}}
        ></ExploreMapMenu>
      )}
      <MapViewExplore></MapViewExplore>
      {searchVisible && <SearchView searchVisible={searchVisible}></SearchView>}
      <Banner visible={visible} bannerText={message}></Banner>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    containerStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
  });
};
