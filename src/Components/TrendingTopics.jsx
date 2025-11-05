import { useState } from "react";
import { RefreshCcw } from "lucide-react";

const TrendingTopics = () => {
  const [topics, setTopics] = useState([
    "AI Based",
    "Climate Change Updates",
    "Renewable Energy Breakthroughs",
    "Green Tech Innovations",
    "Sustainable Living Tips",
    "AI Trends & Research",
    "Renewable Energy Breakthroughs",
    "Climate Change Updates",
    "Sustainable Living Tips",
    "Green Tech Innovations",
    "AI Trends & Research",

  ]);

  const refreshTopics = () => {
    // Simulated shuffle
    setTopics([...topics].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="bg-[linear-gradient(113.94deg,rgba(26,219,187,0.08)_-25.88%,rgba(20,165,237,0.08)_6.86%,rgba(127,100,251,0.08)_36.47%,rgba(243,50,101,0.08)_66.87%,rgba(255,175,132,0.08)_95.7%,rgba(255,118,108,0.08)_123.75%)] p-6 rounded-2xl text-white w-[757px] mt-8 border-gradient">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-black font-semibold">
          <span className="text-lg text-transparent bg-clip-text bg-[linear-gradient(113.94deg,#1ADBBB_-25.88%,#14A5ED_6.86%,#7F64FB_36.47%,#F33265_66.87%,#FFAF84_95.7%,#FF766C_123.75%)]">AI Suggestions </span>Trending Topics for You
        </h2>
        <button
          onClick={refreshTopics}
          className="flex items-center gap-1 border border-white bg-white/20 hover:bg-white/30 text-[#161924] px-3 py-1.5 rounded-lg transition-all text-sm"
        >
          Refresh <RefreshCcw size={14} />
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {topics.map((topic, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 cursor-pointer transition"
          >
            {topic}
            <div className="h-5 w-5 rounded-full grid place-items-center shadow-sm bg-gradient">
                <span className="text-pink-500 text-sm font-semibold leading-none">+</span>
                </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
