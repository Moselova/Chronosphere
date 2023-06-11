import React from 'react';
import ChronoSphere from "./assets/ChronoSphere.png";
import watch from "./assets/watch.svg"



export default function Navbar() {
	return (
		<nav className="z-[1]">
			<div className="flex justify-around gap-11 w-full h-106px items-center">
				<div className="block items-center">
					<div className="ml-8">
						<img src={watch} />
					</div>
					<div>
						<img src={ChronoSphere} />
					</div>
				</div>
				<div className="flex gap-10">
					<p>Home</p>
					<p>Product</p>
					<p>Brands</p>
					<p>New Arrivals</p>
					<p>Sales</p>
					<p>About Us</p>
				</div>
				<div>
					<button className="flex justify-center w-[126px] h-[46px] bg-[#FF8B03] pt-2 text-white">
						Contact us
					</button>
				</div>
			</div>
		</nav>
	);
}