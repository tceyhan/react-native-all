import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eceff1",
        padding: 14,
        margin: 5,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    textContainer: {
        padding: 5
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black',
        marginTop: 5,
    },
    price: {
        marginTop: 5,
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 18,
    },
    inStock: {
        color: 'red',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

// StyleSheet.compose() metodu incele