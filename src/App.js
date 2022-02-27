import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart/Cart";
import { ModalContext } from "./store/modal-context";
import CartContextProvider from "./store/cart-context";

function App() {
  const [showModal, setShowModal] = useState(false) 

  const showModalHandler = () =>{
    setShowModal(true)
  };

  const hideModalHandler = () =>{
    setShowModal(false)
  };
  return (
    <CartContextProvider>
    <ModalContext.Provider value={{
      onClose: hideModalHandler,
      onShow: showModalHandler
    }}>
        {showModal && <Cart/>}
        <Header onShowModal={showModalHandler}/>
        <main>
          <Meals/>
        </main>
    </ModalContext.Provider>
    </CartContextProvider>
      
  
  );
}

export default App;
