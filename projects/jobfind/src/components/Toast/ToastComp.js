/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// import {View, Text} from 'react-native';
import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

export const ToastComp = () => {
  const toastConfig = {
    /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'green'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 17,
          fontWeight: '400',
        }}
        text2Style={{
          fontSize: 18,
          fontWeight: '400',
          color: 'green',
        }}
      />
    ),
    /*
          Overwrite 'error' type,
          by modifying the existing `ErrorToast` component
        */
    error: props => (
      <ErrorToast
        style={{borderLeftColor: 'red'}}
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 18,
          color: '#c44',
        }}
      />
    ),

    //     tomatoToast: ({text1, props}) => (
    //       <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
    //         <Text>{text1}</Text>
    //         <Text>{props.uuid}</Text>
    //       </View>
    //     ),
    //
  };

  return <Toast config={toastConfig} />;
};

export const showToast = (type) => {
  if (type === 'success') {
    return Toast.show({
      type: 'success',
      text1: 'Congrats',
      text2: 'Succesfully add favorite👋',
    });
  }
  if (type === 'error') {
    return Toast.show({
      type: 'error',
      text1: 'Sorry',
      text2: 'This job is already had added 💢',
    });
  }
  if (type === 'remove') {
    return Toast.show({
      type: 'success',
      text1: 'Remove',
      text2: 'Succesfuly removed 🗑️',
    });
  }
};
