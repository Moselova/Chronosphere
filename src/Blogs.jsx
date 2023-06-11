import React from "react";
import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.png";
import blog4 from "./assets/blog4.png";

export default function Blog() {
   return (
		<div className="w-[100%] h-[864px] flex flex-col justify-center">
			<div className="text-center">
				<h1 className="font-bold text-4xl">Blog And Articles</h1>
				<p className="font-semibold text-2xl mt-[8px]">
					Useful Watch Care Guides And Tips
				</p>
			</div>
			<div className="w-[100%] flex justify-center flex-col">
				<div className="flex w-[100%] justify-center gap-6 mt-[56px]">
					<div className="">
						<img src={blog1} />
						<p className="text-[#FF8B03]">Read Article</p>
					</div>
					<div className="">
						<img src={blog4} />
						<p className="text-[#FF8B03]">Read Article</p>
					</div>
					<div className="">
						<img src={blog3} />
						<p className="text-[#FF8B03]">Read Article</p>
					</div>
					<div className="">
						<img src={blog2} />
						<p className="text-[#FF8B03]">Read Article</p>
					</div>
				</div>
				<div className="flex justify-center mt-[74px] ">
					<div className="  ">
						<div>
							<p className="font-semibold text-base">
								Subscribe And Be The First To Get Blog Updates
								And New Articles
							</p>
						</div>
						<div className="flex ">
							<div className="mt-[26px]">
								<input
									type="text"
									placeholder="Enter Email"
									className="outline-none w-[348px] h-[42px] border-2 border-sky-500 pl-[10px]"
								></input>
								<button className="w-[118px] h-[42px] border-none cursor-pointer bg-[#FF8B03] text-white">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
   );
}