import { useState, useRef, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const initialState = {
  cart: [],
  total: 0,
};

const useInitialState = () => {
  const toast = useToast();
  const toastIdRef = useRef();

  // crea el estado inicial del componente
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("cartStorage")) || initialState
  );

  useEffect(() => {
    setLocalStorages();
  }, [state]);

  //agregar productos
  const addToCart = (payload, qty) => {
    const exist = state.cart.some((element) => element.id === payload.id);
    if (!exist) {
      if (evaluateStock(payload.stock, 0, qty)) {
        const newItem = { ...payload, quantity: qty };

        setState({
          ...state,
          cart: [...state.cart, newItem],
          total: state.total + payload.price * qty,
        });
      }
    } else {
      //si el elemeno existe, se suma 1 a la cantidad del producto
      const product = state.cart.findIndex(
        (element) => element.id === payload.id
      );

      if (
        evaluateStock(
          state.cart[product].stock,
          state.cart[product].quantity,
          qty
        )
      ) {
        const newState = { ...state };
        newState.cart[product].quantity += qty;
        newState.total += payload.price * qty;
        setState(newState);
      }
    }
  };

  // Metodo encargado de evaluar el stock del producto
  const evaluateStock = (stock, qtyInCart, qtyInBox) => {
    if (qtyInCart + qtyInBox > parseInt(stock)) {
      toastIdRef.current = toast({
        title: "Sin Stock",
        description: "No tenemos Stock suficiente para esa cantidad",
        status: "warning",
        position: "top-center",
        duration: 2000,
        isClosable: true,
      });
      return false;
    } else if (qtyInBox <= 0) {
      toastIdRef.current = toast({
        title: "Seleccione una cantidad",
        description:
          "Es necesario seleccionar una cantidad para agregar al carro",
        status: "warning",
        position: "top-center",
        duration: 2000,
        isClosable: true,
      });
      return false;
    } else {
      toastIdRef.current = toast({
        title: "Wii ! Producto añadido al carro!",
        description: "",
        status: "success",
        position: "top-center",
        duration: 2000,
        isClosable: true,
      });
      return true;
    }
  };

  //actualiza el localstorage segun datos del estado
  const setLocalStorages = () => {
    try {
      localStorage.removeItem("cartStorage");
      localStorage.setItem("cartStorage", JSON.stringify(state));
    } catch (error) {
      console.error("Ocurrió un error", error);
    }
  };
};

export default useInitialState;
