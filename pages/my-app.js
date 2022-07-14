import { Image } from "antd";
import React from "react";
import { Button } from "antd";

const MyApp = () => {
  return (
    <>
    <div class = "contPadre">
      <div class = "tarjeta">
        <div class = "imagen">
          <Image
            preview = {{ visible: false }}
            src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
            />
        </div>
          <div class = "text">
            <p> P E R F U M E </p>
            <h1> Gabrielle Essence Eau De Parfum </h1>
            <h2> A floral, solar and voluptuous interpretation composed by Oliver Poige, Perfumer-Creator for the House of CHANEL </h2>
          </div>
          <div class = "precio">
             <p2> $149.99 </p2>
              <del> $169.99 </del>
          </div>
          <div class = "boton">
           <Button type = "primary" danger = {true} sixe='large' > Add to cart </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyApp;