import { Image, Link } from '@nextui-org/react';
import { Link as LinkR } from 'react-router-dom';
import logo from './../../assets/img/Train it!.png';

export default function LateralBarr(){
    return(<>
        <div className="container  p-6 left-0  z-10 bg-white h-full border-1">
            <div className=""><Image src={logo} isBlurred/> </div>
           <div className="flex flex-col gap-2 p-2 font-bold text-slate-400">
                <Link color="foreground" href="#" aria-current="state" >
                 <LinkR to={"/home"} className='h[46px] p-4  text-slate-500'> Prueba</LinkR>
                </Link>
                <Link color="foreground" href="#" aria-current="state" >
                 <LinkR to={"about"} className='h[46px] p-4 text-slate-500' > perfil</LinkR>
                </Link>

           </div>
        </div>
    
    </>)
}