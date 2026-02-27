import { StyleSheet } from "react-native";
import { QUARTERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, PRIMARY_COLOR } from "../commons/constants";

export const StylesGlobal = StyleSheet.create({
    // Tus estilos anteriores
    title: {
        color: SECONDARY_COLOR,
        fontSize: 27,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        textAlign: 'center'
    },
    ContainerBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    // Estilos nuevos para el Carrito
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40
    },
    iconHome: {
        paddingHorizontal: 30,
    },
    textIconCart: {
        backgroundColor: SECONDARY_COLOR,
        color: PRIMARY_COLOR,
        paddingHorizontal: 6,
        borderRadius: 10,
        fontWeight: 'bold',
        position: 'absolute',
        right: 20,
        top: -5,
        zIndex: 1
    },
    containerCard: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
        margin: 7,
        borderRadius: 10,
        alignItems: 'center', // Crucial para el centrado horizontal
        elevation: 2,
    },
    imageCard: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    titleCard: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center', // Centra el texto del nombre
    marginVertical: 2,
},
textPrice: {
    color: '#0D2C44', // Tu color azul empresarial
    fontWeight: 'bold',
    fontSize: 16,
    },
    iconCard: {
        alignSelf: 'flex-end'
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyModal: {
        backgroundColor: SECONDARY_COLOR,
        padding: 20,
        borderRadius: 15
    },
    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 10
    },
    titleModal: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageModal: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    containerQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    buttonQuantity: {
        backgroundColor: TERTIARY_COLOR,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerTable: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    containerTotalPrice: {
        marginVertical: 15,
        alignItems: 'flex-end'
    },
    textTotalPay: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    textStock: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    // Estilos de formulario que ya tenías
    input: {
        backgroundColor: QUARTERNARY_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16
    },
    containerInput: {
        marginVertical: 8,
    },
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: SECONDARY_COLOR,
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleWelcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#022e5a',
        marginBottom: 10
    },
});