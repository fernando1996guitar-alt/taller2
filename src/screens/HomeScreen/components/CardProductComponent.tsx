import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Product } from "../HomeScreen";
import { StylesGlobal } from "../../../theme/appTheme";
import Icon from "@expo/vector-icons/MaterialIcons";
import { TERTIARY_COLOR, PRIMARY_COLOR } from "../../../commons/constants";
import { ModalProductComponent } from "./ModalProductComponent";

interface Props {
  item: Product;
  changeStockProduct: (id: number, quantity: number) => void;
}

export const CardProductComponent = ({ item, changeStockProduct }: Props) => {
  // Hook para gestionar el estado del modal de detalle
  const [showModal, setShowModal] = useState<boolean>(false);

  // Función para alternar la visibilidad del modal
  const handleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <>
      <View style={StylesGlobal.containerCard}>
        {/* Imagen del Producto */}
        <Image
          source={{ uri: item.pathImage }}
          style={StylesGlobal.imageCard}
        />

        {/* Contenedor de Información Centrada */}
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={StylesGlobal.titleCard}>{item.name}</Text>
          
          {/* Precio centrado debajo del título */}
          <Text style={{ 
            color: PRIMARY_COLOR, 
            fontWeight: 'bold', 
            fontSize: 16,
            marginVertical: 4 
          }}>
            ${item.price.toFixed(2)}
          </Text>

          {/* Icono centrado debajo del precio */}
          <TouchableOpacity 
            style={{ 
              marginTop: 5,
              backgroundColor: '#f0f0f0',
              padding: 8,
              borderRadius: 20 
            }}
            onPress={handleModal}
          >
            <Icon
              name="add-shopping-cart"
              size={26}
              color={TERTIARY_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Componente Modal para agregar al carrito */}
      <ModalProductComponent
        isVisible={showModal}
        item={item}
        hiddenModal={handleModal}
        changeStockProduct={changeStockProduct}
      />
    </>
  );
};