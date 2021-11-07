import React from "react";
import CloudySvgComponent from "../../presentation/components/_re-useables/svg_components/weather/cloudy-svg";
import HeavyRainSvgComponent from "../../presentation/components/_re-useables/svg_components/weather/heavy-rain-svg";
import LightRainSvgComponent from "../../presentation/components/_re-useables/svg_components/weather/light-rain-svg";
import MistSvgComponent from "../../presentation/components/_re-useables/svg_components/weather/mist-svg";
import PartlyCloudySvgComponent from "../../presentation/components/_re-useables/svg_components/weather/partly-cloudy-svg";
import SnowSvgComponent from "../../presentation/components/_re-useables/svg_components/weather/snow-svg";
import StormSvgComponent from "../../presentation/components/_re-useables/svg_components/weather/storm-svg";
import SunnySvgComponent from "../../presentation/components/_re-useables/svg_components/weather/sunny-svg";

export async function getZoomLevelRules(zoomLevel) {
  if (zoomLevel >= 11.5) {
    return {
      jumps: 3,
      zoomedOutToFar: false,
    };
  }
  if (zoomLevel < 11.5 && zoomLevel >= 11) {
    return {
      jumps: 4,
      zoomedOutToFar: false,
    };
  }
  if (zoomLevel < 11 && zoomLevel >= 10.4) {
    return {
      jumps: 10,
      zoomedOutToFar: false,
    };
  }
  if (zoomLevel < 10.4 && zoomLevel >= 9.5) {
    return {
      jumps: 20,
      zoomedOutToFar: false,
    };
  }
  if (zoomLevel < 9.5) {
    return {
      jumps: 30,
      zoomedOutToFar: true,
    };
  }
}

export async function userCloseEnoughToBegin(distance) {
  if (distance < 5) {
    return true;
  }
  if (distance >= 5) {
    return false;
  }
}

export async function getWeatherIcon(id) {
  if (id === 803 || id === 804) {
    return <CloudySvgComponent></CloudySvgComponent>;
  }
  if (id === 801 || id === 802) {
    return <PartlyCloudySvgComponent></PartlyCloudySvgComponent>;
  }
  if (id >= 502 && id <= 531) {
    return <HeavyRainSvgComponent></HeavyRainSvgComponent>;
  }
  if (id === 800) {
    return <SunnySvgComponent></SunnySvgComponent>;
  }
  if (id >= 701 && id <= 781) {
    return <MistSvgComponent></MistSvgComponent>;
  }
  if (id >= 600 && id <= 622) {
    return <SnowSvgComponent></SnowSvgComponent>;
  }
  if (id === 500 || id === 501) {
    return <LightRainSvgComponent></LightRainSvgComponent>;
  }
  if (id >= 300 && id <= 321) {
    return <LightRainSvgComponent></LightRainSvgComponent>;
  }
  if (id >= 200 && id <= 232) {
    return <StormSvgComponent></StormSvgComponent>;
  }

  return <PartlyCloudySvgComponent></PartlyCloudySvgComponent>;
}
