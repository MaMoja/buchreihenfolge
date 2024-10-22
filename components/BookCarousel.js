const books = [
    { title: "Buch 1", image: "/images/book1.jpg" },
    { title: "Buch 2", image: "/images/book2.jpg" },
    // Weitere Bücher
  ];
  
  const BookCarousel = () => {
    return (
      <div className="flex overflow-x-auto p-6 space-x-4">
        {books.map((book, index) => (
          <div key={index} className="flex-none w-40">
            <img src={book.image} alt={book.title} className="w-full h-auto" />
            <div className="mt-2 text-center">{book.title}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default BookCarousel;
  