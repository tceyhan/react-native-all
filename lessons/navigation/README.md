# React Native / Navigation

[React Navigation](https://reactnavigation.org/docs/getting-started)
dökümanda belirtilen adımları atarak dependencies npm / yarn ile kuruyoruz.

1. ```npm install @react-navigation/native```

- bu aşamadan sonra expo ile devam etmek isterseniz kodlar başka olacaktır. Ben bare react native projesi oluşturuyorum.

2. ```npm install react-native-screens react-native-safe-area-context```
3. Eğer ios ortamı geliştireceksek ```npx pod-install ios``` paketinü yüklemek zorundayız.Android için herhangi bir değişikliğe gerek yok.
4. "android/app/src/main/java/<your package name>/MainActivity.java."
klasör yolu takip edilerek aşağıdaki kod bloğunu MainActivity class'ına dahil ediyoruz.
```
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```
5. aynı dosya içerisinde en üstte yer alan importlar kısmına ```import android.os.Bundle;``` dahil ediyoruz.

artık navigation için paketlerimiz hazır hale getirildi.

6. index.js veya App.js içerisinde giderek.
```import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```
7. Stack navigation için yani sayfalar arasında geçiş yapmak için ;
```npm install @react-navigation/native-stack``` install ediyoruz.

8. ```import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Prodile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;```

### bu şekliyle en temel stack navigation hazırlanmış oldu
