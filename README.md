# pierre-icons

## Installation

1. Install react-native-vector-icons. _Note: Only run `$ pod install`. You don't have to follow the native implementation for android.
2. For each platform (iOS/Android/Windows) you plan to use, follow one of the options for the corresponding platform.
3. If you intend to use FontAwesome 5, check out [`this guide`](FONTAWESOME5.md) to get you started.
4. Once you've done with both installs run `$ react-native link`
### iOS


### Android

#### Option: With Gradle (recommended)

This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:

```gradle
apply from: "../../node_modules/pierre-icons/fonts.gradle"
```



## Update

When you want to update/extend the icon-set you need to follow these steps:
1. git clone /git pull 
2. go to https://icomoon.io/app/#/select . Then in the top left corner press `Import Icons`.
  Once you've imported	**all** the icons, switch the bottom tab to `Generate Font` and then on the same button press `Download`.
3. You will get a .zip file. Extract it then copy the .ttf to `./Fonts/` folder, override `./selection.json` with the new one, 
  and open `index.d.ts` and add the name of the newly added icons to `arrayOfNames`.
4. Now open package.json and update the version! Example : "version": "0.2.5", => "version": "0.2.6",
4. Save the changes, push the new commit and that is.

## `Icon` Component

You can either use one of the bundled icons above or roll your own custom font.

```js
import PierreIcon from 'pierre-icons';
const myIcon = <PierreIcon name="calendar" size={30} color="#900" />;
```

### Properties

Any [Text property](https://reactnative.dev/docs/text.html) and the following:

| Prop        | Description                                                             | Default     |
| ----------- | ----------------------------------------------------------------------- | ----------- |
| **`size`**  | Size of the icon, can also be passed as `fontSize` in the style object. | `12`        |
| **`name`**  | What icon to show, see Icon Explorer app or one of the links above.     | _None_      |
| **`color`** | Color of the icon.                                                      | _Inherited_ |

### Static Methods

| Prop                     | Description                                                                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`getFontFamily`**      | Returns the font family that is currently used to retrieve icons as text. Usage: `const fontFamily = Icon.getFontFamily()`                                                                |
| **`getImageSource`**     | Returns a promise that resolving to the source of a bitmap version of the icon for use with `Image` component et al. Usage: `const source = await Icon.getImageSource(name, size, color)` |
| **`getImageSourceSync`** | Same as `getImageSource` but synchronous. Usage: `const source = Icon.getImageSourceSync(name, size, color)`                                                                              |
| **`getRawGlyphMap`**     | Returns the raw glyph map of the icon set. Usage: `const glyphMap = Icon.getRawGlyphMap()`                                                                                                |
| **`hasIcon`**            | Checks if the name is valid in current icon set. Usage: `const isNameValid = Icon.hasIcon(name)`                                                                                          |

### Styling

Since `Icon` builds on top of the `Text` component, most [style properties](https://reactnative.dev/docs/style.html) will work as expected, you might find it useful to play around with these:

- `backgroundColor`
- `borderWidth`
- `borderColor`
- `borderRadius`
- `padding`
- `margin`
- `color`
- `fontSize`

NOTE: On android `Text` doesn't currently support `border*` styles, to circumvent this simply wrap your `Icon` with a `View`.

By combining some of these you can create for example :

![type](https://cloud.githubusercontent.com/assets/378279/7667570/33817554-fc0d-11e4-9ad7-4eb60139cfb7.png)
![star](https://cloud.githubusercontent.com/assets/378279/7667569/3010dd7e-fc0d-11e4-9696-cb721fe8e98d.png)


#### iOS

You have to manually make a reference of your `.ttf` on your xcodeproj `Resources` folder and in `Info.plist`.

## Animation

React Native comes with an amazing animation library called [`Animated`](https://reactnative.dev/docs/animated.html). To use it with an icon, simply create an animated component with this line: `const AnimatedIcon = Animated.createAnimatedComponent(Icon)`. You can also use the higher level animation library [react-native-animatable](https://github.com/oblador/react-native-animatable).




## Troubleshooting

#### The icons show up as a crossed out box on Android

- Make sure you've copied the font to `android/app/src/main/assets/fonts`.
- Delete the build folder with `rm -rf android/app/build`.
- Recompile the project.

#### Red screen with "Unrecognized font family" error on iOS

- Make sure you've added manually the reference of your `.ttf` on your xcodeproj `Resources` folder.
- Check that the font you are trying to use appears in `Info.plist`, if you've added the whole folder and it's blue in color, then you need to add it to the path.
- Check that the font is copied in the _Copy Bundle Resources_ in _Build Phases_.
- Delete the build folder with `rm -rf ios/build`
- Recompile the project.

#### Android build fails on Windows for no good reason

Both npm and android file hierarchies tend to get very deep and even worse when you combine them. Since Windows file system has a max length, long file name addresses will result in numerous errors including `Execution failed for task ':react-native-vector-icons:processReleaseResources'`. So try to keep the path to your project folder as short as possible.