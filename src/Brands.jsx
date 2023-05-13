import React from "react";
import brans from "./assets/brans.png";
export default function Brands() {
    return (
		<div className="h-[361px] flex flex-col justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-semibold">Brands</h1>
				<p className="text-base font-normal">
					You will find these brands and more in ChronoSphere stores
				</p>
			</div>
			<div className="flex justify-center">
				<img src={brans} />
			</div>
		</div>
	);
}