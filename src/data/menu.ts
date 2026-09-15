export interface MenuItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  price: number;
  popular: boolean;
}

export const menuItems: MenuItem[] = [
  {
    slug: "truffle-mushroom-soup",
    name: "Truffle Mushroom Soup",
    category: "STARTERS",
    description:
      "Velvety wild mushroom soup finished with aromatic truffle oil.",
    longDescription:
      "A rich and comforting soup made with carefully selected wild mushrooms, slow-cooked to develop deep earthy flavors and finished with fragrant truffle oil.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=85",
    price: 85000,
    popular: true,
  },

  {
    slug: "beef-carpaccio",
    name: "Beef Carpaccio",
    category: "STARTERS",
    description:
      "Thinly sliced premium beef with parmesan, herbs, and delicate dressing.",
    longDescription:
      "Premium beef is thinly sliced and served with freshly shaved parmesan, aromatic herbs, and a delicate dressing for a light yet refined starter.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85",
    price: 125000,
    popular: false,
  },

  {
    slug: "grilled-ribeye",
    name: "Grilled Ribeye",
    category: "MAIN COURSE",
    description:
      "Prime ribeye grilled to your preference and served with seasonal sides.",
    longDescription:
      "A premium ribeye steak grilled to your preferred doneness and paired with carefully selected seasonal sides for a satisfying dining experience.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1800&q=85",
    price: 295000,
    popular: true,
  },

  {
    slug: "pan-seared-salmon",
    name: "Pan Seared Salmon",
    category: "MAIN COURSE",
    description:
      "Crispy-skinned salmon paired with vegetables and a light herb sauce.",
    longDescription:
      "Fresh salmon is pan-seared until perfectly crisp on the outside while remaining tender inside, then served with seasonal vegetables and a light herb sauce.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1800&q=85",
    price: 225000,
    popular: false,
  },

  {
    slug: "truffle-tagliatelle",
    name: "Truffle Tagliatelle",
    category: "PASTA",
    description:
      "Fresh tagliatelle tossed with creamy parmesan sauce and black truffle.",
    longDescription:
      "Freshly prepared tagliatelle is combined with a creamy parmesan sauce and finished with black truffle for an elegant and aromatic pasta experience.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1800&q=85",
    price: 185000,
    popular: true,
  },

  {
    slug: "seafood-linguine",
    name: "Seafood Linguine",
    category: "PASTA",
    description:
      "Linguine with fresh seafood, garlic, herbs, and a delicate tomato sauce.",
    longDescription:
      "Al dente linguine served with fresh seafood, garlic, aromatic herbs, and a delicate tomato sauce that brings together bright and savory flavors.",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1800&q=85",
    price: 175000,
    popular: false,
  },

  {
    slug: "classic-tiramisu",
    name: "Classic Tiramisu",
    category: "DESSERTS",
    description:
      "Classic Italian tiramisu with espresso, mascarpone, and cocoa.",
    longDescription:
      "A timeless Italian dessert made with espresso-soaked layers, creamy mascarpone, and a delicate dusting of cocoa powder.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1800&q=85",
    price: 75000,
    popular: true,
  },

  {
    slug: "chocolate-fondant",
    name: "Chocolate Fondant",
    category: "DESSERTS",
    description:
      "Warm dark chocolate cake with a rich molten center.",
    longDescription:
      "A warm dark chocolate dessert with a delicate cake exterior and rich molten chocolate center, creating the perfect finish to an elegant meal.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?auto=format&fit=crop&w=1800&q=85",
    price: 85000,
    popular: false,
  },
];
