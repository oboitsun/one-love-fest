import Image from "next/image";
import freeshirt from "../../assets/free-shirt-left.png";
import tshirt from "../../assets/t-shirt.png";
import Btn from "../Btn";
export default function FreeTee() {
  return (
    <section className="bg-mustard py-5 pt-10 lg:pt-20 xl:pt-28 ">
      <div className="wrapper p-5  relative">
        <div className="relative   w-full p-10 lg:p-[4%] ">
          <div className="w-full flex flex-col  lg:grid lg:grid-cols-[max-content,1fr,0.3fr,25vw] items-center  justify-between  relative z-10">
            <div className="w-full  flex justify-center lg:justify-end">
              <Btn
                style={{ color: "white" }}
                as="a"
                href="https://www.ticketfairy.com/event/one-love-festival-2025"
                variant="secondary"
                className={
                  "text-balance text-center max-w-[490px] max-lg:text-4xl lg:max-w-[345px] w-full flex-shrink-0"
                }>
                Buy Tickets
              </Btn>
            </div>
            <div className="w-full  relative">
              <Image
                width={tshirt.width}
                height={tshirt.height}
                className="w-full lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 h-auto max-h-[472px] object-contain "
                src={tshirt}
                alt="Tshirt"
              />
              <Image
                width={freeshirt.width}
                height={freeshirt.height}
                className="lg:hidden absolute w-1/4 top-1/2 left-1/2  translate-y-[15%] translate-x-[95%]"
                src={freeshirt}
                alt="Free Tshirt"
              />
            </div>
            <div className=" max-lg:hidden w-1/4 lg:w-full max-w-max">
              <Image
                width={freeshirt.width}
                height={freeshirt.height}
                className=" translate-y-[15%] -translate-x-[15%]"
                src={freeshirt}
                alt="Free Tshirt"
              />
            </div>
            <p className="lg:w-full text-[clamp(18px,4.5vw,80px)] text-center lg:text-[clamp(18px,1.5vw,80px)] text-stroke uppercase leading-none">
              Everyone who purchases presale tickets can get a free One Love t-shirt
            </p>
          </div>
          <Image
            fill
            className="object-cover rounded-10"
            src={"/red-bg.jpeg"}
            alt="Red Paper texture"
          />
        </div>
      </div>
    </section>
  );
}
