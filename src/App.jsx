import Slider from "./Slider";
import arrowup from "./assets/arrowup.svg";

function App() {
	return (
		<div className="w-full h-[941px] relative flex justify-center">
			<div className="absolute text-white z-10 flex flex-col text-center">
				<div className="mt-[40px]">
					<h1 className="text-[70px] leading-[88px] font-semibold">
						Precision Meets Style: Explore
						<br /> Our Range of Premium Watches
					</h1>
				</div>
				<div className="mt-[20px]">
					<p className="text-[16px] font-normal">
						Discover the world of ChronoSphere watches, crafted with
						timeless
						<br /> elegance and precision. From classic to
						contemporary, our collection offers a<br /> range of
						styles to suit any occasion. Find the perfect timepiece
						to
						<br />
						complement your unique style today.
					</p>
				</div>
				<div className="mt-[30px]">
					<button className="h-[58px] w-[215px] bg-[#FF8B03]">
						Shop Now
					</button>
				</div>
				<div className="flex justify-center mt-[357px]">
					<img src={arrowup} className="" />
				</div>
			</div>
			<div></div>
			<Slider />
		</div>
	);
}

export default App;
