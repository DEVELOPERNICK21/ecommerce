const Images = [
  {image: require('../assets/Explore/exp2.jpg')},
  {image: require('../assets/Explore/exp3.jpg')},
  {image: require('../assets/Explore/exp4.jpg')},
  {image: require('../assets/Explore/exp5.jpg')},
  {image: require('../assets/Explore/exp7.jpg')},
  {image: require('../assets/Explore/exp10.jpg')},
];

export const markers = [
  {
    coordinate: {
      latitude: 21.898296,
      longitude: 77.901772,
    },
    title: 'Amazing Car Place',
    description: 'This is the best Car place',
    image: Images[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: 21.902119,
      longitude: 77.90529,
    },
    title: 'Second Amazing Car Place',
    description: 'This is the second best Car place',
    image: Images[1].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      latitude: 21.906339,
      longitude: 77.895011,
    },
    title: 'Third Amazing Car Place',
    description: 'This is the third best Car place',
    image: Images[2].image,
    rating: 3,
    reviews: 220,
  },
  {
    coordinate: {
      latitude: 21.903403,
      longitude: 77.898395,
    },
    title: 'Fourth Amazing Car Place',
    description: 'This is the fourth best Car place',
    image: Images[3].image,
    rating: 4,
    reviews: 48,
  },
  {
    coordinate: {
      latitude: 21.901159,
      longitude: 77.896019,
    },
    title: 'Fifth Amazing Car Place',
    description: 'This is the fifth best Car place',
    image: Images[4].image,
    rating: 4,
    reviews: 178,
  },
  {
    coordinate: {
      latitude: 21.904249,
      longitude: 77.901322,
    },
    title: 'Fifth Amazing Car Place',
    description: 'This is the fifth best Car place',
    image: Images[5].image,
    rating: 3,
    reviews: 178,
  },
];

export const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
