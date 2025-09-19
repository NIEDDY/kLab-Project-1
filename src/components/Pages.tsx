import React from 'react';
import { Check, Truck, Headphones, RotateCcw, Monitor, Zap, BarChart3, Edit, Headset, Code, Star } from 'lucide-react';

const KapeePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Kapee Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/image2.jpeg" 
                alt="About Kapee illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Kapee</h1>
            <p className="text-sm text-blue-600 mb-6">Welcome to kapee theme</p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Welcome to our online store, where convenience meets quality! Explore a wide range of products carefully selected to suit your lifestyle and needs, from everyday essentials to the latest trends. Our platform is designed to make shopping effortless, with intuitive navigation, detailed product descriptions, and high-quality images that help you make informed choices. Enjoy secure payment options, fast delivery, and responsive customer support every step of the way. Whether you’re browsing for yourself or searching for the perfect gift, our store ensures a seamless and enjoyable shopping experience for everyone.
            </p>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Integer tempor mauris faucibus.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Integer tempor mauris faucibus.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Sed molestus euismod elit quis.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Sed molestus euismod elit quis.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-sm text-gray-600 mb-8">Lorem ipsum dolor adipiscing elit.</p>
            
            <p className="text-gray-600 mb-12 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat tristique, 
              vestibulum et ipsum sit amet, aliquam sit rhoncus in malesuada tellus et ante. Donec tempor id 
              faucibus. Duis rhoncus lorem eros eros tincidunt, et tempor metus tristique. Quisque 
              molestie elit ex nibh tempor cursus.
            </p>
            
            {/* Service Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Truck className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
                  <p className="text-sm text-gray-600">
                    Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula. 
                    Ante At Gravida Laorris. Lorem Augue Sodales Erat. Vitae Vestibulum Arcu Urna Vel 
                    Justo. Quisque Sed Arcu Aliquam Nulls.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Headphones className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-sm text-gray-600">
                    Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula. 
                    Ante At Gravida Laorris. Lorem Augue Sodales Erat. Vitae Vestibulum Arcu Urna Vel 
                    Justo. Quisque Sed Arcu Aliquam Nulls.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">30 Days Returns</h3>
                  <p className="text-sm text-gray-600">
                    Praesent Sed Porttitor Lacuus. Integer Molestie Vehicula Porttitor In Vehicula. 
                    Ante At Gravida Laorris. Lorem Augue Sodales Erat. Vitae Vestibulum Arcu Urna Vel 
                    Justo. Quisque Sed Arcu Aliquam Nulls.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/landing.jpeg" 
                alt="Person with travel bags and accessories" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Kapee Features Section */}
      <div className="bg-white py-16">
        {/* ... rest of your features and testimonials section remain unchanged ... */}
      </div>
    </div>
  );
};

export default KapeePage;
