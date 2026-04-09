const hotels = [
  {
    id: 1,
    name: "Radisson RED Chandigarh Mohali",
    rating: "⭐ 4.9",
    price: "9000",
    location: "📍 Sector 66, Airport Road, Mohali",
    totalRooms: 10,
    availableRooms: 5,
    rooms: [
      {
        roomId: 101,
        roomType: "Deluxe Room",
        img: "/Images/regenta.jpg",
        price: "9000",
        bed: "King Size Bed",
        size: "350 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC", "Free WiFi", "TV", "Mini Bar"],
        description: "Spacious deluxe room with modern interior and city view."
      }
    ]
  },

  {
    id: 2,
    name: "Best Western Plus Chandigarh Mohali",
    rating: "⭐ 4.6",
    price: "6500",
    location: "📍 Sector 75, Industrial Area, Mohali",
    totalRooms: 8,
    availableRooms: 3,
    rooms: [
      {
        roomId: 102,
        roomType: "Executive Room",
        img: "/Images/roomimg4.jpg",
        price: "6500",
        bed: "Queen Size Bed",
        size: "300 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC", "WiFi", "TV"],
        description: "Comfortable executive room with all basic facilities."
      }
    ]
  },

  {
    id: 3,
    name: "Hotel Cama",
    rating: "⭐ 4.3",
    price: "4500",
    location: "📍 Phase 3A, Sector 53, Mohali",
    totalRooms: 6,
    availableRooms: 2,
    rooms: [
      {
        roomId: 103,
        roomType: "Standard Room",
        img: "/Images/roomimg6.jpg",
        price: "4500",
        bed: "Double Bed",
        size: "250 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC", "TV"],
        description: "Budget friendly standard room with essential amenities."
      }
    ]
  },

  {
    id: 4,
    name: "Hotel Mirage",
    rating: "⭐ 4.4",
    price: "4000",
    location: "📍 Sector 70, Mohali",
    totalRooms: 7,
    availableRooms: 3,
    rooms: [
      {
        roomId: 104,
        roomType: "Classic Room",
        img: "/Images/roomimg4.jpg",
        price: "4000",
        bed: "Queen Bed",
        size: "270 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC", "WiFi"],
        description: "Elegant classic room with cozy environment."
      }
    ]
  },

  {
    id: 5,
    name: "Glades Hotel",
    rating: "⭐ 4.3",
    price: "3200",
    location: "📍 Sector 55, Mohali",
    totalRooms: 5,
    availableRooms: 2,
    rooms: [
      {
        roomId: 105,
        roomType: "Budget Room",
        img: "/Images/roomimg6.jpg",
        price: "3200",
        bed: "Double Bed",
        size: "220 sq.ft",
        capacity: "2 Adults",
        amenities: ["Fan", "TV"],
        description: "Affordable room suitable for short stay."
      }
    ]
  },

  {
    id: 6,
    name: "The Zenith - A Boutique Hotel",
    rating: "⭐ 4.0",
    price: "5000",
    location: "📍 Sector 58, Mohali",
    totalRooms: 9,
    availableRooms: 4,
    rooms: [
      {
        roomId: 106,
        roomType: "Boutique Room",
        img: "/Images/roomimg1.jpg",
        price: "5000",
        bed: "King Bed",
        size: "300 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC", "WiFi", "TV"],
        description: "Stylish boutique room with modern decor."
      }
    ]
  },

  {
    id: 7,
    name: "Welcomhotel by ITC Hotels",
    rating: "⭐ 4.3",
    price: "10000",
    location: "📍 Sector 67, Airport Road, Mohali",
    totalRooms: 12,
    availableRooms: 6,
    rooms: [
      {
        roomId: 107,
        roomType: "Luxury Suite",
        img: "/Images/roomimg2.jpg",
        price: "10000",
        bed: "King Bed",
        size: "500 sq.ft",
        capacity: "3 Adults",
        amenities: ["AC", "WiFi", "TV", "Mini Bar", "Jacuzzi"],
        description: "Premium luxury suite with top-class facilities."
      }
    ]
  },

  {
    id: 8,
    name: "Tamaring Hotel",
    rating: "⭐ 4.5",
    price: "3299",
    location: "📍 Phase 5, Mohali",
    totalRooms: 6,
    availableRooms: 2,
    rooms: [
      {
        roomId: 108,
        roomType: "Deluxe Room",
        img: "/Images/roomimg3.jpg",
        price: "3299",
        bed: "Queen Bed",
        size: "280 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC", "WiFi"],
        description: "Comfortable deluxe room at affordable price."
      }
    ]
  },

  {
    id: 9,
    name: "Regenta Place",
    rating: "⭐ 4.5",
    price: "2599",
    location: "📍 Airport Road, Mohali",
    totalRooms: 5,
    availableRooms: 1,
    rooms: [
      {
        roomId: 109,
        roomType: "Standard Room",
        img: "/Images/roomimg6.jpg",
        price: "2599",
        bed: "Double Bed",
        size: "240 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC"],
        description: "Simple and clean standard room."
      }
    ]
  },

  {
    id: 10,
    name: "Franco Hotel",
    rating: "⭐ 4.5",
    price: "2199",
    location: "📍 Phase 1, Mohali",
    totalRooms: 4,
    availableRooms: 2,
    rooms: [
      {
        roomId: 110,
        roomType: "Economy Room",
        img: "/Images/roomimg5.jpg",
        price: "2199",
        bed: "Single Bed",
        size: "200 sq.ft",
        capacity: "1 Adult",
        amenities: ["Fan"],
        description: "Low-cost room for solo travelers."
      }
    ]
  },

  {
    id: 11,
    name: "Parkhills Hotel",
    rating: "⭐ 4.5",
    price: "1799",
    location: "📍 Airport Road, Mohali",
    totalRooms: 3,
    availableRooms: 1,
    rooms: [
      {
        roomId: 111,
        roomType: "Budget Room",
        img: "/Images/roomimg7.jpg",
        price: "1799",
        bed: "Single Bed",
        size: "180 sq.ft",
        capacity: "1 Adult",
        amenities: ["Fan"],
        description: "Cheapest room with basic facilities."
      }
    ]
  },

  {
    id: 12,
    name: "Treebo Trend JJ Crown",
    rating: "⭐ 4.2",
    price: "2800",
    location: "📍 Phase 7, Mohali",
    totalRooms: 7,
    availableRooms: 3,
    rooms: [
      {
        roomId: 112,
        roomType: "Premium Room",
        img: "/Images/roomimg6.jpg",
        price: "2800",
        bed: "Queen Bed",
        size: "260 sq.ft",
        capacity: "2 Adults",
        amenities: ["AC", "WiFi", "TV"],
        description: "Premium room with modern amenities."
      }
    ]
  }
];

export default hotels;