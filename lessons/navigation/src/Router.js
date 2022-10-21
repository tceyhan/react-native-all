import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//! Bu componentler ilk deneme içindir
// import First from './pages/First';
// import Second from './pages/Second';
//! Bu komponentler kebapfitness projesi için
import Welcome from './pages/Welcome';
import MembersSign from './pages/MembersSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //   // screenOptions ile bütün ekranlara aynı özelliği veriyoruz.
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: '#f4511e',
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },
    //     }}>
    //     {/* initialRouteName="ProfileScreen" verilebilir burda sıralamaya uymak istemez isek */}
    //     <Stack.Screen
    //     // options ile sadece o ekrana stillendirme yapıyoruz.
    //     // özelde burda verilen daha baskın gelir.background renginde olduğu gibi.
    //       name="HomeScreen"
    //       component={First}
    //       options={{
    //         title: 'My home',
    //         headerStyle: {
    //           backgroundColor: 'blueviolet',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         },
    //       }}
    //     />
    //     <Stack.Screen name="ProfileScreen" component={Second} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MemberSignScreen" component={MembersSign} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
