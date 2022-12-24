# Project Name : banane

#### Firebase kullanarak kullanıcıların login olabileceği , odalar açabileceği, anlık mesajlar yazıp okuyabileceği mobil bir uygulama.

## Project Images
## Project Gıfs
## Project Video
## Requirements
## Used Packages
## Project steps

#### A) Proje Kurulumu:
- npx react-native init banane
- cd banane
- npm start && npm run android
#### B) Routing Yüklemeleri & gerekli ayarlamalar:
- npm install @react-navigation/native
- npm install react-native-screens react-native-safe-area-context
- android/app/src/main/java//MainActivity.java dosya yolutakip edilere giderek MainActivity class içerisine
```
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

```
ekliyoruz ve impport kısmına `import android.os.Bundle;` ekliyoruz.
- Stack Navigation için `npm install @react-navigation/native-stack`
- App.js içerisinde import kısmına;
```
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './src/pages/Products;
import Products from './src/pages/Register;
import Login from './src/pages/Login;

const Stack = createNativeStackNavigator();
```
- Örnek bir App.js son hali;
```
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DetailPage" component={Register} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="ProductsPage" component={Products} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
C) Sayfaların Oluşturulması ve Sayfalar içerisinde gerekli olan paketlerin eklenmesi

1) Login Page
- 

