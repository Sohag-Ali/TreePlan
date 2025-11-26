import React from 'react';

const Tips = () => {
    const plantCareTips = [
  { id: 1, type: "Watering", title: "Water Only When Soil Feels Dry" },
  { id: 2, type: "Watering", title: "Use Room Temperature Water" },
  { id: 3, type: "Sunlight", title: "Provide Bright Indirect Light" },
  { id: 4, type: "Sunlight", title: "Rotate Plants Weekly" },
  { id: 5, type: "Fertilizing", title: "Fertilize During Spring & Summer" },
  { id: 6, type: "Fertilizing", title: "Don't Over-Fertilize" }
];
    return (
        <section className="py-12 bg-green-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Plant Care Tips
        </h2>
        <p className="text-green-700 mb-10">
          Simple and effective ways to keep your plants healthy.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Watering", "Sunlight", "Fertilizing"].map((category) => (
            <div key={category} className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">
                {category} Tips
              </h3>
              <ul className="space-y-3 text-gray-700">
                {plantCareTips
                  .filter((tip) => tip.type === category)
                  .map((item) => (
                    <li key={item.id}>• {item.title}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Tips;