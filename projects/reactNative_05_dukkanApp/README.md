# Project Name : reactNative_05_dukkanApp
## Projects Gifs
![dukkanApp_gif](https://media.giphy.com/media/w3neZ6ZzZdKk7Jcc1i/giphy.gif)
![dukkanApp_gif](https://media.giphy.com/media/fpAA4F4A9Bq3pk7Sdn/giphy.gif)
## Project Images
![](./media/login_page_yup.png) ![](./media/login_page_formik_yup_validation.png)
![](./media/dukkanApp_image_1.png)
![](./media/dukkanApp_image_2.png)
## [Project Video Link](https://github.com/tceyhan/react-native-all/issues/1#issue-1428227837)
## Used skills
- Custom hooks created named useFetch
- useState, useEffect
- fetch data from API with *axios*
- *ActivityIndicator* for loading while data fetching, and then used [lottie animation package](https://lottiefiles.com/search?q=loading&category=animations&type=free) used
- destructred method for styles objects

## Used styles and component
- FlatList component
- resizeMode used in Image component
- Dimensions used in Image component style
- [lottie package for animation](https://www.npmjs.com/package/lottie-react-native)
- headerTintColor, headerStyle,headerTitleStyle,headerTitleAlign properties used in Stack.Screen options object

### project start and required Settings

1. npx react-native init dukkanApp
2. cd dukkanApp
3. open terminal on VSCode and "npm start"
4. open another terminal and "npm run android"
* for Routing in react native projects
5. ```npm install @react-navigation/native```
6. ```npm install react-native-screens react-native-safe-area-context```
7. **react-native-screens** package requires one additional configuration step to properly work on Android devices. Edit **MainActivity.java** file which is located in *android/app/src/main/java/<your package name>/MainActivity.java.*
Add the following code to the body of MainActivity class:
```
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```
8. Same file (MainActivity.java) top the section imports we can add ```import android.os.Bundle;```
9. open terminal and ```npm install @react-navigation/native-stack```
10. App.js (this project name as Router.js) inside and added imports:
```
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/pages/Products;
import Products from './src/pages/Details;
import Login from './src/pages/Login;
```
11.
```
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="ProductsPage" component={Products} />
        <Stack.Screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
:) finally project ready..

12. ``` npm i react-native-config ```
Create a new file .env in the root of your React Native app:
```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```
Then access variables defined there from your app:
```
import Config from "react-native-config";

Config.API_URL; // 'https://myapi.com'
Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'
```

13.Extra step for Android
You'll also need to manually apply a plugin to your app, from *android/app/build.gradle:*
```// 2nd line, add a new apply:
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```
14. for animation loading, error etc.
 ```npm i lottie-react-native```

## Login Page desing
- static image dosyaları için source kısmına uri değilde require metodu kullanmak gerekiyor (src klasörü altında assets klasörü oluşturmuştuk daha önce oraya googledan bir png arka tarafı şeffaf olan icon aratırız uygulamamızın içeriğine özel onu bu klasöre kopyalaıyoruz)
- 
```
<Image
          style={styles.logo}
          source={require('../../assets/login_logo.png')}
        />
``` 
- Input ve button components created and added in Login Page
- `npm install formik --save` for [Formik ](https://formik.org/docs/overview)
- import Login Page and ` import { Formik } from 'formik';`
- [setting for React native ](https://formik.org/docs/guides/react-native)
- [Yup install](https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/) for form validation in react native 
- Errors component created for *Yup*
- [react-native-icons](https://github.com/oblador/react-native-vector-icons#installation)
- android/src/assets/fonts created for icons
- [icons download](https://materialdesignicons.com/) and added above *fonts* folder ![](./media/font_folder_image.png)
-  usePost custom hook created for users login process
- [](https://react-native-async-storage.github.io/async-storage/docs/install/)
- `npm install @react-native-async-storage/async-storage` for access phone storage
- `npm i redux react-redux` for user login process

- *hata aldığımızda bir kere çalıştır "cd android && ./gradlew clean && cd .."*
