import React, { useState, useEffect } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

export default function Slider() {
	const images = [img1, img2, img3, img4];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index) => (index + 1) % images.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div
			className="relative w-[100%] h-[941px] bg-cover bg-center bg-no-repeat z[-1]"
			style={{ backgroundImage: `url(${images[index]})` }}
		></div>
	);
}
