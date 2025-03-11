// Define rental item type
export interface RentalItem {
    image: string;
    title: string;
    sizes?: string;
    color?: string;
    colors?: string;
    price: string;
    quantity?: string;
    description?: string;
    alt?: string;
  }
  
  // Define rental categories
  export interface RentalCategories {
    [key: string]: {
      title: string;
      description: string;
      items: RentalItem[];
      footer?: string;
    };
  }
  
  // Rental data
  export const rentalData: RentalCategories = {
    candles: {
      title: "Candles",
      description: "All candles holders come with complimentary LED candles. Real candles available upon request (cost based on style). Please keep in mind many venues have candle restrictions.",
      items: [
        {
          image: "/img/candles/candles-gold.png",
          title: "TIERED CANDLESTICK HOLDERS WITH GLASS HURRICANE",
          sizes: "6\", 8\" , & 10\"",
          color: "GOLD",
          price: "$20 PER SET",
          quantity: "SET OF 3",
          alt: " Wedding Candle Rentals"
        },
        {
          image: "/img/candles/votive-amber.png",
          title: "AMBER VOTIVE CANDLE HOLDERS",
          sizes: "2.5\"",
          color: "AMBER",
          price: "$1.50 PER PIECE",
          alt: " Wedding Candle Rentals"
        },
        {
          image: "/img/candles/votive-mermaid.png",
          title: "MERMAID VOTIVE CANDLE HOLDERS",
          sizes: "2.5\"",
          color: "GOLD",
          price: "$1.50 PER PIECE",
          alt: " Wedding Candle Rentals"
        },
        {
          image: "/img/candles/votive-crystal.png",
          title: "CRYSTAL VOTIVE CANDLE HOLDERS",
          sizes: "2.5\"",
          color: "CLEAR",
          price: "$1.50 PER PIECE",
          alt: " Wedding Candle Rentals"
        },
        {
          image: "/img/candles/candles-floating.png",
          title: "FLOATING CANDLES WITH VASES",
          sizes: "6\", 8\" , & 10\"",
          color: "CLEAR",
          price: "$20 PER SET",
          quantity: "SET OF 3",
          alt: " Wedding Candle Rentals"
        },
        {
          image: "/img/candles/candles-sand.png",
          title: "SAND CANDLES",
          sizes: "6\", 8\" , & 10\"",
          color: "CLEAR",
          price: "$20 PER SET",
          quantity: "SET OF 3",
          alt: " Wedding Candle Rentals"
        }
      ]
    },
    chargers: {
      title: "Chargers",
      description: "Chargers add an extra touch of sophistication and a polished look to your guest's dining experiences. Choose from a variety of styles, materials, and finishes to elevate your table decor.",
      items: [
        {
          image: "/img/chargers/charger-beachgrass.png",
          title: "INTERTWINED BEACHGRASS CHARGER",
          sizes: "12\"",
          price: "$4 PER PIECE",
          alt: "Charger Wedding Rentals"
        },
        {
          image: "/img/chargers/charger-gold.png",
          title: "PLASTIC GOLD CHARGER",
          sizes: "13\"",
          price: "$2 PER PIECE",
          alt: "Charger Wedding Rentals"
        },
        {
          image: "/img/chargers/charger-black.png",
          title: "PLASTIC BLACK CHARGER",
          sizes: "13\"",
          price: "$2 PER PIECE",
          alt: "Charger Wedding Rentals"
        }
      ]
    },
    fabrics: {
      title: "Fabrics & Linens",
      description: "Fabrics and linens are essential elements of wedding decor, adding texture, color, and elegance to the overall design. We offer a variety of fabrics and linens to add a personalized touch to your decor.",
      items: [
        {
          image: "/img/fabrics/runner-cheesecloth.png",
          title: "CHEEESECLOTH TABLE RUNNER",
          sizes: "17\" X 108\"",
          colors: "DUSTY BLUE, SAGE GREEN, GREY GREEN, IVORY, TERRACOT, BURGUNDY, & PINK",
          price: "$4 PER PIECE",
          alt: "Fabric and Linen Wedding Rentals"
        },
        {
          image: "/img/fabrics/overlay-gold.png",
          title: "HAND EMBROIDERED ROUND OVERLAY",
          sizes: "120\"",
          color: "GOLD",
          price: "$150 PER PIECE",
          alt: "Fabric and Linen Wedding Rentals"
        },
        {
          image: "/img/fabrics/overlay-floral.png",
          title: "SATIN FLORAL OVERLAY",
          sizes: "72\" X 72\"",
          colors: "BLUE & WHITE",
          price: "$15 PER PIECE",
          alt: "Fabric and Linen Wedding Rentals"
        },
        {
          image: "/img/fabrics/linen-round.png",
          title: "FLOOR LENGTH LINENS",
          description: "ROUND & RECTANGLE",
          sizes: "120\", 90\" x 132\", & 90\" x 156\"",
          colors: "WHITE & BLACK",
          price: "$15-$18 PER PIECE",
          alt: "Fabric and Linen Wedding Rentals"
        }
      ],
      footer: "** ALL LINENS ARE STEAMED OR PRESSED PRIOR TO GUEST ARRIVAL**"
    },
    mirrors: {
      title: "Mirrors",
      description: "Mirrors can be used as wedding signage to add a touch of elegance and charm, reflecting light while creating a stylish and timeless look. White vinyl calligraphy can be added to the mirrors for a personalized and sophisticated touch.",
      items: [
        {
          image: "/img/mirrors/mirror-large.png",
          title: "LARGE REGAL MIRROR",
          description: "SEATING CHART",
          sizes: "5.3' X 7'",
          color: "GOLD",
          price: "$1,500 PER PIECE",
          alt: "Wedding Mirror Rentals"
        },
        {
          image: "/img/mirrors/mirror-small.png",
          title: "SMALL REGAL MIRROR",
          description: "SEATING CHART",
          sizes: "15.75\" X 14.25\"",
          color: "GOLD",
          price: "$200 PER PIECE",
          alt: "Wedding Mirror Rentals"
        },
        {
          image: "/img/mirrors/mirror-trifold.png",
          title: "TRI-FOLDING MIRROR",
          sizes: "5' X 7'",
          colors: "GOLD WITH SILVER ACCENTS",
          price: "$1,000 PER PIECE",
          quantity: "1 AVAILABLE",
          alt: "Wedding Mirror Rentals"
        }
      ]
    },
    signage: {
      title: "Signage",
      description: "Signage adds both style and functionality to a wedding, guiding guests while enhancing the overall décor. We offer a variety of signage options, including welcome signs, seating charts, and table numbers.",
      items: [
        {
          image: "/img/signage/signs-gold.png",
          title: "REFLECTIVE SIGNS",
          description: "TWO PIECES",
          sizes: "5\" X 7\"",
          color: "GOLD",
          price: "$25 PER SET",
          alt: "Wedding Sign Rentals"
        },
        {
          image: "/img/signage/signs-black.png",
          title: "FOUR PIECE SIGNS",
          sizes: "5\" X 7\"",
          colors: "BLACK & WHITE",
          price: "$25 PER SET",
          alt: "Wedding Sign Rentals"
        },
        {
          image: "/img/signage/signs-white.png",
          title: "FOUR PIECE SIGNS",
          sizes: "5\" X 7\"",
          colors: "WHITE & BLACK",
          price: "$25 PER SET",
          alt: "Wedding Sign Rentals"
        },
        {
          image: "/img/signage/tables-gold.png",
          title: "REFLECTIVE TABLE NUMBERS",
          description: "[1 - 25]",
          sizes: "5\" X 7\"",
          color: "GOLD",
          price: "$50 PER SET",
          alt: "Wedding Sign Rentals"
        },
        {
          image: "/img/signage/tables-black.png",
          title: "TABLE NUMBERS",
          description: "[1 - 30]",
          sizes: "5\" X 7\"",
          colors: "BLACK & WHITE",
          price: "$50 PER SET",
          alt: "Wedding Sign Rentals"
        },
        {
          image: "/img/signage/tables-white.png",
          title: "TABLE NUMBERS",
          description: "[1 - 30]",
          sizes: "5\" X 7\"",
          colors: "WHITE & BLACK",
          price: "$50 PER SET",
          alt: "Wedding Sign Rentals"
        }
      ]
    },
    florals: {
      title: "Florals",
      description: "Flowers set the mood and bring out the beauty in every detail. We offer light floral installations to complement our rental items, adding an elegant touch to your wedding décor. While we don't create centerpieces, bouquets, corsages, or boutonnieres, our floral options are designed to enhance tablescapes, signage, and other decorative pieces. Pricing is available varies based on your selections.",
      items: [
        {
          image: "/img/florals/florals-vases.png",
          title: "BUD VASES",
          sizes: "2\" - 5\"",
          colors: "BLUE, AMBER, & CRYSTAL",
          price: "$1.50 PER PIECE",
          alt: "Wedding Floral Rentals"
        },
        {
          image: "/img/florals/florals-centerpiece.png",
          title: "RAISED FLORAL CENTERPIECE STANDS",
          sizes: "10\" x 2'",
          color: "GOLD",
          price: "$20 PER PIECE",
          alt: "Wedding Floral Rentals"
        },
        {
          image: "/img/florals/florals-walls.png",
          title: "REVERSIBLE BOXWOOD WALLS WITH SHIPLAP SIDE",
          sizes: "4' x 8'",
          colors: "WHITE OR BLACK SHIPLAP",
          price: "$400 PER PIECE",
          description: "(CUSTOM LETTERING AVAILABLE)",
          alt: "Wedding Floral Rentals"
        }
      ]
    }
  };