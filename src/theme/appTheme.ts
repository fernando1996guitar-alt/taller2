import { StyleSheet } from "react-native";
import { QUARTERNARY_COLOR, SECUNDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const StylesGlobal = StyleSheet.create({
    title: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop: 60,
        textAlign: 'center'
    },
    ContainerBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    titleWelcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#022e5a',
        marginBottom: 10
    },
    input: {
        backgroundColor: QUARTERNARY_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16
    },
    containerInput: {
        marginVertical: 8,
        position: 'relative' // Necesario para el botón de ocultar password
    },
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3
    },
    buttonText: {
        textAlign: 'center',
        color: SECUNDARY_COLOR,
        fontSize: 16,
        fontWeight: 'bold'
    }
});