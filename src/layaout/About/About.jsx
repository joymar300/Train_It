import {Card, CardHeader, CardBody, Image, CardFooter, Button} from "@nextui-org/react";
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
import img4 from "../../assets/img/img4.png"
const urls = [

  img1,
  img2,
  img3,
  img4,


];

export default function About(){
    return (
        <>

        <div className='gap-2 grid sm:grid-cols-4 grid-cols-1' >
        {urls.map((item, index) => (
          <Card  key={`${item}-${index}`}
          isFooterBlurred
          radius="lg"
          className="border-none"
          >
            <Image
            alt="Card background"
            className="object-cover "
            src={item}
            width="100%"
            
            
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                Notify me
                </Button>
            </CardFooter>

          </Card>
        ))}

          </div>
      </>
        )
}