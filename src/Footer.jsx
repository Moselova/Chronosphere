import React from "react";
import watch from "./assets/watch.svg";
import ChronoSphere2 from "./assets/ChronoSphere2.svg";
import youtube from "./assets/youtube.svg";
import face from "./assets/face.svg";
import insta from "./assets/insta.svg";
import copy from "./assets/copy.svg";

export default function Footer() {
    return (
		<div className="h-[405px] bg-[#FF8B03] w-[100%] text-white">
			<div className="flex justify-around pt-[100px]">
				<div className="flex gap-[56px]">
					<div className="block items-center">
						<div className="ml-8">
							<img src={watch} />
						</div>
						<div>
							<img src={ChronoSphere2} />
						</div>
					</div>
					<div>
						<p className="text-[20px] font-semibold mb-[16px]">
							Resources
						</p>
						<p className="text-[16px] font-normal">Resources</p>
						<p className="text-[16px] font-normal">About us</p>
						<p className="text-[16px] font-normal">Contact Us</p>
						<p className="text-[16px] font-normal">FAQ</p>
						<p className="text-[16px] font-normal">Articles</p>
					</div>
				</div>
				<div>
					<p className="text-[20px] font-semibold mb-[16px]">
						Policies
					</p>
					<p className="text-[16px] font-normal">Reviews</p>
					<p className="text-[16px] font-normal">Cookie Policy</p>
					<p className="text-[16px] font-normal">
						Terms and Condition
					</p>
					<p className="text-[16px] font-normal">
						Physical Store Location
					</p>
				</div>
				<div>
					<div>
						<p className="text-[20px] font-semibold mb-[16px]">
							Our Socials
						</p>
					</div>
					<div className="flex gap-[36.5px]">
						<img src={insta} />
						<img src={face} />
						<img src={youtube} />
					</div>
				</div>
			</div>
			<div className="text-center pt-[90px] flex justify-center align-middle gap-5">
				<img src={copy} />
				<p className="text-[14px] font-normal">
					2023 ChronoShere. All rights
				</p>
			</div>
			<p className="text-center text-[14px] font-normal">reserved.</p>
		</div>
	);
}