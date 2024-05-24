import { useState } from "react";

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState("Fruits");

  const tabData = {
    Fruits: ["Apple", "Banana", "Orange"],
    Vegetables: ["Carrot", "Broccoli", "Spinach"],
    Meats: ["Chicken", "Pork", "Fish"],
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='m-20'>
      <div className="flex space-x-4">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`p-2 ${selectedTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h2>{selectedTab}:</h2>
        <ul>
          {tabData[selectedTab].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabBar;
