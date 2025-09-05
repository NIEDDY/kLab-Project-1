import picture1 from "../assets/pic1.jpeg";
import picture2 from "../assets/pic2.jpeg";
import picture3 from "../assets/pic3.jpeg";

interface Card {
  title: string;
  content: string;
  image: string;
}

const ServicePage = () => {
  const cards: Card[] = [
    {
      title: "card 1",
      content: "hello card 1",
      image: picture1,
    },
    {
      title: "card 2",
      content: "hello card 2",
      image: picture2,
    },
    {
      title: "card 3",
      content: "hello card 3",
      image: picture3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;