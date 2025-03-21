import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-950 to-gray-950 text-white text-center py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Pixel Generator</h1>
        <p className="text-lg md:text-xl opacity-90 mb-6">
          Create stunning AI-generated images with ease!
        </p>
        <Link
          to="Generate"
          className="bg-white btn   text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Generate Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
