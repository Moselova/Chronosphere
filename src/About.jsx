import React from "react";
import manpic from "./assets/manpic.png";
import star from "./assets/star.svg";

export default function About() {
	const slider = document.querySelector(".slider");
	let slideNumber = 1;

	return (
		<div className="bg-[#ECDCCA] w-[100%] h-[948px] block justify-center ">
			<div className="flex justify-center flex-col text-center mb-[56px]">
				<h1 className="text-[40px] font-bold mb-[24px] pt-[50px]">
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
			<div>
				<div className="frame overflow-hidden flex justify-center w-[100%]">
					<div className="slider w-[60%] h-[554px]">
						<div className="bg-white w-[100%] h-[100%] flex justify-center align-middle">
							<div className="flex justify-center flex-col w-[100%] pl-[20px]">
								<img
									src={manpic}
									className="h-[490px] w-[100%]"
								/>
							</div>
							<div className="flex justify-center flex-col">
								<div className="w-[100%] ">
									<p className="flex justify-center text-base font-semibold">
										Daniel Cho Nakai
									</p>
									<p className="w-[450px] text-sm flex justify-center">
										"I love the ChronoSphere Classic! It's a
										sleek and stylish watch
										<br /> that I can wear with anything.
										The Swiss-made quartz movement
										<br />
										ensures accurate timekeeping, and the
										chronograph function is a<br /> great
										added bonus. I highly recommend this
										watch to anyone
										<br />
										looking for a timeless and elegant
										timepiece."
									</p>
									<div className="flex justify-center gap-4">
										<img src={star} />
										<img src={star} />
										<img src={star} />
										<img src={star} />
										<img src={star} />
									</div>
								</div>
							</div>
						</div>
						<div className=" bg-orange-300 w-[100%] h-[100%]"></div>
						<div className=" bg-amber-950 w-[100%] h-[100%]"></div>
						<div className="bg-fuchsia-500 w-[100%]h-[100%]"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
