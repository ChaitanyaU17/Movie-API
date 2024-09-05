// import React from 'react';
import kid1 from '/kid1.jpg';
import kid2 from '/kid2.jpg';
import kid3 from '/kid3.jpg';

const categories = [
    {
      id: 1,
      title: "Kids Clothing",
      price: "Starting from 100 INR",
      age: "Age (0-6)",
      buttonText: "Explore >",
      imageUrl: kid1,
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Equipments",
      price: "Starting from 500 INR",
      age: "Age (0-6)",
      buttonText: "Explore >",
      imageUrl: kid2,
      bgColor: "bg-red-50"
    },
    {
      id: 3,
      title: "Toys",
      price: "Starting from 100 INR",
      age: "Age (0-6)",
      buttonText: "Explore >",
      imageUrl: kid3,
      bgColor: "bg-green-50"
    }
  ];

  
 
  
  const CategoriesSection = () => {
    return (
        <section className="bg-white py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`text-center ${category.bgColor} p-6 rounded-lg`}
              >
                <img src={category.imageUrl} alt={category.title} className="h-40 mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{category.title}</h3>
                <p className="text-gray-600">{category.price}</p>
                <p className="text-sm text-gray-500">{category.age}</p>
                <button className="bg-yellow-400 text-white px-4 py-2 mt-4 rounded-md hover:scale-95 transition-transform duration-300">
                  {category.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>
    )
  };
  
  export default CategoriesSection
  