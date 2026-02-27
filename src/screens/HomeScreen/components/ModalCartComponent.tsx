import React from "react";
import {
  Modal,
  View,
  Text,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Cart } from "../HomeScreen";
import { StylesGlobal } from "../../../theme/appTheme";
import Icon from "@expo/vector-icons/MaterialIcons";

interface Props {
  isVisible: boolean;
  cart: Cart[];
  hiddenModal: () => void;
}

export const ModalCartComponent = ({ isVisible, cart, hiddenModal }: Props) => {
  const { width } = useWindowDimensions();

  const totalPay = () => cart.reduce((total, item) => total + item.total, 0);

  const handleBuy = () => {
    hiddenModal();
    Alert.alert("¡Éxito!", "Gracias por comprar en Papelería El Fortín");
  };

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={StylesGlobal.containerModal}>
        <View style={{ ...StylesGlobal.bodyModal, width: width * 0.9 }}>
          <View style={StylesGlobal.headerModal}>
            <Text style={StylesGlobal.titleModal}>Tu Carrito</Text>
            <Icon name="cancel" color="red" size={25} onPress={hiddenModal} />
          </View>

          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View style={StylesGlobal.headerTable}>
                <Text style={{ flex: 2 }}>{item.name}</Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  x{item.quantity}
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  ${item.total.toFixed(2)}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <Text style={{ textAlign: "center", margin: 20 }}>
                El carrito está vacío
              </Text>
            }
          />

          <View style={StylesGlobal.containerTotalPrice}>
            <Text style={StylesGlobal.textTotalPay}>
              Total a Pagar: ${totalPay().toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              StylesGlobal.button,
              { backgroundColor: cart.length > 0 ? "#195134" : "#ccc" },
            ]}
            onPress={handleBuy}
            disabled={cart.length === 0}
          >
            <Text style={StylesGlobal.buttonText}>FINALIZAR COMPRA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
