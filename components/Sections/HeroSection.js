import Image from "next/image";
import bg from "../../assets/bg.jpeg";
import logo from "../../assets/logo-hero.png";
import Btn from "../Btn";
export default function HeroSection() {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center py-20  xl:py-32 2xl:py-40">
      <div className="relative m-auto flex flex-col items-center justify-center w-11/12 xl:w-9/12 gap-4 lg:gap-8">
        <Image
          className="pointer-events-none object-cover "
          priority
          loading="eager"
          quality={100}
          width={logo.width}
          height={logo.height}
          src={logo}
          alt="pattern"
        />
        <h2 class="text-stroke hidden lg:flex flex-wrap  gap-1 justify-center text-white uppercase text-center text-[clamp(16px,2.1vw,44px)] leading-none">
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>MAOLI ·</p>
            <p>REBEL SOULJAHZ ·</p>
            <p>J BOOG ·</p>
            <p>FIJI ·</p>
            <p>KATCHAFIRE ·</p>
            <p>CORRELLA</p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>MAGIC! ·</p>
            <p>1814 ·</p>
            <p>INNER CIRCLE ·</p>
            <p>STEEL PULSE ·</p>
            <p>SPAWNBREEZIE </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>ADEAZE ·</p>
            <p>HOUSE OF SHEM ·</p>
            <p>HORI SHAW ·</p>
            <p>TOMORROW PEOPLE </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>ARDIJAH ·</p>
            <p>JOSH WAWA ·</p>
            <p>K'NOVA ·</p>
            <p>JARO LOCAL ·</p>
            <p>FIA </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>LOMEZ BROWN ·</p>
            <p>FE JOINT ·</p>
            <p>SUB-TRIBE ·</p>
            <p>SON & WATER ·</p>
            <p>TJ & HURI </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>LION REZZ ·</p>
            <p>BRUTHA RODZ ·</p>
            <p>SWISS & TREE ·</p>
            <p>WAYNO </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>THREE HOUSES DOWN ·</p>
            <p>GENERAL FIYAH ·</p>
            <p>REX ATIRAI </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>BRADAMON ·</p>
            <p>PIETER T ·</p>
            <p>DEACH ·</p>
            <p>SAMSON SQUAD ·</p>
            <p>MIKEY MAYZ </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>SAMMIELZ ·</p>
            <p>KRISY Erin ·</p>
            <p>CEE BLU ·</p>
            <p>PEOPLE OF THE PA </p>
          </div>
          <div className="flex gap-1 justify-center *:min-w-max flex-wrap">
            <p>ILLUMINGATI ·</p>
            <p>MIRAGE ·</p>
            <p>SIANNE ·</p>
            <p>LOPZ & DA RASTAZ</p>
          </div>
        </h2>
        <h2 class="text-stroke flex lg:hidden flex-col  items-center gap-1 justify-center text-white uppercase text-center text-[clamp(1px,3.5vw,44px)] leading-none">
          <div className="flex gap-1 min-w-max">
            <p>MAOLI ·</p>
            <p>REBEL SOULJAHZ ·</p>
            <p>J BOOG ·</p>
            <p>FIJI </p>
          </div>

          <div className="flex gap-1">
            <p>KATCHAFIRE ·</p>
            <p>CORRELLA ·</p>
            <p>MAGIC! ·</p>
            <p>1814</p>
          </div>
          <div className="flex gap-1">
            <p>INNER CIRCLE ·</p>
            <p>STEEL PULSE ·</p>
            <p>SPAWNBREEZIE </p>
          </div>
          <div className="flex gap-1 ">
            <p>ADEAZE ·</p>
            <p>HOUSE OF SHEM ·</p>
            <p>HORI SHAW </p>
          </div>
          <div className="flex gap-1">
            {" "}
            <p>TOMORROW PEOPLE ·</p>
            <p>ARDIJAH ·</p>
            <p>JOSH WAWA </p>
          </div>

          <div className="flex gap-1">
            <p>K'NOVA ·</p>
            <p>JARO LOCAL ·</p>
            <p>FIA ·</p>
            <p>LOMEZ BROWN </p>
          </div>
          <div className="flex gap-1">
            <p>FE JOINT ·</p>
            <p>SUB-TRIBE ·</p>
            <p>SON & WATER </p>
          </div>
          <div className="flex gap-1">
            <p>TJ & HURI ·</p>
            <p>BRUTHA RODZ ·</p>
            <p>LION REZZ </p>
          </div>
          <div className="flex gap-1">
            <p>SWISS & TREE ·</p>
            <p>WAYNO ·</p>
            <p>GENERAL FIYAH </p>
          </div>
          <div className="flex gap-1">
            <p>THREE HOUSES DOWN ·</p>
            <p>REX ATIRAI ·</p>
            <p>DEACH </p>
          </div>
          <div className="flex gap-1">
            <p>BRADAMON ·</p>
            <p>PIETER T ·</p>
            <p>SAMSON SQUAD</p>
          </div>
          <div className="flex gap-1">
            <p>MIKEY MAYZ ·</p>
            <p>SAMMIELZ ·</p>
            <p>KRISY Erin </p>
          </div>
          <div className="flex gap-1">
            <p>CEE BLU ·</p>
            <p>ILLUMINGATI ·</p>
            <p>PEOPLE OF THE PA </p>
          </div>

          <div className="flex gap-1">
            <p>MIRAGE ·</p>
            <p>SIANNE ·</p>
            <p>LOPZ & DA RASTAZ</p>
          </div>
        </h2>

        <Btn
          as="a"
          href={"https://www.ticketfairy.com/event/one-love-festival-2025"}
          className={"max-w-max mx-auto"}>
          Buy Tickets
        </Btn>
      </div>
      <div className="-z-[1] w-full h-full absolute top-0 left-0">
        <Image
          className="pointer-events-none object-cover gradient"
          priority
          loading="eager"
          fill
          src={bg}
          placeholder="blur"
          alt="pattern"
        />
      </div>
    </section>
  );
}
