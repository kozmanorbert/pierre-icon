import * as React from "react";
import { TextProps } from "react-native";

type pierreIconNames = "pierre-logo" | "library" | "air-exchange-auto" | "air-exchange-off" | "air-exchange-on" | "fan-auto" | "fan-off" | "fan-on" | "power-plug-auto" | "power-plug-off" | "power-plug-on" | "siren-auto" | "siren-off" | "siren-on" | "valve-auto" | "valve-off" | "valve-on" | "history" | "settings" | "running" | "arrow-up-filled" | "bell-filled" | "bulbs-filled" | "car-icon" | "clock-filled" | "disarmed-filled" | "water-sensor" | "light-sensor" | "edit-image" | "error-filled" | "irrigation-off-simple" | "lock" | "minus-filled" | "motion" | "phone-accept-filled" | "phone-decline-filled" | "place-filled" | "plus-filled" | "rfid-card" | "security" | "stopwatch-filled" | "tv-icon" | "opened-lock" | "user-checked" | "user-filled" | "users-filled" | "x-close" | "speaker-off" | "microphone-off" | "dashboard-filled" | "key-filled" | "camera-filled" | "settings1" | "door-window-sensor" | "door-window-sensor-off" | "grass" | "hand" | "animal" | "smile" | "sofa" | "bad" | "children" | "pool" | "cake" | "barbecue" | "terace" | "outdoor" | "blinds" | "add" | "remove" | "chevron-down" | "chevron-up" | "io" | "checkbox-checked-circle" | "alarm-off" | "alarm-on" | "arrow" | "back" | "bar" | "bin" | "blinds-down" | "blinds-up" | "bypass" | "calendar" | "camera-tab" | "checkbox-checked" | "checkbox" | "checkIcon" | "clock" | "close" | "coffee" | "connection-error" | "dining" | "dots" | "drag" | "dropdown" | "edit" | "eye-off" | "eye" | "fan-coil" | "floor-heating" | "full-screen" | "heart-alt" | "heart" | "intercom" | "leaf" | "lightbulb-auto" | "lightbulb-off" | "lightbulb-on" | "microphone" | "moon" | "movie" | "notification-icon" | "party" | "phone" | "places" | "profile" | "radio-checked" | "radio-unchecked" | "RFID" | "snow" | "speaker" | "sun" | "tablet" | "temperature" | "time" | "users" | "water" | "watering-auto" | "watering-off" | "watering-on" | "weekday-calendar";

export interface IconProps extends TextProps {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number;

  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
   */
  name: pierreIconNames;

  /**
   * Color of the icon
   *
   */
  color?: string;
}
type ImageSource = any;
class Icon extends React.Component<IconProps, any> {
  static getImageSource(
    name: string,
    size?: number,
    color?: string
  ): Promise<ImageSource>;
  static getImageSourceSync(
    name: string,
    size?: number,
    color?: string
  ): ImageSource;
  static getRawGlyphMap(): { [name: string]: number };
  static loadFont(file?: string): Promise<void>;
  static hasIcon(name: string): boolean;
}

export default class PierreIcon extends Icon {}
    