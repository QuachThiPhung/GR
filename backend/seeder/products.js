const products = [
  {
    name: "Alice's Adventures in Wonderland",
    description:
      "An 1865 English children's novel by Lewis Carroll.",
    count: 10,
    price: 200,
    category: "Books",
    images: [
      { path: "/images/fiction-1.jpg" },
      { path: "/images/fiction-2.jpg" },
      { path: "/images/fiction-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "fiction" },
    ],
    reviews: [],
  },
  {
    name: "Doraemon",
    description:
      "A Japanese manga series written and illustrated by Fujiko F. Fujio.",
    count: 5,
    price: 30,
    category: "Books",
    images: [
      { path: "/images/comic-1.jpg" },
      { path: "/images/comic-2.jpg" },
      { path: "/images/comic-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "comic" },
    ],
    reviews: [],
  },
  {
    name: "Pride and Prejudice",
    description:
      "An 1813 novel of manners by Jane Austen.",
    count: 10,
    price: 180,
    category: "Books",
    images: [
      { path: "/images/novel-1.jpg" },
      { path: "/images/novel-2.jpg" },
      { path: "/images/novel-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "novel" },
    ],
    reviews: [],
  },
  {
    name: "Oxford Dictionary of English",
    description:
      "The foremost single volume authority on the English language.",
    count: 50,
    price: 190,
    category: "Books",
    images: [
      { path: "/images/dic-1.jpg" },
      { path: "/images/dic-3.jpg" },
      { path: "/images/dic-2.jpg" },
    ],
    attrs: [
      { key: "type", value: "dictionary" },
    ],
    reviews: [],
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    description:
      "A fantasy novel written by British author J. K. Rowling",
    count: 45,
    price: 185,
    category: "Books",
    images: [
      { path: "/images/fiction-4.jpg" },
      { path: "/images/fiction-5.jpg" },
      { path: "/images/fiction-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "fiction" },
    ],
    reviews: [],
  },
  {
    name: "Spider-Man: Fake Red",
    description:
      "There’s a new Spider-Man in town! And he’s got a lot to learn about being a hero!",
    count: 12,
    price: 160,
    category: "Books",
    images: [
      { path: "/images/comic-4.jpg" },
      { path: "/images/comic-5.jpg" },
      { path: "/images/comic-6.png" },
    ],
    attrs: [
      { key: "type", value: "comic" },
    ],
    reviews: [],
  },

  {
    name: "To Kill a Mockingbird",
    description:
      "Harper Lee’s Pulitzer-prize winner addresses issues of race, inequality and segregation with both levity and compassion.",
    count: 50,
    price: 109,
    category: "Books",
    images: [
      { path: "/images/novel-4.jpg" },
      { path: "/images/novel-5.jpg" },
      { path: "/images/novel-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "novel" },
    ],
    reviews: [],
  },
  {
    name: "The Great Gatsby",
    description:
      "This is F. Scott Fitzgerald at his most sparkling and devastating.",
    count: 70,
    price: 100,
    category: "Books",
    images: [
      { path: "/images/novel-7.jpg" },
      { path: "/images/novel-8.jpg" },
      { path: "/images/novel-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "novel" },
    ],
    reviews: [],
  },
  {
    name: "Cambridge Advanced Learner's Dictionary",
    description:
      "A fully updated edition of the best-selling Cambridge Advanced Learner's Dictionary.",
    count: 80,
    price: 195,
    category: "Books",
    images: [
      { path: "/images/dic-4.jpg" },
      { path: "/images/dic-5.jpg" },
      { path: "/images/dic-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "dictionary" },
    ],
    reviews: [],
  },



  {
    name: "The Book of Unusual Knowledge",
    description:
      "Perfect for anyone with a curious mind and a passion for learning.",
    count: 35,
    price: 178,
    category: "Books",
    images: [
      { path: "/images/reference-1.jpg" },
      { path: "/images/reference-3.jpg" },
      { path: "/images/reference-2.jpg" },
    ],
    attrs: [
      { key: "type", value: "reference" },
    ],
    reviews: [],
  },

  {
    name: "Fresh Broccoli",
    description:
      "Rich in Minerals and Fibre.",
    count: 20,
    price: 30,
    category: "Vegetables",
    images: [
      { path: "/images/Broccoli-1.jpg" },
      { path: "/images/Broccoli-2.jpg" },
      { path: "/images/Broccoli-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "broccoli" },
    ],
    reviews: [],
  },

  {
    name: "Australian Organic Carrot",
    description:
      "Good source of Vitamin A,E,K, Potassium and Lycopene.",
    count: 8,
    price: 40,
    category: "Vegetables",
    images: [
      { path: "/images/carrot-1.jpg" },
      { path: "/images/carrot-2.jpg" },
      { path: "/images/carrot-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "carrot" },
    ],
    reviews: [],
  },

  {
    name: "Potatoes Russet Fresh Produce",
    description:
      "High in starch. Perfect to cook mashed potatoes.",
    count: 5,
    price: 60,
    category: "Vegetables",
    images: [
      { path: "/images/potato-1.jpg" },
      { path: "/images/potato-2.jpg" },
      { path: "/images/potato-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "potato" },
    ],
    reviews: [],
  },

  {
    name: "Farmers Market Locally Grown Cabbage",
    description:
      "Hand selected by personal food shoppers",
    count: 10,
    price: 50,
    category: "Vegetables",
    images: [
      { path: "/images/Cabbage-1.jpg" },
      { path: "/images/Cabbage-2.jpg" },
      { path: "/images/Cabbage-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "cabbage" },
    ],
    reviews: [],
  },

  {
    name: "Vidalia Sweet Onions",
    description:
      "This item is seasonal.",
    count: 58,
    price: 40,
    category: "Vegetables",
    images: [
      { path: "/images/onion-1.jpg" },
      { path: "/images/onion-2.jpg" },
      { path: "/images/onion-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "onion" },
    ],
    reviews: [],
  },

  {
    name: "H-E-B Broccoli Florets",
    description:
      "Easy to cook on the stovetop or in the microwave.",
    count: 60,
    price: 35,
    category: "Vegetables",
    images: [
      { path: "/images/Broccoli-4.jpg" },
      { path: "/images/Broccoli-5.jpeg" },
      { path: "/images/Broccoli-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "broccoli" },
    ],
    reviews: [],
  },

  {
    name: "Organic Rainbow Carrots",
    description:
      "From Cal-Organic Farms.",
    count: 34,
    price: 52,
    category: "Vegetables",
    images: [
      { path: "/images/carrot-4.jpg" },
      { path: "/images/carrot-5.jpg" },
      { path: "/images/carrot-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "carrot" },
    ],
    reviews: [],
  },

  {
    name: "Melissa's Fingerling Potatoes",
    description:
      "Available year round.",
    count: 14,
    price: 66,
    category: "Vegetables",
    images: [
      { path: "/images/potato-4.jpg" },
      { path: "/images/potato-5.jpg" },
      { path: "/images/potato-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "potato" },
    ],
    reviews: [],
  },

  {
    name: "Red Cabbage",
    description:
      "Product of Fresh Produce.",
    count: 12,
    price: 60,
    category: "Vegetables",
    images: [
      { path: "/images/Cabbage-4.jpg" },
      { path: "/images/Cabbage-5.jpg" },
      { path: "/images/Cabbage-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "cabbage" },
    ],
    reviews: [],
  },

  {
    name: "Fresh Produce Onion Loose",
    description:
      "Fresh Produce Onion - Economy, 1kg Pack.",
    count: 30,
    price: 45,
    category: "Vegetables",
    images: [
      { path: "/images/onion-4.jpg" },
      { path: "/images/onion-5.jpg" },
      { path: "/images/onion-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "onion" },
    ],
    reviews: [],
  },

  {
    name: "Glossy Maybelline Superstay Vinyl Ink Liquid Lipstick",
    description:
      "Longwear liquid pink lip color delivers no-budge vinyl color and up to 16 hour wear.",
    count: 50,
    price: 120,
    category: "Makeup products",
    images: [
      { path: "/images/lipstick-1.jpg" },
      { path: "/images/lipstick-2.jpg" },
      { path: "/images/lipstick-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "lipstick" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "Maybelline Fit Me Matte Foundation",
    description:
      "In 40 shades, you'll find a fit for every skin tone.",
    count: 100,
    price: 120,
    category: "Makeup products",
    images: [
      { path: "/images/foundation-1.jpg" },
      { path: "/images/foundation-2.jpg" },
      { path: "/images/foundation-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "foundation" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "e.l.f Hydrating Camo Concealer",
    description:
      "High-coverage, longwearing and perfect for hiding those pesky spots and under-eye circles.",
    count: 30,
    price: 130,
    category: "Makeup products",
    images: [
      { path: "/images/Concealer-1.jpg" },
      { path: "/images/Concealer-2.jpg" },
      { path: "/images/Concealer-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "concealer" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },

  {
    name: "Covergirl Lash Blast Volume Mascara",
    description:
      "Designed to max out every lash, Lash Blast Volume Mascara creates 10 times more volume instantly.",
    count: 10,
    price: 150,
    category: "Makeup products",
    images: [
      { path: "/images/Mascara-1.jpg" },
      { path: "/images/Mascara-2.jpg" },
      { path: "/images/Mascara-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "mascara" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "wet n wild Silk Finish LipStick",
    description:
      "100% cruelty free.",
    count: 90,
    price: 150,
    category: "Makeup products",
    images: [
      { path: "/images/lipstick-4.jpg" },
      { path: "/images/lipstick-5.jpg" },
      { path: "/images/lipstick-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "lipstick" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "Revlon Super Lustrous Lipstick",
    description:
      "High Impact Lip Color with Moisturizing Creamy Formula.",
    count: 75,
    price: 130,
    category: "Makeup products",
    images: [
      { path: "/images/lipstick-7.jpg" },
      { path: "/images/lipstick-8.jpg" },
      { path: "/images/lipstick-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "lipstick" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },

  {
    name: "Estee Lauder Double Wear Stay-in-Place Foundation",
    description:
      "The fresh matte foundation that looks flawless whatever comes your way.",
    count: 80,
    price: 180,
    category: "Makeup products",
    images: [
      { path: "/images/foundation-4.jpg" },
      { path: "/images/foundation-5.jpg" },
      { path: "/images/foundation-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "foundation" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },

  {
    name: "L.A. Girl Pro Conceal HD Concealer",
    description:
      "Camouflages the appearance of skin imperfections.",
    count: 65,
    price: 135,
    category: "Makeup products",
    images: [
      { path: "/images/Concealer-4.jpg" },
      { path: "/images/Concealer-5.jpg" },
      { path: "/images/Concealer-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "concealer" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "Maybelline The Falsies Lash Lift Washable Mascara",
    description:
      "Volumizing, Lengthening, Lifting, Curling, Multiplying.",
    count: 50,
    price: 150,
    category: "Makeup products",
    images: [
      { path: "/images/Mascara-4.jpg" },
      { path: "/images/Mascara-5.jpg" },
      { path: "/images/Mascara-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "mascara" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "Thrive Causemetics Liquid Lash Extensions Mascara",
    description:
      "Crystal (Brown Black).",
    count: 16,
    price: 105,
    category: "Makeup products",
    images: [
      { path: "/images/Mascara-7.jpg" },
      { path: "/images/Mascara-8.jpg" },
    ],
    attrs: [
      { key: "type", value: "mascara" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },

  {
    name: "L'Oreal Paris Colour Riche Lipcolour",
    description:
      "Indulge in richness beyond compare with our most luxuriously rich color and hydration.",
    count: 71,
    price: 125,
    category: "Makeup products",
    images: [
      { path: "/images/lipstick-10.jpg" },
      { path: "/images/lipstick-11.jpg" },
      { path: "/images/lipstick-12.jpg" },
    ],
    attrs: [
      { key: "type", value: "lipstick" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "Anti-Aging Foundation by Almay",
    description:
      "Smart Shade Face Makeup with Hyaluronic Acid, Niacinamide, Vitamin C & E.",
    count: 25,
    price: 110,
    category: "Makeup products",
    images: [
      { path: "/images/foundation-7.jpg" },
      { path: "/images/foundation-8.jpg" },
      { path: "/images/foundation-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "foundation" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "NIVEA Strawberry Lip Care",
    description:
      "Lips feel instantly hydrated and protected from dryness with all-day nourishing moisture.",
    count: 80,
    price: 80,
    category: "Skincare products",
    images: [
      { path: "/images/Lipbalm-1.jpg" },
      { path: "/images/Lipbalm-2.jpg" },
      { path: "/images/Lipbalm-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "lip balm" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },



  {
    name: "CeraVe Daily Moisturizing Lotion",
    description:
      "Body Lotion & Facial Moisturizer with Hyaluronic Acid and Ceramides.",
    count: 9,
    price: 135,
    category: "Skincare products",
    images: [
      { path: "/images/lotion-1.jpg" },
      { path: "/images/lotion-2.jpg" },
      { path: "/images/lotion-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "lotion" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },



  {
    name: "Neutrogena Hydro Boost Serum",
    description:
      "Oil-Free and Non-Comedogenic Face Serum Formula for Glowing Complexion.",
    count: 72,
    price: 149,
    category: "Skincare products",
    images: [
      { path: "/images/serum-1.jpg" },
      { path: "/images/serum-2.jpg" },
      { path: "/images/serum-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "serum" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },



  {
    name: "Bioré Deep Pore Charcoal Face Wash",
    description:
      "Purify your pores naturally.",
    count: 35,
    price: 87,
    category: "Skincare products",
    images: [
      { path: "/images/cleanser-1.jpg" },
      { path: "/images/cleanser-2.jpg" },
      { path: "/images/cleanser-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "cleanser" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },



  {
    name: "CETAPHIL Hydrating Eye Gel-Cream",
    description:
      "Brightens and Smooths Under Eyes , 24 Hour Hydration for All Skin Types.",
    count: 10,
    price: 154,
    category: "Skincare products",
    images: [
      { path: "/images/eye-cream-1.jpg" },
      { path: "/images/eye-cream-2.jpg" },
      { path: "/images/eye-cream-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "eye cream" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },



  {
    name: "Burt's Bees Lip Balm",
    description:
      "Moisturizing Lip Care, for All Day Hydration.",
    count: 100,
    price: 75,
    category: "Skincare products",
    images: [
      { path: "/images/Lipbalm-4.jpg" },
      { path: "/images/Lipbalm-5.jpg" },
      { path: "/images/Lipbalm-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "lip balm" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },



  {
    name: "NIVEA Shea Nourish Body Lotion",
    description:
      "Dry Skin Lotion with Shea Butter.",
    count: 23,
    price: 145,
    category: "Skincare products",
    images: [
      { path: "/images/lotion-4.jpg" },
      { path: "/images/lotion-5.jpg" },
      { path: "/images/lotion-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "lotion" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },



  {
    name: "StriVectin Super C Creams and Serums",
    description:
      "For Brightening and Correcting Dark Spots and Uneven Skin Tone.",
    count: 65,
    price: 156,
    category: "Skincare products",
    images: [
      { path: "/images/serum-4.jpg" },
      { path: "/images/serum-5.jpg" },
      { path: "/images/serum-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "serum" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },



  {
    name: "Neutrogena Hydro Boost Lightweight Hydrating Facial Gel Cleanser",
    description:
      "Gentle Face Wash & Makeup Remover with Hyaluronic Acid, Hypoallergenic & Paraben-Free.",
    count: 100,
    price: 120,
    category: "Skincare products",
    images: [
      { path: "/images/cleanser-4.jpg" },
      { path: "/images/cleanser-5.jpg" },
      { path: "/images/cleanser-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "cleanser" },
      { key: "size", value: "minisize" },
    ],
    reviews: [],
  },



  {
    name: "Filorga Optim-Eyes Eye Cream",
    description:
      "Revitalizing 3-in-1 Skin Treatment for Rapid Reduction of Dark Circles, Wrinkles & Puffiness Around the Eyes.",
    count: 8,
    price: 185,
    category: "Skincare products",
    images: [
      { path: "/images/eye-cream-4.jpg" },
      { path: "/images/eye-cream-5.jpg" },
      { path: "/images/eye-cream-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "eye cream" },
      { key: "size", value: "full size" },
    ],
    reviews: [],
  },

  {
    name: "SLNFXC American Style Pull Button Fabric Sofa",
    description:
      "Imported fleece, delicate touch, wear-resistant and tear-resistant.",
    count: 10,
    price: 190,
    category: "Furniture",
    images: [
      { path: "/images/sofa-1.jpg" },
      { path: "/images/sofa-2.jpg" },
      { path: "/images/sofa-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "sofa" },
      { key: "material", value: "steel" },
    ],
    reviews: [],
  },



  {
    name: "ZINUS Josh Loveseat Sofa",
    description:
      "Polyester Fabric With Foam and Fiber Cushions.",
    count: 20,
    price: 180,
    category: "Furniture",
    images: [
      { path: "/images/sofa-4.jpg" },
      { path: "/images/sofa-5.jpg" },
      { path: "/images/sofa-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "sofa" },
      { key: "material", value: "wood" },
    ],
    reviews: [],
  },



  {
    name: "MUUEGM Futon Sofa Bed",
    description:
      "The backrest of the multifunctional sofa bed is adjustable in three steps from 120°-160°-180°.",
    count: 96,
    price: 177,
    category: "Furniture",
    images: [
      { path: "/images/sofa-7.jpg" },
      { path: "/images/sofa-8.jpg" },
      { path: "/images/sofa-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "sofa" },
      { key: "material", value: "steel" },
    ],
    reviews: [],
  },



  {
    name: "Flash Furniture Madelyn Folding Card Table",
    description:
      "Portable Square Table with Collapsible Legs.",
    count: 50,
    price: 140,
    category: "Furniture",
    images: [
      { path: "/images/table-1.jpg" },
      { path: "/images/table-2.jpg" },
      { path: "/images/table-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "table" },
      { key: "material", value: "steel" },
    ],
    reviews: [],
  },



  {
    name: "Sauder North Avenue Coffee Table",
    description:
      "Open shelving for storage and display.",
    count: 60,
    price: 155,
    category: "Furniture",
    images: [
      { path: "/images/table-4.jpg" },
      { path: "/images/table-5.jpg" },
      { path: "/images/table-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "table" },
      { key: "material", value: "wood" },
    ],
    reviews: [],
  },



  {
    name: "coucheta Queen Size Bed Frame",
    description:
      "No Box Spring Needed, Noise Free.",
    count: 65,
    price: 172,
    category: "Furniture",
    images: [
      { path: "/images/bed-1.jpg" },
      { path: "/images/bed-2.jpg" },
      { path: "/images/bed-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "bed" },
      { key: "material", value: "plywood" },
    ],
    reviews: [],
  },



  {
    name: "VECELO 14 Inch Twin Size Metal Platform Bed Frame",
    description:
      "Heavy Duty Mattress Foundation with Steel Slats Support.",
    count: 80,
    price: 170,
    category: "Furniture",
    images: [
      { path: "/images/bed-4.jpg" },
      { path: "/images/bed-5.jpg" },
      { path: "/images/bed-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "bed" },
      { key: "material", value: "steel" },
    ],
    reviews: [],
  },



  {
    name: "AZL1 Life Concept Storage Tower with Shelves",
    description:
      "4 Drawers Closet Organizer, Night Stand, Fabric Bins, Versatile Cabinet.",
    count: 70,
    price: 165,
    category: "Furniture",
    images: [
      { path: "/images/dresser-1.jpg" },
      { path: "/images/dresser-2.jpg" },
      { path: "/images/dresser-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "dresser" },
      { key: "material", value: "wood" },
    ],
    reviews: [],
  },



  {
    name: "YITAHOME Vertical Dresser for Bedroom",
    description:
      "5 drawers of different sizes provide more storage choices.",
    count: 72,
    price: 172,
    category: "Furniture",
    images: [
      { path: "/images/dresser-4.jpg" },
      { path: "/images/dresser-5.jpg" },
      { path: "/images/dresser-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "dresser" },
      { key: "material", value: "steel" },
    ],
    reviews: [],
  },



  {
    name: "Manhattan Comfort Rockefeller Mid-Century Modern Bedroom Dresser",
    description:
      "Have a Gorgeously Stylish Storage Unit in Your Place.",
    count: 25,
    price: 196,
    category: "Furniture",
    images: [
      { path: "/images/dresser-7.jpg" },
      { path: "/images/dresser-8.jpg" },
      { path: "/images/dresser-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "dresser" },
      { key: "material", value: "plywood" },
    ],
    reviews: [],
  },



  {
    name: "ClosetMaid Pantry Cabinet Cupboard",
    description:
      "Creating functional kitchen or utility room storage options.",
    count: 60,
    price: 155,
    category: "Furniture",
    images: [
      { path: "/images/cupboard-1.jpg" },
      { path: "/images/cupboard-2.jpg" },
      { path: "/images/cupboard-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "cupboard" },
      { key: "material", value: "wood" },
    ],
    reviews: [],
  },



  {
    name: "CleverMade OMNIMODUS Cupboard",
    description:
      "Simple assembly can be completed by one person; no tools needed.",
    count: 78,
    price: 169,
    category: "Furniture",
    images: [
      { path: "/images/cupboard-4.jpg" },
      { path: "/images/cupboard-5.jpg" },
      { path: "/images/cupboard-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "cupboard" },
      { key: "material", value: "polypropylene" },
    ],
    reviews: [],
  },

  {
    name: "ASUS CX1500CNA-AS84F Chromebook CX1",
    description:
      "15.6’’ Full HD NanoEdge Display, Intel Celeron N3350 Processor, 64GB eMMC Storage, 8GB RAM, Chrome OS, Transparent Silver, CX1500CNA-AS84F.",
    count: 60,
    price: 195,
    category: "Electronics",
    images: [
      { path: "/images/computer-1.jpg" },
      { path: "/images/computer-2.jpg" },
      { path: "/images/computer-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "computer" },
    ],
    reviews: [],
  },



  {
    name: "Lenovo 3i Chromebook 2023",
    description:
      "Chrome OS - 15.6’’ Full HD - 8GB Memory - 64GB Storage - Intel Celeron N4500 - Abyss Blue.",
    count: 50,
    price: 185,
    category: "Electronics",
    images: [
      { path: "/images/computer-4.jpg" },
      { path: "/images/computer-5.jpg" },
      { path: "/images/computer-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "computer" },
    ],
    reviews: [],
  },



  {
    name: "VIZIO 40-inch D-Series Full HD Smart TV",
    description:
      "1080p High-Definition - Watch TV in crisp, clear 1080p Full HD resolution and experience a brilliant picture with the VIZIO D-Series.",
    count: 40,
    price: 168,
    category: "Electronics",
    images: [
      { path: "/images/television-1.jpg" },
      { path: "/images/television-2.jpg" },
      { path: "/images/television-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "television" },
    ],
    reviews: [],
  },



  {
    name: "LG Signature 88-inch Class OLED Z2 Series 8K SmartTV",
    description:
      "8K Resolution & OLED Picture Quality.",
    count: 46,
    price: 188,
    category: "Electronics",
    images: [
      { path: "/images/television-4.jpg" },
      { path: "/images/television-5.jpg" },
      { path: "/images/television-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "television" },
    ],
    reviews: [],
  },



  {
    name: "NESCO NPC-9 Smart Electric Pressure Cooker",
    description:
      "Multi-functional: Designed for pressure canning, pressure cooking, steam cooking and slow cooking.",
    count: 52,
    price: 129,
    category: "Electronics",
    images: [
      { path: "/images/cooker-1.jpg" },
      { path: "/images/cooker-2.jpg" },
      { path: "/images/cooker-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "cooker" },
    ],
    reviews: [],
  },



  {
    name: "Ninja Foodi 9-in-1 Pressure Cooker",
    description:
      "The best of pressure cooking and air frying all in one pot.",
    count: 48,
    price: 139,
    category: "Electronics",
    images: [
      { path: "/images/cooker-4.jpg" },
      { path: "/images/cooker-5.jpg" },
      { path: "/images/cooker-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "cooker" },
    ],
    reviews: [],
  },

  {
    name: "COMFEE’ Countertop Dishwasher",
    description:
      "6 Place settings, suitable for dorms, RVs and apartments.",
    count: 99,
    price: 189,
    category: "Electronics",
    images: [
      { path: "/images/dishwasher-1.jpg" },
      { path: "/images/dishwasher-2.jpg" },
      { path: "/images/dishwasher-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "dishwasher" },
    ],
    reviews: [],
  },

  {
    name: "FRIGIDAIRE FFBD1831US Dishwasher",
    description:
      "Dual Spray Arm System, fits up to 8 place settings.",
    count: 31,
    price: 114,
    category: "Electronics",
    images: [
      { path: "/images/dishwasher-4.jpg" },
      { path: "/images/dishwasher-5.jpg" },
      { path: "/images/dishwasher-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "dishwasher" },
    ],
    reviews: [],
  },

  {
    name: "Ninja DCT451 12-in-1 Smart Double Oven",
    description:
      "With FlexDoor, Thermometer, FlavorSeal, Smart Finish, Rapid Top Convection and Air Fry Bottom.",
    count: 47,
    price: 149,
    category: "Electronics",
    images: [
      { path: "/images/oven-1.jpg" },
      { path: "/images/oven-2.jpg" },
      { path: "/images/oven-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "oven" },
    ],
    reviews: [],
  },

  {
    name: "NUWAVE BRAVO XL 30-Quart Convection Oven",
    description:
      "Flavor Infusion Technology with Integrated Digital Temperature Probe; 12 Presets; 3 Fan Speeds; 5-Quartz Heating Elements.",
    count: 27,
    price: 169,
    category: "Electronics",
    images: [
      { path: "/images/oven-4.jpg" },
      { path: "/images/oven-5.jpg" },
      { path: "/images/oven-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "oven" },
    ],
    reviews: [],
  },

  {
    name: "Happy Belly Classic Salted Potato Chips",
    description:
      "Tasty snack for the whole family.",
    count: 13,
    price: 77,
    category: "Snacks",
    images: [
      { path: "/images/chips-1.jpg" },
      { path: "/images/chips-2.jpg" },
      { path: "/images/chips-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "chips" },
    ],
    reviews: [],
  },

  {
    name: "Quest Nutrition Tortilla Style Protein Chips",
    description:
      "Enjoy more, Carb less.",
    count: 8,
    price: 24,
    category: "Snacks",
    images: [
      { path: "/images/chips-4.jpg" },
      { path: "/images/chips-5.jpg" },
      { path: "/images/chips-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "chips" },
    ],
    reviews: [],
  },

  {
    name: "Terra Original Vegetable Chips with Sea Salt",
    description:
      "Real vegetable chips made with non-GMO ingredients.",
    count: 14,
    price: 98,
    category: "Snacks",
    images: [
      { path: "/images/chips-7.jpg" },
      { path: "/images/chips-8.jpg" },
      { path: "/images/chips-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "chips" },
    ],
    reviews: [],
  },

  {
    name: "Nerds Gummy Clusters Candy",
    description:
      "Each Nerds gummy cluster is a crunchy, chewy, sweet explosion.",
    count: 16,
    price: 51,
    category: "Snacks",
    images: [
      { path: "/images/candy-1.jpg" },
      { path: "/images/candy-2.jpg" },
      { path: "/images/candy-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "candy" },
    ],
    reviews: [],
  },

  {
    name: "Laffy Taffy Candy Individually Wrapped Mini Bars",
    description:
      "Laffy Taffy Assorted Chews turn each bite into a delight with a fruity flavor made to savor.",
    count: 78,
    price: 126,
    category: "Snacks",
    images: [
      { path: "/images/candy-4.jpg" },
      { path: "/images/candy-5.jpg" },
      { path: "/images/candy-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "candy" },
    ],
    reviews: [],
  },

  {
    name: "Hi-Chew Bag Fantasy Mix",
    description:
      "Blue Raspberry, Blue Hawaii, Rainbow Sherbet.",
    count: 45,
    price: 145,
    category: "Snacks",
    images: [
      { path: "/images/candy-7.jpg" },
      { path: "/images/candy-8.jpg" },
      { path: "/images/candy-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "candy" },
    ],
    reviews: [],
  },

  {
    name: "Happy Belly Pecan Shortbread",
    description:
      "Perfect snack for lunch time, play time, travel time or any time.",
    count: 27,
    price: 32,
    category: "Snacks",
    images: [
      { path: "/images/cookies-1.jpg" },
      { path: "/images/cookies-2.jpg" },
      { path: "/images/cookies-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "cookies" },
    ],
    reviews: [],
  },

  {
    name: "Mightylicious – Handcrafted Cookies",
    description:
      "Life’s complicated, cookies shouldn't be!.",
    count: 4,
    price: 162,
    category: "Snacks",
    images: [
      { path: "/images/cookies-4.jpg" },
      { path: "/images/cookies-5.jpg" },
      { path: "/images/cookies-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "cookies" },
    ],
    reviews: [],
  },

  {
    name: "ACT 2 Butter Lovers Microwave Popcorn",
    description:
      "100% Whole Grain.",
    count: 36,
    price: 130,
    category: "Snacks",
    images: [
      { path: "/images/popcorn-1.jpg" },
      { path: "/images/popcorn-2.jpg" },
      { path: "/images/popcorn-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "popcorn" },
    ],
    reviews: [],
  },

  {
    name: "Smartfood Popcorn Variety Pack",
    description:
      "Includes (20) 0.5 ounce Bags of White Cheddar popcorn, (12) 0.5 oz bags of Sweet and Salty Kettle Corn, and (8) bags of Movie Theater Butter popcorn.",
    count: 43,
    price: 172,
    category: "Snacks",
    images: [
      { path: "/images/popcorn-4.jpg" },
      { path: "/images/popcorn-5.jpg" },
      { path: "/images/popcorn-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "popcorn" },
    ],
    reviews: [],
  },

  {
    name: "Natures Path Cereal Flax Plus Maple Pecan",
    description:
      "Nutrient-Packed Breakfast: Fill Up On Organic Ingredients That Provide You With The Energy You Need To Tackle The Day.",
    count: 10,
    price: 120,
    category: "Snacks",
    images: [
      { path: "/images/cereal-1.jpg" },
      { path: "/images/cereal-2.jpg" },
      { path: "/images/cereal-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "cereal" },
    ],
    reviews: [],
  },

  {
    name: "Cinnamon Toast Crunch Minis Breakfast Cereal",
    description:
      "Crispy, sweetened whole wheat and rice puffs for a breakfast cereal everyone can enjoy.",
    count: 19,
    price: 86,
    category: "Snacks",
    images: [
      { path: "/images/cereal-4.jpg" },
      { path: "/images/cereal-5.jpg" },
      { path: "/images/cereal-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "cereal" },
    ],
    reviews: [],
  },

  {
    name: "uniball Vision Rollerball Pens with 0.7mm Fine Point",
    description:
      "Capture the details with the superior precision of our roller ball pens.",
    count: 6,
    price: 47,
    category: "Stationery",
    images: [
      { path: "/images/pen-1.jpg" },
      { path: "/images/pen-2.jpg" },
      { path: "/images/pen-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "pen" },
    ],
    reviews: [],
  },

  {
    name: "PARKER Duofold Centennial Fountain Pen",
    description:
      "Centennial Size fountain pen with larger barrel, cap, and nib.",
    count: 11,
    price: 118,
    category: "Stationery",
    images: [
      { path: "/images/pen-4.jpg" },
      { path: "/images/pen-5.jpg" },
      { path: "/images/pen-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "pen" },
    ],
    reviews: [],
  },

  {
    name: "Paper Mate Gel Pen",
    description:
      "Gel pens that provide smooth, crisp, effortless lines.",
    count: 51,
    price: 13,
    category: "Stationery",
    images: [
      { path: "/images/pen-7.jpg" },
      { path: "/images/pen-8.jpg" },
      { path: "/images/pen-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "pen" },
    ],
    reviews: [],
  },

  {
    name: "Paper Mate EverStrong #2 Pencils",
    description:
      "Capture the details with the superior precision of our roller ball pens.",
    count: 19,
    price: 4,
    category: "Stationery",
    images: [
      { path: "/images/pencil-1.jpg" },
      { path: "/images/pencil-2.jpg" },
      { path: "/images/pencil-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "pencil" },
    ],
    reviews: [],
  },

  {
    name: "Ticonderoga Pencils",
    description:
      "Exclusive #2 Graphite Formula.",
    count: 49,
    price: 6,
    category: "Stationery",
    images: [
      { path: "/images/pencil-4.jpg" },
      { path: "/images/pencil-5.jpg" },
      { path: "/images/pencil-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "pencil" },
    ],
    reviews: [],
  },

  {
    name: "EXPO Low Odor Dry Erase Markers",
    description:
      "Ultra-fine tip for precise marking in small spaces.",
    count: 55,
    price: 7,
    category: "Stationery",
    images: [
      { path: "/images/marker-1.jpg" },
      { path: "/images/marker-2.jpg" },
      { path: "/images/marker-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "marker" },
    ],
    reviews: [],
  },

  {
    name: "Prismacolor Premier Double-Ended Art Markers",
    description:
      "Dual-ended markers featuring both fine and chisel tips.",
    count: 82,
    price: 28,
    category: "Stationery",
    images: [
      { path: "/images/marker-4.jpg" },
      { path: "/images/marker-5.jpg" },
      { path: "/images/marker-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "marker" },
    ],
    reviews: [],
  },

  {
    name: "Crayola Super Tips Bulk Marker Set (120 Count)",
    description:
      "Kids Washable & Scented Markers.",
    count: 33,
    price: 26,
    category: "Stationery",
    images: [
      { path: "/images/marker-7.jpg" },
      { path: "/images/marker-8.jpg" },
      { path: "/images/marker-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "marker" },
    ],
    reviews: [],
  },

  {
    name: "Five Star Personal Size Spiral Notebook",
    description:
      "Perfectly sized for when you're on the go.",
    count: 43,
    price: 7,
    category: "Stationery",
    images: [
      { path: "/images/notebook-1.jpg" },
      { path: "/images/notebook-2.jpg" },
      { path: "/images/notebook-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "notebook" },
    ],
    reviews: [],
  },

  {
    name: "Moleskine Classic Expanded Notebook",
    description:
      "Perfect notebooks for writing journals, a daily diary, or note taking in college classes or meetings.",
    count: 37,
    price: 14,
    category: "Stationery",
    images: [
      { path: "/images/notebook-4.jpg" },
      { path: "/images/notebook-5.jpg" },
      { path: "/images/notebook-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "notebook" },
    ],
    reviews: [],
  },

  {
    name: "Ticonderoga Wedge Erasers",
    description:
      "Soft pink erasers remove pencil marks cleanly without smudges.",
    count: 53,
    price: 6,
    category: "Stationery",
    images: [
      { path: "/images/eraser-1.jpg" },
      { path: "/images/eraser-2.jpg" },
      { path: "/images/eraser-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "eraser" },
    ],
    reviews: [],
  },

  {
    name: "Pentel Hi-Polymer Large Block Eraser",
    description:
      "Erases cleanly with no dust left behind.",
    count: 37,
    price: 1,
    category: "Stationery",
    images: [
      { path: "/images/eraser-4.jpg" },
      { path: "/images/eraser-5.jpg" },
      { path: "/images/eraser-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "eraser" },
    ],
    reviews: [],
  },

  {
    name: "Silk Shelf-Stable Almond Milk",
    description:
      "Original, Dairy-Free, Vegan, Non-GMO Project Verified.",
    count: 97,
    price: 86,
    category: "Drinks",
    images: [
      { path: "/images/milk-1.jpg" },
      { path: "/images/milk-2.jpg" },
      { path: "/images/milk-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "milk" },
      { key: "packaging", value: "paperboard" },
    ],
    reviews: [],
  },

  {
    name: "Parrot Coconut Milk Drink",
    description:
      "Contain 52% Juice, With Coconut Pulp, non- GMO, Dairy Free.",
    count: 24,
    price: 67,
    category: "Drinks",
    images: [
      { path: "/images/milk-4.jpg" },
      { path: "/images/milk-5.jpg" },
      { path: "/images/milk-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "milk" },
      { key: "packaging", value: "glass" },
    ],
    reviews: [],
  },

  {
    name: "Baker's Corner Evaporated Milk",
    description:
      "Great for all your cooking and baking needs.",
    count: 26,
    price: 72,
    category: "Drinks",
    images: [
      { path: "/images/milk-7.jpg" },
      { path: "/images/milk-8.jpg" },
      { path: "/images/milk-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "milk" },
      { key: "packaging", value: "can" },
    ],
    reviews: [],
  },

  {
    name: "Tropicana 100% Juice 3-flavor Classic Variety Pack",
    description:
      "The perfect beverage to pack in lunches or drink on the go.",
    count: 58,
    price: 35,
    category: "Drinks",
    images: [
      { path: "/images/juice-1.jpg" },
      { path: "/images/juice-2.jpg" },
      { path: "/images/juice-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "juice" },
      { key: "packaging", value: "plastic" },
    ],
    reviews: [],
  },

  {
    name: "Ceres 100% All Natural Pure Fruit Juice Blend",
    description:
      "100% juice- All Natural 100% pure fruit juice, flash pasteurized to guarantee quality.",
    count: 52,
    price: 33,
    category: "Drinks",
    images: [
      { path: "/images/juice-4.jpg" },
      { path: "/images/juice-5.jpg" },
      { path: "/images/juice-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "juice" },
      { key: "packaging", value: "paperboard" },
    ],
    reviews: [],
  },

  {
    name: "Lakewood Organic Pure Concord Grape Juice",
    description:
      "100% Concord Grape Juice.",
    count: 63,
    price: 60,
    category: "Drinks",
    images: [
      { path: "/images/juice-7.jpg" },
      { path: "/images/juice-8.jpg" },
      { path: "/images/juice-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "juice" },
      { key: "packaging", value: "plastic" },
    ],
    reviews: [],
  },

  {
    name: "Bud Light (12 packs)",
    description:
      "Premium light lager brewed in the USA.",
    count: 51,
    price: 21,
    category: "Drinks",
    images: [
      { path: "/images/beer-1.jpg" },
      { path: "/images/beer-2.jpg" },
      { path: "/images/beer-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "beer" },
      { key: "packaging", value: "can" },
    ],
    reviews: [],
  },



  {
    name: "Super Coffee (12 packs)",
    description:
      "It's the latte you love but made with only positive ingredients.",
    count: 70,
    price: 12,
    category: "Drinks",
    images: [
      { path: "/images/coffee-1.jpg" },
      { path: "/images/coffee-2.jpg" },
      { path: "/images/coffee-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "coffee" },
      { key: "packaging", value: "plastic" },
    ],
    reviews: [],
  },



  {
    name: "Starbucks Flavored Ground Coffee",
    description:
      "Hazelnut Coffee",
    count: 62,
    price: 51,
    category: "Drinks",
    images: [
      { path: "/images/coffee-4.jpg" },
      { path: "/images/coffee-5.png" },
      { path: "/images/coffee-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "coffee" },
      { key: "packaging", value: "paperboard" },
    ],
    reviews: [],
  },



  {
    name: "Perrier Sparkling Water",
    description:
      "The natural mineral water captured at the source in the South of France.",
    count: 30,
    price: 18,
    category: "Drinks",
    images: [
      { path: "/images/carbonated-1.jpg" },
      { path: "/images/carbonated-2.jpg" },
      { path: "/images/carbonated-3.jpg" },
    ],
    attrs: [
      { key: "type", value: "carbonated" },
      { key: "packaging", value: "can" },
    ],
    reviews: [],
  },



  {
    name: "Faygo Moon Mist Citrus Carbonated Soda",
    description:
      "Citrus Flavor.",
    count: 34,
    price: 8,
    category: "Drinks",
    images: [
      { path: "/images/carbonated-4.jpg" },
      { path: "/images/carbonated-5.png" },
      { path: "/images/carbonated-6.jpg" },
    ],
    attrs: [
      { key: "type", value: "carbonated" },
      { key: "packaging", value: "plastic" },
    ],
    reviews: [],
  },



  {
    name: "Shirakiku Ramune Drink",
    description:
      "Melon Carbonated Marble Soft Drink of Japan.",
    count: 36,
    price: 67,
    category: "Drinks",
    images: [
      { path: "/images/carbonated-7.jpg" },
      { path: "/images/carbonated-8.jpg" },
      { path: "/images/carbonated-9.jpg" },
    ],
    attrs: [
      { key: "type", value: "carbonated" },
      { key: "packaging", value: "glass" },
    ],
    reviews: [],
  },
]

module.exports = products