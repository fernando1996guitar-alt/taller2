import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { TitleComponent } from "../../components/TitleComponent";
import { BodyComponent } from "../../components/BodyComponent";
import { CardProductComponent } from "./components/CardProductComponent";
import Icon from "@expo/vector-icons/MaterialIcons";
import { SECONDARY_COLOR } from "../../commons/constants";
import { StylesGlobal } from "../../theme/appTheme";
import { ModalCartComponent } from "./components/ModalCartComponent";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export const HomeScreen = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Pinturas Norma 13 Col",
      price: 6.5,
      stock: 10,
      pathImage: "https://dilipa.com.ec/5510-large_default/pinturas-norma-42mm-13-colores-doble-punta-nueva-version.jpg",
    },
    {
      id: 2,
      name: "Papel Bond Norma A4",
      price: 4.8,
      stock: 20,
      pathImage: "https://dilipa.com.ec/5415-large_default/papel-bond-norma-75gr-a4-500-hojas.jpg",
    },
    {
      id: 3,
      name: "Mouse Gaming Ajazz",
      price: 25.0,
      stock: 5,
      pathImage: "https://dilipa.com.ec/4094-large_default/mouse-gaming-ajazz-aj52-4800dpi-ld.jpg",
    },
    {
      id: 4,
      name: "Cuaderno Primavera 100h",
      price: 3.2,
      stock: 15,
      pathImage: "https://dilipa.com.ec/5629-large_default/cuaderno-primavera-universitario-100-hojas-cuadros-morat-13397-varios-modelos-.jpg",
    },
    {
      id: 5,
      name: "Papel Regalo 2mx70",
      price: 0.8,
      stock: 50,
      pathImage: "https://dilipa.com.ec/5293-large_default/papel-regalo-primavera-2mx70-toda-ocasion.jpg",
    },
    {
      id: 6,
      name: "Pintura Primavera 12 Col",
      price: 5.4,
      stock: 12,
      pathImage: "https://dilipa.com.ec/3492-large_default/pintura-primavera-larga-12-colores-personajes.jpg",
    },
    {
      id: 7,
      name: "Bloques Armables 28p",
      price: 12.0,
      stock: 8,
      pathImage: "https://dilipa.com.ec/4351-large_default/bloques-armables-b107740-28-piezas.jpg",
    },
    {
      id: 8,
      name: "Fomix Moldeable Gris",
      price: 1.50,
      stock: 25,
      pathImage: "https://dilipa.com.ec/5738-large_default/fomix-lineazul-moldeable-50-gramos-gris.jpg",
    },
    {
      id: 9,
      name: "Juego de Ajedrez",
      price: 15.0,
      stock: 10,
      pathImage: "https://dilipa.com.ec/4325-large_default/juego-de-ajedrez-b103243.jpg",
    },
    {
      id: 10,
      name: "Estilete Metal 18mm",
      price: 3.75,
      stock: 15,
      pathImage: "https://dilipa.com.ec/5759-large_default/estilete-line-desk-18mm-metal-aluminio.jpg",
    },
  ];

  const [productsState, setProductState] = useState<Product[]>(products);
  const [cart, setCart] = useState<Cart[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const changeStockProduct = (id: number, quantity: number) => {
    const updatedProducts = productsState.map((item) =>
      item.id === id ? { ...item, stock: item.stock - quantity } : item,
    );
    setProductState(updatedProducts);
    addProduct(id, quantity);
  };

  const addProduct = (id: number, quantity: number) => {
    const product = productsState.find((p) => p.id === id);
    if (!product) return;

    const newCartItem: Cart = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: product.price * quantity,
    };
    setCart([...cart, newCartItem]);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={StylesGlobal.headerHome}>
        <TitleComponent title="Catálogo" />
        <View style={StylesGlobal.iconHome}>
          <Text style={StylesGlobal.textIconCart}>{cart.length}</Text>
          <Icon
            name="shopping-cart"
            color={SECONDARY_COLOR}
            size={30}
            onPress={() => setShowModal(true)}
          />
        </View>
      </View>
      <BodyComponent>
        <FlatList
          data={productsState}
          renderItem={({ item }) => (
            <CardProductComponent
              item={item}
              changeStockProduct={changeStockProduct}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </BodyComponent>
      <ModalCartComponent
        isVisible={showModal}
        cart={cart}
        hiddenModal={() => setShowModal(false)}
      />
    </View>
  );
};