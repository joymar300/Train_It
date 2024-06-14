import React from "react";
import {Button, Input, Link} from "@nextui-org/react";
export default function Login (){
    return(
        <>
        <article  className=" bg-slate-200 h-[calc(100vh_-_64px)] 2xl:h-[calc(100vh_-_64px)] grid content-center"  >
          <div className="flex flex-row justify-center  ">

                <div className="box-border border-1 shadow-md w-1/5 mt-2 mb-2 bg-white"> 

                    <form>
                    <div className="flex flex-col gap-4 p-4">
                        <div className="">
                            <h1 className="font-semibold" >Iniciar Sesión</h1>
                        </div>
                            <Input type="email" label="Email" />
                            <Input type="password" label="Contraseña" />
                        <Button color="primary" href="/home" as={Link}  className="font-semibold">inciar</Button>
                    </div>
                    </form>
                </div>
          </div>
         




        </article>
        </>
    )
}