const icoMoonConfig = require("./selection.json");
const fs = require("fs");
const parseTypes = icoMoonConfig.icons
  .map((icon, index, src) => {
    return `"${icon.properties.name}"`;
  })
  .join(" | ");

const changeFile = () => {
  let result = `import * as React from "react";
import { TextProps } from "react-native";

type pierreIconNames = ${parseTypes};

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
    `;

  fs.writeFile("./index.d.ts", result, "utf8", function (err) {
    if (err) return console.log(err);
  });
};

changeFile();
