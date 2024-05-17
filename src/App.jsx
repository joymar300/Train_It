import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

import './App.css'

function App() {
  return (
    <>
      <div className='container mx-auto px-4 columns-3 '>

  
        <Card className="py-4 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5fc9c6ad-3c53-4996-bc6d-8ae52c96b64b/width=450/seele16.jpeg"
              width={170}
              />
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5fc9c6ad-3c53-4996-bc6d-8ae52c96b64b/width=450/seele16.jpeg"
              width={170}
              />
          </CardBody>
        </Card>
        </div>
    </>
  );
}

export default App
