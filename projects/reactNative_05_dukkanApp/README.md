# Project Name : reactNative_05_dukkanApp

## Image and Gif



## Used skills

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
```@Override
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
```
11.
```
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} />
        <Stack.Screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
:) finally project ready..

