import { House } from './house.model';

const houses: House[] = [
  {
    id: 1,
    rating: 4.5,
    title: 'Cozy Family Home',
    description:
      'A beautiful and cozy family home located in a quiet neighborhood. Perfect for families looking for a peaceful environment.',
    price: 300000,
    location: '123 Maple Street, Springfield, IL',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'images/house1/img1.jpg',
      'images/house1/img2.jpg',
      'images/house1/img3.jpg',
    ],
  },
  {
    id: 2,
    rating: 4.3,
    title: 'Modern Apartment',
    description:
      'A modern and stylish apartment located in the heart of the city. Ideal for young professionals.',
    price: 200000,
    location: '456 Oak Avenue, Chicago, IL',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      'images/house2/img1.jpg',
      'images/house2/img2.jpg',
      'images/house2/img3.jpg',
    ],
  },
  {
    id: 3,
    rating: 4.5,
    title: 'Spacious Villa',
    description:
      'A luxurious and spacious villa with a private pool and garden. Perfect for those who enjoy luxury and comfort.',
    price: 750000,
    location: '789 Pine Road, Los Angeles, CA',
    bedrooms: 6,
    bathrooms: 5,
    images: [
      'images/house3/img1.jpg',
      'images/house3/img2.jpg',
      'images/house3/img3.jpg',
    ],
  },
  {
    id: 4,
    rating: 3.5,
    title: 'Charming Cottage',
    description:
      'A charming and quaint cottage located in the countryside. Ideal for those looking for a peaceful retreat.',
    price: 150000,
    location: '101 Birch Lane, Woodstock, VT',
    bedrooms: 3,
    bathrooms: 2,
    images: [
      'images/house4/img1.jpg',
      'images/house4/img2.jpg',
      'images/house4/img3.jpg',
    ],
  },
  {
    id: 5,
    rating: 4.5,
    title: 'Luxury Penthouse',
    description:
      'A stunning luxury penthouse with panoramic city views. Ideal for those who want to live in style.',
    price: 1000000,
    location: '202 Cedar Boulevard, Miami, FL',
    bedrooms: 5,
    bathrooms: 4,
    images: [
      'images/house5/img1.jpg',
      'images/house5/img2.jpg',
      'images/house5/img3.jpg',
    ],
  },
  {
    id: 6,
    rating: 4.5,
    title: 'Beachside Bungalow',
    description:
      'A lovely bungalow located right on the beach. Enjoy the ocean breeze and beautiful sunsets.',
    price: 500000,
    location: '303 Ocean Drive, Malibu, CA',
    bedrooms: 3,
    bathrooms: 3,
    images: [
      'images/house6/img1.jpg',
      'images/house6/img2.jpg',
      'images/house6/img3.jpg',
    ],
  },
  {
    id: 7,
    rating: 4.5,
    title: 'Rustic Cabin',
    description:
      'A cozy rustic cabin in the woods. Perfect for a weekend getaway or a peaceful retreat.',
    price: 180000,
    location: '404 Forest Road, Aspen, CO',
    bedrooms: 2,
    bathrooms: 1,
    images: [
      'images/house7/img1.jpg',
      'images/house7/img2.jpg',
      'images/house7/img3.jpg',
    ],
  },
  {
    id: 8,
    rating: 4.5,
    title: 'Downtown Loft',
    description:
      'A trendy loft in the heart of downtown. Close to shops, restaurants, and nightlife.',
    price: 350000,
    location: '505 Market Street, San Francisco, CA',
    bedrooms: 1,
    bathrooms: 1,
    images: [
      'images/house8/img1.jpg',
      'images/house8/img2.jpg',
      'images/house8/img3.jpg',
    ],
  },
  {
    id: 9,
    rating: 4.5,
    title: 'Suburban House',
    description:
      'A spacious house in a suburban neighborhood. Great for families and close to schools.',
    price: 400000,
    location: '606 Elm Street, Austin, TX',
    bedrooms: 5,
    bathrooms: 4,
    images: [
      'images/house9/img1.jpg',
      'images/house9/img2.jpg',
      'images/house9/img3.jpg',
    ],
  },
  {
    id: 10,
    rating: 4.5,
    title: 'Lakefront Property',
    description:
      'A beautiful house on the lake. Enjoy fishing, boating, and stunning views.',
    price: 600000,
    location: '707 Lakeview Drive, Lake Tahoe, NV',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'images/house10/img1.jpg',
      'images/house10/img2.jpg',
      'images/house10/img3.jpg',
    ],
  },
  {
    id: 11,
    rating: 4.5,
    title: 'Urban Condo',
    description:
      'A modern condo in the city center. Convenient location with all amenities nearby.',
    price: 320000,
    location: '808 Central Avenue, New York, NY',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      'images/house11/img1.jpg',
      'images/house11/img2.jpg',
      'images/house11/img3.jpg',
    ],
  },
  {
    id: 12,
    rating: 4.5,
    title: 'Mountain Retreat',
    description:
      'A serene retreat in the mountains. Perfect for nature lovers and outdoor enthusiasts.',
    price: 450000,
    location: '909 Alpine Way, Boulder, CO',
    bedrooms: 3,
    bathrooms: 3,
    images: [
      'images/house12/img1.jpg',
      'images/house12/img2.jpg',
      'images/house12/img3.jpg',
    ],
  },
  {
    id: 13,
    rating: 4.5,
    title: 'Historic Mansion',
    description:
      'A grand mansion with historic charm and modern amenities. Ideal for those who appreciate elegance.',
    price: 850000,
    location: '1010 Heritage Lane, Charleston, SC',
    bedrooms: 7,
    bathrooms: 6,
    images: [
      'images/house13/img1.jpg',
      'images/house13/img2.jpg',
      'images/house13/img3.jpg',
    ],
  },
  {
    id: 14,
    rating: 4.5,
    title: 'Country Estate',
    description:
      'A sprawling estate in the countryside. Features a large garden and beautiful landscapes.',
    price: 950000,
    location: '1111 Country Road, Lexington, KY',
    bedrooms: 8,
    bathrooms: 7,
    images: [
      'images/house14/img1.jpg',
      'images/house14/img2.jpg',
      'images/house14/img3.jpg',
    ],
  },
  {
    id: 15,
    rating: 4.5,
    title: 'Modern Townhouse',
    description:
      'A stylish townhouse with all modern conveniences. Located in a vibrant neighborhood.',
    price: 370000,
    location: '1212 Main Street, Seattle, WA',
    bedrooms: 3,
    bathrooms: 2,
    images: [
      'images/house15/img1.jpg',
      'images/house15/img2.jpg',
      'images/house15/img3.jpg',
    ],
  },
  {
    id: 16,
    rating: 4.5,
    title: 'Farmhouse',
    description:
      'A traditional farmhouse with lots of character. Includes a barn and plenty of land.',
    price: 220000,
    location: '1313 Farm Lane, Omaha, NE',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'images/house16/img1.jpg',
      'images/house16/img2.jpg',
      'images/house16/img3.jpg',
    ],
  },
  {
    id: 17,
    rating: 4.5,
    title: 'Seaside Villa',
    description:
      'A luxurious villa by the sea. Perfect for those who love the ocean and beach lifestyle.',
    price: 700000,
    location: '1414 Shoreline Drive, Miami Beach, FL',
    bedrooms: 5,
    bathrooms: 4,
    images: [
      'images/house17/img1.jpg',
      'images/house17/img2.jpg',
      'images/house17/img3.jpg',
    ],
  },
  {
    id: 18,
    rating: 4.5,
    title: 'Urban Townhouse',
    description:
      'A contemporary townhouse in a bustling urban area. Close to public transport and amenities.',
    price: 340000,
    location: '1515 City Road, Denver, CO',
    bedrooms: 3,
    bathrooms: 2,
    images: [
      'images/house18/img1.jpg',
      'images/house18/img2.jpg',
      'images/house18/img3.jpg',
    ],
  },
  {
    id: 19,
    rating: 4.5,
    title: 'Luxury Cabin',
    description:
      'A high-end cabin in a scenic mountain area. Includes modern amenities and breathtaking views.',
    price: 650000,
    location: '1616 Hilltop Drive, Jackson Hole, WY',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'images/house19/img1.jpg',
      'images/house19/img2.jpg',
      'images/house19/img3.jpg',
    ],
  },
  {
    id: 20,
    rating: 4.5,
    title: 'Suburban Ranch',
    description:
      'A spacious ranch-style house in the suburbs. Great for families and pet owners.',
    price: 280000,
    location: '1717 Suburbia Drive, Houston, TX',
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'images/house20/img1.jpg',
      'images/house20/img2.jpg',
      'images/house20/img3.jpg',
    ],
  },
];

export default houses;
