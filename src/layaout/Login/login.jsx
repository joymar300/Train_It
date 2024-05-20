import React from "react";
import {Input} from "@nextui-org/react";
export default function Login (){
    return(
        <>
        <div>
            <h1>Iniciar Sesión</h1>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input type="password" label="Contraseña" />
    </div>
        </>
    )
}