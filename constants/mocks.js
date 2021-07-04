const categories = [
  {
    id: 'plants',
    name: 'Plants',
    tags: ['products', 'inspirations'],
    count: 147,
    image: require('../assets/logo.png'),
  },
  {
    id: 'seeds',
    name: 'Seeds',
    tags: ['products', 'shop'],
    count: 16,
    image: require('../assets/logo.png'),
  },
  {
    id: 'flowers',
    name: 'Flowers',
    tags: ['products', 'inspirations'],
    count: 68,
    image: require('../assets/logo.png'),
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['products', 'shop'],
    count: 17,
    image: require('../assets/logo.png'),
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/logo.png'),
  },
  {
    id: 'fertilizers',
    name: 'fertilizers',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/logo.png'),
  },
];

const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In Your Bedroom',
    description:
      'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/logo.png'),
      require('../assets/logo.png'),
      require('../assets/logo.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/logo.png'),
      require('../assets/logo.png'),
      require('../assets/logo.png'),
      require('../assets/logo.png'),
      require('../assets/logo.png'),
      require('../assets/logo.png'),
    ],
  },
];

const explore = [
  // images
  require('../assets/logo.png'),
  require('../assets/logo.png'),
  require('../assets/logo.png'),
  require('../assets/logo.png'),
  require('../assets/logo.png'),
  require('../assets/logo.png'),
];

const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  avatar: require('../assets/logo.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

export {categories, explore, products, profile};
