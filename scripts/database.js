/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
  fish: [
    {
      name: "Flutter",
      image: "https://images7.alphacoders.com/591/591710.jpg",
      species: "Butterfly Fish",
      length: 3,
      origin: "Kerala, India",
      food: "Plankton",
    },
    {
      name: "Shiya",
      image: "https://tse3.mm.bing.net/th?id=OIP.OEOvANgsB34uVskDd8aqmwHaE6&pid=Api",
      species: "Blue Seastar",
      length: 4,
      origin: "Fiji",
      food: "Shrimp",
    },
    {
      name: "Bruce Lee",
      image: "https://cdn.shopify.com/s/files/1/1163/2672/products/Black_Ghost_Knifefish_4_1024x1024.jpg?v=1570742493",
      species: "Black Ghost Knifefish",
      length: 18,
      origin: "Marrakesh, Morocco",
      food: "The blood of its enemies",
    },
    {
      name: "Cookie",
      image: "https://www.sagarfishaquarium.in/wp-content/uploads/2017/12/Discus-fish-for-sale-look-for-colour.jpg",
      species: "Discus Chiclid",
      length: 10,
      origin: "Sao Paolo, Brazil",
      food: "Cookies, Pizza, anything round",
    },
    {
      name: "Simba",
      image: "https://secureservercdn.net/198.71.233.129/22d.937.myftpupload.com/wp-content/uploads/2014/10/Lionfish.jpg",
      species: "Lionfish",
      length: 20,
      origin: "Horn of Africa",
      food: "Grubs (slimy & satisfying)",
    },
    {
      name: "Blinky, Pinky, Inky, and Clyde",
      image: "https://www.buildyouraquarium.com/wp-content/uploads/2020/02/types-of-clownfish.jpg",
      species: "Clownfish",
      length: 10,
      origin: "Auckland, New Zealand",
      food: "Popcorn, Soft Pretzels, and Funnel Cake",
    },
  ],
};

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}