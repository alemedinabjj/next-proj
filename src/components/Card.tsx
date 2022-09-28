import { BaseIcon } from "@utils/BaseIcon"
import Image from 'next/image'
import IMG from '../public/teste.png'
import Link from "next/link"

export const Card = () => {
  return(
    <div className="w-[250px] min-h-[320px] bg-darkprimary dark:bg-primary flex flex-col justify-between rounded">
      <div>
      <header className="w-full bg-primary dark:bg-darkprimary py-3">
        <h1 className="text-center text-white">Card</h1>
      </header>
      <div className="w-full">
        <Image src={IMG} width={300} height={200} alt="card pixel" />
      </div>
      </div>
     <div className="flex items-center gap-10">
     <div className="flex items-center gap-2 px-3 py-2">
        <BaseIcon name="FaEye" size="1rem" color={undefined} />
        <p className="text-white">12k views</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-2">
        <BaseIcon name="FaStar" size="1rem" color={undefined} />
        <p className="text-white">1</p>
      </div>
     </div>
     <Link href="/details/asasd">
      <div className="flex items-center gap-2 px-3 py-2 cursor-pointer">
          <BaseIcon name="FaLongArrowAltRight" size="1rem" color={undefined} />
          <p className="text-white">Details</p>
        </div>
      </Link>
    </div>
  )
}