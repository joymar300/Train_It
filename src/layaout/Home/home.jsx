import {Image,Button} from "@nextui-org/react";
import pollo from "../../assets/img/firstbrany.png"
import mancha1 from "../../assets/img/mancha1.png"
import mancha2 from "../../assets/img/mancha2.png"
import mancha3 from "../../assets/img/mancha3.png"
import styles from "../Home/home.module.css"
export default function Home() {
    return (
    <>
    <div className='container mx-auto max-w-3xl px-4'>
      <section className="flex md:flex-row relative overflow-hidden lg:overflow-visible w-full   items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">

        <div className="box-content ">
            <div className="text-center leading-8 sm:leading-10  mb-5 ">
              <div className="inline-block">
                <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">Bienvenido a</h1>
                <h1 className="tracking-tight inline font-semibold from-purple-500 to-blue-500 text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b"> Train It!</h1>
              </div>
            <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">¡Prepárate con nosotros para triunfar en las Pruebas ICFES!</h1>
            </div>
            <div className="grid grid-cols-5  items-center gap-4 ">
                <Button   className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg col-start-2 col-span-3  "><p className="text-[1.5rem] mb-2">Ingresar</p></Button>
                {/* <Button   className=" text-white shadow-lg col-start-2 col-span-3 " style={{backgroundColor: '#FE676E'}}  ><p className="text-[1.5rem] mb-2">Ingresar</p></Button> */}
            </div>
        </div>


      </section>
    </div>
  </>
    )
}
