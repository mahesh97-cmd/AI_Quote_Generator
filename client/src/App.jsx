import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/quote`);
      setQuote(res.data.quote);
    } catch (err) {
      setQuote("Failed to fetch quote 😓");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 h-80 p-8 flex flex-col justify-center items-center rounded-2xl shadow-xl text-center w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">🧠 AI Quote Generator</h1>
        <p className="text-xl italic mb-4">"{quote}"</p>
        <button
          onClick={fetchQuote}
          disabled={loading}
          className={`bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl transition min-w-[150px] ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Loading..." : "Get New Quote"}
        </button>
      </div>
    </div>
  );
}

export default App;
