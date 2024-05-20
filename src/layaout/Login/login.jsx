import React from "react";
import {Button, Input, Link} from "@nextui-org/react";
export default function Login (){
    return(
        <>
        <article  className=" bg-slate-200"  >
          <div className="flex flex-row justify-center h-[calc(100vh_-_64px)] 2xl:h-[calc(90vh_-_64px)]  ">

                <div className="box-border border-1 shadow-md  w-1/2  mt-2 mb-2 bg-white"> 

                    <div className="flex flex-col gap-4 p-4">
                        <div className="">
                            <h1  >Iniciar Sesión</h1>
                        </div>
                            <Input type="email" label="Email" />
                            <Input type="password" label="Contraseña" />
                        <Button color="primary" href="/" as={Link} >inciar</Button>
                        </div>
                </div>
          </div>
         




        </article>
        </>
    )
}