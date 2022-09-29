import { BaseIcon } from "@utils/BaseIcon";
import Image from "next/image";
import IMG from "../public/teste.png";
import Link from "next/link";
import { useState } from "react";

export const Card = () => {

  const [star, setStar] = useState(0);

  const counterStar = () => {
    setStar(star => star + 1);
  }
  


  return (
    <div className="w-[250px] min-h-[320px] bg-darkprimary dark:bg-primary flex flex-col justify-between rounded">
      <div>
        <header className="w-full bg-primary dark:bg-darkprimary py-3">
          <h1 className="text-center text-textdark">Card</h1>
        </header>
        <div className="w-full">
          <Image src={IMG} width={250} height={167} alt="card pixel" objectFit="cover" />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 px-3 py-2">
          <BaseIcon name="FaEye" size="1rem" color={undefined} />
          <p className="text-white">12k views</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-2">
          <button onClick={counterStar} className="flex items-center gap-2"
            aria-label="Star counter "
          >
            <BaseIcon name="FaStar" size="1rem" color="#FFD700" />
            <p className="text-white">{star}</p>
          </button>
        </div>
      </div>
      <span
        className="text-gray-600 hover:text-gray-900 px-2 text-sm text-end"
        aria-label="Created at"
      >
        send by jose
      </span>
      <Link href="/details/asasd">
        <div className="flex items-center gap-2 px-3 py-2 cursor-pointer">
          <BaseIcon name="FaLongArrowAltRight" size="1rem" color={undefined} />
          <p className="text-white">Details</p>
        </div>
      </Link>
    </div>
  );
};
