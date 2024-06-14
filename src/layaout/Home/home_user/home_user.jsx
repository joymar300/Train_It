import { Outlet } from "react-router-dom";
import LateralBarr from "../../../componets/lateralBar/lateralBar";


export default function HomeUser(){
    return(<>
        <div className="grid h-screen grid-cols-12 gap-4  bg-slate-200">
            <div className="col-span-2 h-screen">

                <LateralBarr/>
            </div>
                
           <div className="col-span-10 p-4">
                <div className="container">
                    <Outlet></Outlet>
                </div>

            
            
           </div>
        </div>
    
    </>)
}