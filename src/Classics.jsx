import React from "react";
import first from "./assets/first.png";
import second from "./assets/second.png";
import third from "./assets/third.png";
import arrow from "./assets/arrow.svg";


export default function Classics() {
    return (
		<div className="flex flex-col justify-center text-center h-[968px]">
			<div className="mb-[56px]">
				<h1 className="text-[48px] font-bold mb-[24px]">
					ChronoSphere Classics
				</h1>
				<p className="font-normal text-[16px]">
					The ChronoSphere Classic is an icon of elegance, with a
					timeless design that's perfect for any occasion.
					<br /> Crafted with precision and featuring a Swiss-made
					quartz movement, this watch offers reliable timekeeping
					<br /> and a chronograph function for measuring elapsed
					time. With its understated style and high-quality
					<br /> materials, the ChronoSphere Classic is a must-have
					for any watch enthusiast.
				</p>
			</div>

			<div className="flex flex-col mb-[56px]">
				<div className="flex  gap-[32px] mb-[24px] m-[auto] overflow-y-hidden overflow-x-scroll overflow-hidden w-[90%] ">
					<img src={first} />
					<img src={second} />
					<img src={third} />
					<img src={third} />
					<img src={third} />
				</div>
				<div className="flex justify-end w-[93%] pt-0">
					<img src={arrow} />
				</div>
			</div>

			<div className="mb-[50px]">
				<button className="w-[324px] h-[62px] bg-[#FF8B03] text-white">
					Explore ChronoSphere Classics Now
				</button>
			</div>
		</div>
	);
}