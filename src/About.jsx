import React from "react";
import manpic from "./assets/manpic.png";
import star from "./assets/star.svg"

export default function About() {
	return (
		<div className="bg-[#ECDCCA] w-[100%] h-[948px] flex justify-center flex-col">
			<div className="flex justify-center flex-col text-center mb-[56px]">
				<h1 className="text-[40px] font-bold mb-[24px]">
					What ChronoSphere Shoppers Say About Us
				</h1>
				<p className="text-[16px] font-normal">
					We've gathered feedback and insights from customers who have
					purchased and worn the ChronoSphere
					<br /> Classic, so you can get a better understanding of the
					watch's features and performance. We invite you to read
					<br /> the reviews and share your own experiences with the
					watch. At the end of this page, we'll provide a summary of
					the overall impression of
					<br />
					the ChronoSphere Classic based on the reviews.
				</p>
			</div>
			<div className="w-[100%] h-[554px] flex justify-center items-center">
				<div className="w-[70%] h-[554px] bg-white flex align-middle justify-around items-center">
					<div>
						<img src={manpic} />
					</div>
					<div className="flex flex-col justify-center gap-[12px]">
						<div className="text-center">
							<h1 className="text-[16px] font-bold">
								Daniel Cho Nakai
							</h1>
						</div>
						<div className="gap-[12.45px]">
							<p className="text-center text-[14px]">
								"I love the ChronoSphere Classic! It's a sleek
								and stylish watch
								<br /> that I can wear with anything. The
								Swiss-made quartz movement
								<br /> ensures accurate timekeeping, and the
								chronograph function is a<br />
								great added bonus. I highly recommend this watch
								to anyone
								<br /> looking for a timeless and elegant
								timepiece."
							</p>
						</div>
						<div className="flex justify-center gap-2">
							<img src={star} />
							<img src={star} />
							<img src={star} />
							<img src={star} />
							<img src={star} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
