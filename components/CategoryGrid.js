const categories = [
    { title: "Fantasy", image: "/images/fantasy.jpg" },
    { title: "Thriller", image: "/images/thriller.jpg" },
    // Weitere Kategorien
  ];
  
  const CategoryGrid = () => {
    return (
      <div className="grid grid-cols-3 gap-4 p-6">
        {categories.map((category, index) => (
          <div key={index} className="relative bg-cover h-48" style={{ backgroundImage: `url(${category.image})` }}>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 text-white">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CategoryGrid;
  