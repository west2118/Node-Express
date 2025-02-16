import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [renderJoke, setRenderJoke] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/jokes");

        if (!response.ok) {
          console.log("Could not fetch data!");
        }

        const data = await response.json();

        setJokes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const generateRandomJoke = useCallback(() => {
    if (jokes.length === 0) return;
    const randomNum = Math.floor(Math.random() * jokes.length);
    setRenderJoke(jokes[randomNum]?.joke || "Joke not found");
  });

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12 w-3/5">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">
            Joke Generator Using API
          </h2>

          {isLoading ? (
            <h1 className="text-white">Loading...</h1>
          ) : (
            <button
              type="button"
              onClick={generateRandomJoke}
              className="bg-white text-sm mt-4 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100">
              Generate Joke
            </button>
          )}

          {renderJoke && (
            <p className="text-white text-base text-center mt-4">
              {renderJoke}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
