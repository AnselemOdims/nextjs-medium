const Banner = () => {
	return (
		<section className="flex items-center bg-yellow-300 border-y border-black py-10 lg-py-0 md:max-w-2xl mx-auto lg:max-w-4xl">
			<div className="px-10 space-y-5">
				<h1 className="text-6xl max-w-xl font-serif">
					<span
            className="underline decoration-black decoration-4"
          >
            Medium
          </span> is a place to write, read, and connect
				</h1>
				<h2>
					It's easy and free to post your thinking on any topic and connect with
					millions of readers.
				</h2>
			</div>
      <img 
        className="hidden md:inline-flex h-32 lg:h-56"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" 
        alt="" 
      />
		</section>
	);
};

export default Banner;
