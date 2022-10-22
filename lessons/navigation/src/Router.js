import React from 'react';
// drawer yapısı için import
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//! Bu componentler ilk deneme için;
// import First from './pages/First';
// import Second from './pages/Second';
//! Bu komponentler stack container projesi için;
// import Welcome from './pages/Welcome';
// import MembersSign from './pages/MembersSign';
// import MemberResult from './pages/MemberResult';
//! BU komponentler tab container projesi için;
// import Home from './pages/Home';
// import Profile from './pages/Profile';
//! BU komponentler drawer container projesi için;
import Products from './pages/Products';
import Blogs from './pages/Blogs';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    //? REACT NAVIGATION LESSON EXAMPLE
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
    //? STACK NAVIGATION EXAMPLE
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    //     <Stack.Screen
    //       name="WelcomeScreen"
    //       component={Welcome}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen name="MemberSignScreen" component={MembersSign} />
    //     <Stack.Screen name="MemberResultScreen" component={MemberResult} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //? TAB NAVIGATION EXAMPLE
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="HomeScreen" component={Home} />
    //     <Tab.Screen name="ProfileScreen" component={Profile} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ProductScreen" component={Products} />
        <Drawer.Screen name="BlogsScreen" component={Blogs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
