import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#faf0e6',
        margin: 5,
        paddingLeft: 10,
        borderRadius: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      text: {color: 'black', fontSize: 25},
      image: {
        backgroundColor: '#faf0e6',
        width: 120,
        height: 120,
        marginRight: 10,
        borderRadius: 50,
        resizeMode: 'contain',
      },
})