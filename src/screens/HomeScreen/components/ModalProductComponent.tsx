import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import { Product } from "../HomeScreen";
import { StylesGlobal } from "../../../theme/appTheme";
import Icon from "@expo/vector-icons/MaterialIcons";
import { TERTIARY_COLOR } from "../../../commons/constants";

interface Props {
  isVisible: boolean;
  item: Product;
  hiddenModal: () => void;
  changeStockProduct: (id: number, quantity: number) => void;
}

export const ModalProductComponent = ({
  isVisible,
  item,
  hiddenModal,
  changeStockProduct,
}: Props) => {
  const { width } = useWindowDimensions();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddProduct = () => {
    changeStockProduct(item.id, quantity);
    hiddenModal();
    setQuantity(1);
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={StylesGlobal.containerModal}>
        <View style={{ ...StylesGlobal.bodyModal, width: width * 0.85 }}>
          <View style={StylesGlobal.headerModal}>
            <Text style={StylesGlobal.titleModal}>{item.name}</Text>
            <Icon name="close" color="red" size={25} onPress={hiddenModal} />
          </View>
          <View style={{ alignItems: "center", marginVertical: 15 }}>
            <Image
              source={{ uri: item.pathImage }}
              style={StylesGlobal.imageModal}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              ${item.price.toFixed(2)}
            </Text>
          </View>

          {item.stock === 0 ? (
            <Text style={StylesGlobal.textStock}>Agotado temporalmente</Text>
          ) : (
            <>
              <View style={StylesGlobal.containerQuantity}>
                <TouchableOpacity
                  style={StylesGlobal.buttonQuantity}
                  onPress={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                >
                  <Text style={StylesGlobal.buttonQuantityText}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 22 }}>{quantity}</Text>
                <TouchableOpacity
                  style={StylesGlobal.buttonQuantity}
                  onPress={() => setQuantity(quantity + 1)}
                  disabled={quantity === item.stock}
                >
                  <Text style={StylesGlobal.buttonQuantityText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ textAlign: "center", marginBottom: 15 }}>
                Total: ${(item.price * quantity).toFixed(2)}
              </Text>
              <TouchableOpacity
                style={StylesGlobal.button}
                onPress={handleAddProduct}
              >
                <Text style={StylesGlobal.buttonText}>Agregar al Carrito</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};
