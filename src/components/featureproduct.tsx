import React from 'react';
import { Star, Heart } from 'lucide-react';

// Product interface
interface ProductProps {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  isFeatured?: boolean;
}

// ProductCard component
const ProductCard: React.FC<ProductProps> = ({
  title,
  category,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  image,
  isFeatured
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
        <span className="text-sm text-gray-500 ml-1">({reviews})</span>
      </div>
    );
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-72">
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          FEATURED
        </div>
      )}
      
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-3 right-3 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{discount}
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = `https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`;
          }}
        />
        
        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transform scale-95 group-hover:scale-100 transition-transform duration-200">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 font-medium mb-2 tracking-wider">
          {category}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
          {title}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          {renderStars(rating)}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-bold text-lg text-gray-900">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">{oldPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Updated products data with working image URLs
const products = [
  {
    id: 1,
    title: "Men Hooded Navy Blue & Grey Sweatshirt",
    category: "T-SHIRTS",
    price: "$70.00 - $95.00",
    oldPrice: "",
    discount: "19%",
    rating: 5,
    reviews: 2,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Navy Blue-Silver-White Multifunction Watch",
    category: "LEATHER",
    price: "$49.00",
    oldPrice: "$85.00",
    discount: "42%",
    rating: 4,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Women Off White Printed Blouse",
    category: "SHORTS & SKIRTS",
    price: "$47.00",
    oldPrice: "",
    discount: "",
    rating: 2.7,
    reviews: 3,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Unisex Blue Graphic Backpack",
    category: "LUGGAGE & TRAVEL",
    price: "$15.00",
    rating: 3,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Men Blue Colourblocked Mid-Top Sneakers",
    category: "CASUAL SHOES",
    price: "$45.00",
    rating: 5,
    reviews: 3,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">FEATURED PRODUCTS</h2>
            <p className="text-gray-600">Discover our handpicked collection of trending items</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            VIEW ALL
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;