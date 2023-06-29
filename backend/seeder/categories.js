const categories = [
  {
    name: "Books",
    description:
      "The internet’s largest bookstore.",
    image: "/images/books.jpg",
    attrs: [
      { key: "type", value: ["fiction", "comic", "novel", "dictionary", "reference"] },
    ],
  },
{
    name: "Vegetables",
    description:
      "Offering only the freshest vegetables at the lowest prices.",
    image: "/images/vegetables.jpg",
    attrs: [
      { key: "type", value: ["broccoli", "carrot", "potato", "cabbage", "onion"] }
    ],
  },
{
    name: "Makeup products",
    description:
      "Where beauty and confidence meet.",
    image: "/images/makeup.jpg",
    attrs: [
      { key: "type", value: ["lipstick", "foundation", "concealer", "mascara"] },
      { key: "size", value: ["full size", "minisize"] },
    ],
  },
{
    name: "Skincare products",
    description:
      "One step to flawless beauty.",
    image: "/images/skincare.jpg",
    attrs: [
      { key: "type", value: ["lip balm", "lotion", "serum", "cleanser", "eye cream"] },
      { key: "size", value: ["full size", "minisize"] },
    ],
  },
{
    name: "Furniture",
    description:
      "Quality Furniture for Quality Living.",
    image: "/images/furniture.jpg",
    attrs: [
      { key: "type", value: ["sofa", "table", "bed", "dresser", "cupboard"] },
      { key: "material", value: ["wood", "plywood", "steel", "polypropylene"] },
    ],
  },
{
    name: "Electronics",
    description:
      "Your electronic pharmacy.",
    image: "/images/electronics.jpg",
    attrs: [
      { key: "type", value: ["computer", "television", "cooker", "dishwasher", "oven"] },
    ],
  },
{
    name: "Snacks",
    description:
      "Enjoy the good taste.",
    image: "/images/snacks.jpg",
    attrs: [
      { key: "type", value: ["chips", "candy", "cookies", "popcorn", "cereal"] },
    ],
  },
{
    name: "Stationery",
    description:
      "Everything from stationery to giftware.",
    image: "/images/stationery.jpg",
    attrs: [
      { key: "type", value: ["pen", "pencil", "marker", "notebook", "eraser"] },
    ],
  },
{
    name: "Drinks",
    description:
      "Taking beverages to the next level.",
    image: "/images/drinks.jpg",
    attrs: [
      { key: "type", value: ["milk", "juice", "beer", "coffee", "carbonated drinks"] },
      { key: "packaging", value: ["glass", "plastic", "paperboard", "can"] },
    ],
  },
]

module.exports = categories