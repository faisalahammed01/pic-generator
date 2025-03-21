import { useState } from "react";

const Generate = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = e.target.elements.prompt.value;

    if (!prompt.trim()) {
      alert("Please provide a prompt");
      return;
    }

    const form = new FormData();
    form.append("prompt", prompt);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": import.meta.env.VITE_CD_KEY,
      },
      body: form,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.arrayBuffer();
      })
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error generating the image.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto justify-center items-center flex flex-col h-full mt-14">
          <h2 className="text-2xl font-bold">Generate An Image</h2>
          <div className="join mt-5">
            <input
              name="prompt"
              type="text"
              placeholder="Enter prompt here"
              className="input input-bordered border-2 border-black join-item"
            />
            <button className="btn btn-neutral join-item">Generate</button>
          </div>
        </div>
      </form>

      {/* Image display section */}
      {imageUrl && (
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold">Generated Image</h3>
          <img
            src={imageUrl}
            alt="Generated"
            className="mt-5 max-w-full h-auto w-6/12 mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Generate;
