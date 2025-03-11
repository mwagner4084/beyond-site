// src/lib/data.ts
export const pageContent = {

    // home page data
    home: {
        titleType: "image",
        titleImage: "favicon/logo-home.png",
        titleAlt: "Beyond Events Wedding Planning and Rentals",
        titleText: "Beyond Events Wedding Planning & Rentals",
        primaryCardHeader: "- 2025 Booking Now Open -",
        primaryCardSubheader: "",
        primaryCardContent: "Your wedding is a once-in-a-lifetime event, and we are here to ensure it's as magical as you've always dreamed. With over 250 events planned worldwide, including over 100 weddings since 2022, our team brings a wealth of experience and a keen eye for detail to your special day.\n\nWe offer a variety of packages to suit your needs, from full-service planning to day-of coordination. We believe that every couple deserves a wedding that reflects their unique love story. We will work with you to create a personalized experience that you and your guests will remember for years to come.\n\nProudly serving the greater Midwest region. International planning and coordination available.",
        primaryCardFooter: "",
        primaryCardImage: "",
        navLinks: [
            { label: "Our Story", url: "/about" },
            { label: "Packages", url: "/pricing" },
            { label: "Rentals", url: "/rentals" },
            { label: "Portfolio", url: "/gallery" }
        ],
        callToAction: {
            label: "SCHEDULE YOUR CONSULTATION",
            url: "/contact"
        }
    },

    // about page data
    about: {
        title: "Meet Your Coordinator",
        primaryCardHeader: "Ryan Bergstrom",
        primaryCardSubheader: "",
        primaryCardContent: "Proudly serving the Greater Midwest region. International planning and coordination available.",
        primaryCardImage: "",

        secondaryCardHeader: "Background",
        secondaryCardSubheader: "",
        secondardCardContent: "As we embark on the journey of planning your wedding, we'll also be building a wonderful friendship! So, allow us to share a bit about our owner and head coordinator, Ryan Bergstrom. Ryan's passion for event planning ignited during his college years when he founded an Art Gallery and served as a chair member of the Providence Art Association. He found joy in hosting gala events to spotlight artists from New England.\n\nRyan's career took an exciting turn when he became a Chief Steward on super yachts, even being offered a position on Below Deck! He was even almost a part of the show!). For about 4-5 years, he meticulously planned every detail of his guests' once-in-a-lifetime experiences. After orchestrating events in 15 different countries, Ryan felt the call to return to the beautiful Midwest. Since settling on land in 2022, Ryan has planned over 100 weddings and private events, contributing to his overall tally of more than 250 events worldwide.",
        secondaryCardImage: "img/headshot.png",

        tertiaryCardHeader: "Going Above...",
        tertiaryCardSubheader: "... and Beyond",
        tertiaryCardContent: "As your wedding coordinator or planner, our team promise to manage every detail and navigate any obstacles with utmost precision throughout both the planning stages and on your special day. We promise to provide an enjoyable, stress-free planning journey. We promise to turn the anticipation leading up to your wedding into a fun and exciting experience.\n\nOur commitment extends beyond just working with you at every stage of the journey. We will also collaborate closely with your vendors, both the day before and on your wedding day. Our aim is to foster a harmonious environment where we all work together to ensure every moment is flawless. By establishing a rapport with each vendor prior to your event, we ensure a comfortable and familiar atmosphere upon arrival, for both you and the entire team.",

        galleryImages: [
        {
          src: "/img/weddings/white-wedding.jpg",
          alt: "Wedding Decor"
        },
        {
          src: "/img/weddings/ryan-flwrs.jpg",
          alt: "Wedding Decor"
        },
        {
          src: "/img/weddings/florals-green.png",
          alt: "Wedding Decor"
        },
        {
          src: "/img/weddings/cake.png",
          alt: "Wedding Decor"
        }
      ]
    },

    // pricing page data
    pricing: {
        title: "INVESTMENT",
        primaryCardHeader: "DAY-OF COORDINATION PACKAGES",
        primaryCardSubheader: "- 2025 Booking Now Open -",
        
        // Package navigation links
        packageLinks: [
          { label: "Coordination Package", url: "/doc-package" },
          { label: "Planning Package", url: "/planning-package" }
        ],
        
        // Pricing packages
        packages: [
            {
                title: "DOC",
                features: [
                "unlimited virtual meetings",
                "decor meetings",
                "vendor coordination",
                "timeline creation",
                "2 additional coordinators",
                "live planning documents",
                "rehearsal coordination",
                "set up & tear down",
                "unlimited day-of hours",
                "dessert pick-up",
                "table maintenance"
                ],
                price: "$2,750",
                image: "/img/weddings/couple-kiss.png",
                imageAlt: "Wedding Coordination Packages and Pricing"
            },
            {
                title: "VIP DOC*",
                features: [
                "*includes doc package",
                "source decor & vendors",
                "budget management",
                "vendor coordination",
                "in-person vendor meetings",
                "complimentary rentals",
                "vision boards"
                ],
                price: "$5,500",
                image: "/img/reviews/edensmore.png",
                imageAlt: "Wedding Coordination Packages and Pricing"
            }
        ],
        
        // Call-to-action
        callToAction: {
          label: "Request Consultation",
          url: "/contact"
        }
    },
      
    // rentals page data
    rentals: {
        title: "Decor Rentals",
        subtitle: "Inventory constantly changing... please contact us if an item isn't listed!",
        
        // Rental categories
        categories: [
            {
                name: "Candles",
                description: "All candles holders come with complimentary LED candles. Real candles available upon request (cost based on style). Please keep in mind many venues have candle restrictions.",
                layout: "3-column",
                items: [
                {
                    image: "/img/candles/candles-gold.png",
                    title: "TIERED CANDLESTICK HOLDERS WITH GLASS HURRICANE",
                    details: [
                    "SIZES: 6\", 8\" , & 10\"",
                    "COLOR: GOLD",
                    "$20 PER SET",
                    "SET OF 3"
                    ],
                    alt: "Wedding Candle Rentals"
                },
                {
                    image: "/img/candles/votive-amber.png",
                    title: "AMBER VOTIVE CANDLE HOLDERS",
                    details: [
                    "SIZE: 2.5\"",
                    "COLOR: AMBER",
                    "$1.50 PER PIECE"
                    ],
                    alt: " Wedding Candle Rentals"
                },
                {
                    image: "/img/candles/votive-mermaid.png",
                    title: "MERMAID VOTIVE CANDLE HOLDERS",
                    details: [
                    "SIZE: 2.5\"",
                    "COLOR: GOLD",
                    "$1.50 PER PIECE"
                    ],
                    alt: " Wedding Candle Rentals"
                },
                {
                    image: "/img/candles/votive-crystal.png",
                    title: "CRYSTAL VOTIVE CANDLE HOLDERS",
                    details: [
                    "SIZE: 2.5\"",
                    "COLOR: CLEAR",
                    "$1.50 PER PIECE"
                    ],
                    alt: " Wedding Candle Rentals"
                },
                {
                    image: "/img/candles/candles-floating.png",
                    title: "FLOATING CANDLES WITH VASES",
                    details: [
                    "SIZES: 6\", 8\" , & 10\"",
                    "COLOR: CLEAR",
                    "$20 PER SET",
                    "SET OF 3"
                    ],
                    alt: " Wedding Candle Rentals"
                },
                {
                    image: "/img/candles/candles-sand.png",
                    title: "SAND CANDLES",
                    details: [
                    "SIZES: 6\", 8\" , & 10\"",
                    "COLOR: CLEAR",
                    "$20 PER SET",
                    "SET OF 3"
                    ],
                    alt: " Wedding Candle Rentals"
                }
                ]
            },
            {
                name: "Chargers",
                description: "Chargers add an extra touch of sophistication and a polished look to your guest's dining experiences. Choose from a variety of styles, materials, and finishes to elevate your table decor.",
                layout: "3-column",
                items: [
                    {
                        image: "/img/chargers/charger-beachgrass.png",
                        title: "INTERTWINED BEACHGRASS CHARGER",
                        details: [
                        "AVAILABLE IN 12\"",
                        "$4 PER PIECE"
                        ],
                        alt: "Charger Wedding Rentals"
                    },
                    {
                        image: "/img/chargers/charger-gold.png",
                        title: "PLASTIC GOLD CHARGER",
                        details: [
                        "AVAILABLE IN 13\"",
                        "$2 PER PIECE"
                        ],
                        alt: "Charger Wedding Rentals"
                    },
                    {
                        image: "/img/chargers/charger-black.png",
                        title: "PLASTIC BLACK CHARGER",
                        details: [
                        "AVAILABLE IN 13\"",
                        "$2 PER PIECE"
                        ],
                        alt: "Charger Wedding Rentals"
                    }
                ]
            },
            {
                name: "Fabrics & Linens",
                description: "Fabrics and linens are essential elements of wedding decor, adding texture, color, and elegance to the overall design. We offer a variety of fabrics and linens to add a personalized touch to your decor.",
                layout: "2-column",
                items: [
                    {
                        image: "/img/fabrics/runner-cheesecloth.png",
                        title: "CHEEESECLOTH TABLE RUNNER",
                        details: [
                        "SIZE: 17\" X 108\"",
                        "COLORS: DUSTY BLUE, SAGE GREEN, GREY GREEN, IVORY, TERRACOT, BURGUNDY, & PINK",
                        "$4 PER PIECE"
                        ],
                        alt: "Fabric and Linen Wedding Rentals"
                    },
                    {
                        image: "/img/fabrics/overlay-gold.png",
                        title: "HAND EMBROIDERED ROUND OVERLAY",
                        details: [
                        "SIZE: 120\"",
                        "COLOR: GOLD",
                        "$150 PER PIECE"
                        ],
                        alt: "Fabric and Linen Wedding Rentals"
                    },
                    {
                        image: "/img/fabrics/overlay-floral.png",
                        title: "SATIN FLORAL OVERLAY",
                        details: [
                        "SIZE: 72\" X 72\"",
                        "COLORS: BLUE & WHITE",
                        "$15 PER PIECE"
                        ],
                        alt: "Fabric and Linen Wedding Rentals"
                    },
                    {
                        image: "/img/fabrics/linen-round.png",
                        title: "FLOOR LENGTH LINENS",
                        details: [
                        "ROUND & RECTANGLE",
                        "SIZES: 120\", 90\" x 132\", & 90\" x 156\"",
                        "COLORS: WHITE & BLACK",
                        "$15-$18 PER PIECE"
                        ],
                        alt: "Fabric and Linen Wedding Rentals"
                    }
                ],
                footer: "** ALL LINENS ARE STEAMED OR PRESSED PRIOR TO GUEST ARRIVAL**"
            },
            {
                name: "Mirrors",
                description: "Mirrors can be used as wedding signage to add a touch of elegance and charm, reflecting light while creating a stylish and timeless look. White vinyl calligraphy can be added to the mirrors for a personalized and sophisticated touch.",
                layout: "3-column",
                items: [
                    {
                        image: "/img/mirrors/mirror-large.png",
                        title: "LARGE REGAL MIRROR",
                        details: [
                        "SEATING CHART",
                        "SIZE: 5.3' X 7'",
                        "COLOR: GOLD",
                        "$1,500 PER PIECE"
                        ],
                        alt: "Wedding Mirror Rentals"
                    },
                    {
                        image: "/img/mirrors/mirror-small.png",
                        title: "SMALL REGAL MIRROR",
                        details: [
                        "SEATING CHART",
                        "SIZE: 15.75\" X 14.25\"",
                        "COLOR: GOLD",
                        "$200 PER PIECE"
                        ],
                        alt: "Wedding Mirror Rentals"
                    },
                    {
                        image: "/img/mirrors/mirror-trifold.png",
                        title: "TRI-FOLDING MIRROR",
                        details: [
                        "SIZE: 5' X 7'",
                        "COLORS: GOLD WITH SILVER ACCENTS",
                        "$1,000 PER PIECE [1 AVAILABLE]"
                        ],
                        alt: "Wedding Mirror Rentals"
                    }
                ]
            },
            {
                name: "Signage",
                description: "Signage adds both style and functionality to a wedding, guiding guests while enhancing the overall décor. We offer a variety of signage options, including welcome signs, seating charts, and table numbers.",
                layout: "3-column",
                items: [
                    {
                        image: "/img/signage/signs-gold.png",
                        title: "REFLECTIVE SIGNS",
                        details: [
                        "TWO PIECES",
                        "SIZE: 5\" X 7\"",
                        "COLOR: GOLD",
                        "$25 PER SET"
                        ],
                        alt: "Wedding Sign Rentals"
                    },
                    {
                        image: "/img/signage/signs-black.png",
                        title: "FOUR PIECE SIGNS",
                        details: [
                        "SIZE: 5\" X 7\"",
                        "COLOR: BLACK & WHITE",
                        "$25 PER SET"
                        ],
                        alt: "Wedding Sign Rentals"
                    },
                    {
                        image: "/img/signage/signs-white.png",
                        title: "FOUR PIECE SIGNS",
                        details: [
                        "SIZE: 5\" X 7\"",
                        "COLOR: WHITE & BLACK",
                        "$25 PER SET"
                        ],
                        alt: "Wedding Sign Rentals"
                    },
                    {
                        image: "/img/signage/tables-gold.png",
                        title: "REFLECTIVE TABLE NUMBERS",
                        details: [
                        "[1 - 25]",
                        "SIZE: 5\" X 7\"",
                        "COLOR: GOLD",
                        "$50 PER SET"
                        ],
                        alt: "Wedding Sign Rentals"
                    },
                    {
                        image: "/img/signage/tables-black.png",
                        title: "TABLE NUMBERS",
                        details: [
                        "[1 - 30]",
                        "SIZE: 5\" X 7\"",
                        "COLORS: BLACK & WHITE",
                        "$50 PER SET"
                        ],
                        alt: "Wedding Sign Rentals"
                    },
                    {
                        image: "/img/signage/tables-white.png",
                        title: "TABLE NUMBERS",
                        details: [
                        "[1 - 30]",
                        "SIZE: 5\" X 7\"",
                        "COLORS: WHITE & BLACK",
                        "$50 PER SET"
                        ],
                        alt: "Wedding Sign Rentals"
                    }
                ]
            },
            {
                name: "Florals",
                description: "Flowers set the mood and bring out the beauty in every detail. We offer light floral installations to complement our rental items, adding an elegant touch to your wedding décor. While we don't create centerpieces, bouquets, corsages, or boutonnieres, our floral options are designed to enhance tablescapes, signage, and other decorative pieces. Pricing is available varies based on your selections.",
                layout: "3-column",
                items: [
                    {
                        image: "/img/florals/florals-vases.png",
                        title: "BUD VASES",
                        details: [
                        "SIZES: 2\" - 5\"",
                        "COLORS: BLUE, AMBER, & CRYSTAL",
                        "$1.50 PER PIECE"
                        ],
                        alt: "Wedding Floral Rentals"
                    },
                    {
                        image: "/img/florals/florals-centerpiece.png",
                        title: "RAISED FLORAL CENTERPIECE STANDS",
                        details: [
                        "SIZES: 10\" x 2'",
                        "COLORS: GOLD",
                        "$20 PER PIECE"
                        ],
                        alt: "Wedding Floral Rentals"
                    },
                    {
                        image: "/img/florals/florals-walls.png",
                        title: "REVERSIBLE BOXWOOD WALLS WITH SHIPLAP SIDE",
                        details: [
                        "SIZE: 4' x 8'",
                        "COLORS: WHITE OR BLACK SHIPLAP",
                        "$400 PER PIECE",
                        "(CUSTOM LETTERING AVAILABLE)"
                        ],
                        alt: "Wedding Floral Rentals"
                    }
                ]
            }
        ],
        
        // Call-to-action
        callToAction: {
          label: "Request Rental Information",
          url: "/contact"
        }
    },
      
    // testimonials page data
    testimonials: {
        title: "Reviews",
        
        // Reviews/testimonials
        reviews: [
            {
                image: "/img/reviews/edensmore.png",
                name: "Sam & Emma Densmore",
                details: "Venue Bella Giornata | 2024",
                quote: "Where do I begin? Ryan was a gift from heaven that immediately made me feel better about wedding planning. He was not only my day of coordinator but also took part in my wedding planning for over a year. Ryan was there through all the challenges of wedding planning. He jumped into action especially when I needed him the most. On wedding day, Ryan's communication with not only me, but all my wedding vendors was absolutely phenomenal. From making sure the groomsman's ties were tied, cleaning a dirty boot foot print on my dress, to helping me squeeze my swollen feet into my dancing shoes, getting me anything I needed, along with my now husband.",
                credit: "Photo Credit: Samantha James Photo"
            },
            {
                image: "/img/reviews/clongo.png",
                name: "Jon & Cassidy Longo",
                details: "Blue Dress Barn | 2024",
                quote: "This human (Ryan) is so much more than amazing. He helped us through this process in more ways than just planning our day. He was our therapist, our shoulder to cry/lean on, and now a good friend. He went above and beyond what his duties called for. One thing that shined during our experience was his passion for weddings, design, and a love for his clients. He is very patient, works around your ideas, and really helped my vision come alive (I was extremely picky and didn't make it easy). Our big day was the best freaking day ever, but it was not without its challenges. Ryan handled everything with such grace, never let us know the bad existed, and kept us feeling the magic all day. He was the calm to the wedding storm and we cannot thank him enough. I wish I could scream his name at the top of Wedding Mountain for all to hear and know how incredibly talented and hardworking this soul is.",
                credit: "Photo Credit: Kylie Haack"
            },
            {
                image: "/img/reviews/speterson.png",
                name: "Sophie Peterson",
                details: "Morris Estate | 2024",
                quote: "... The reception was unbelievable. I've planned other events, designed movie sets and installation art, and was truly blown away by what they accomplished. It was so exciting to see all of the love and hard work that went into making our vision come to life and see the excitement on guests' faces when they walked into the tent. It was colorful, magical and totally surreal. Our guests had so many kind words about how fun and joyous the entire evening was, and our wedding party and families loved being able to stay at the River house for a magical weekend. Instead of worrying who was going to help clean up at the end of the night, Ryan had it fully covered.",
                credit: "Photo Credit: Studio Zwerveling"
            },
            {
                image: "/img/reviews/esipka.png",
                name: "Brandon & Emilee Sipka",
                details: "Morris Estate | 2024",
                quote: "Ryan was our coordinator for our wedding and we cannot say enough good things about him as a person and his work! He went above and beyond in every single aspect of the planning process, rehearsal, and the wedding day. Ryan went the extra mile in several ways including helping me do an emergency bustle for my dress at the last minute, helping guests with their own wardrobe malfunctions, and answering any questions they had. We even had a handful of guests tell us how amazing he was. Truly could not recommend him enough!!! Our wedding would not have been the same without him. Plus he's one of the most genuine people I've met - especially in the wedding business. I'd hire him over and over again!",
                credit: "Credit: Katie Kendrick Photo"
            },
            {
                image: "/img/reviews/cmeredith.png",
                name: "Courtney Meredith",
                details: "2023",
                quote: "Ryan was a huge help in planning our wedding day! From our first meeting, we could tell that he was well worth hiring. He helped us keep on course, gave great suggestions, and was very gracious as we planned this big of a celebration for the first time. \n\nHaving Ryan as our Day of Coordinator helped us simply take in the moments and enjoy our wedding day, he took care of the rest! He was so fun to work with; by the time of our wedding day came around, we felt like he was our long time friend.\n\nRyan's the best!",
                credit: ""
            },
            {
                image: "/img/reviews/samantha.png",
                name: "Samantha Vanderson",
                details: "2024",
                quote: "I've been a photographer in the wedding industry almost 15 years and I was so impressed with Ryan as my couple's lead planner! He surpassed all expectations for the couple & did everything he could to make sure the day was seamless. Not only did he bring energy and light into their day but his communication with me throughout the day was spot on & he didn't miss a single detail! I cannot wait to work with him on future events! 10/10 recommend you have Ryan bring your dreams to life, he won't let you down.",
                credit: "Samantha James Photo"
            },
            {
                image: "/img/reviews/hmoore.png",
                name: "Hayley Moore",
                details: "2024",
                quote: "Working with Ryan was an absolute joy! Not only did he keep me on schedule, but he was also incredibly kind and understanding. He truly knows the photographer's role and goes above and beyond to support the couple in every way. On top of that, he's such a fun person to chat with—especially on stressful days, he brings such a positive and uplifting energy. I couldn't recommend him more!",
                credit: "Hayley Moore Photography"
            },
            {
                image: "/img/reviews/sschulz.jpg",
                name: "Sydney Schulz",
                details: "2023",
                quote: "Ryan is not only an amazing wedding planner but overall a fabulous human being. He helped plan mine and Trevor Schulz big day last year at Ivy House and it couldn't have been better. He pays attention to details, stays organized, and listens to his client's, all while being honest and fun! Wedding planning can be stressful so I would recommend you use Ryan to make your day the best it can be!",
                credit: ""
            }
        ],
        
        // Call-to-action
        callToAction: {
          label: "Schedule Your Consultation",
          url: "/contact"
        }
    },

    // planning package page data
    planningPackage: {
        titleType: "image",
        titleImage: "/favicon/logo-planning.png",
        titleAlt: "Beyond Events Wedding Planning and Rentals",
        
        // Left column items
        leftColumnSections: [
            {
                title: "SOURCING [VENDORS | DECOR]",
                content: "Have a vision, but not the time to create it - allow us! We will source multiple vendors for you to interview with, and various styles of decor for you to decide on."
            },
            {
                title: "AESTHETIC BUILDING:",
                content: "With our experince in creating visions for a vast assortment of clientele, we will discuss exactly what you want in your budget, and build it into a reality. This includes rehearsal & day-of."
            },
            {
                title: "BUDGET MANAGEMENT:",
                content: "With extreme attention to detail we will manage your spendings to ensure there are no unexpected costs, along the conscious effort of trying to save you as much money as possible."
            }
        ],
        leftColumnImage: "/img/weddings/wedding-bride.png",
        leftColumnImageAlt: "Wedding Review 2024",
        
        // Right column items
        rightColumnSections: [
            {
                title: "$500 OFF RENTALS:",
                content: "Enjoy a $500 credit toward our rental catalog!"
            },
            {
                title: "2 ADDITIONAL ASSISTANTS",
                content: "With our planning package, you will also receive 2 extra assistants complimentary."
            },
            {
                title: "DECOR PICK UP & DROP OFF",
                content: "One of the biggest struggles we find our couple's going through is getting all of the decor to and from the venue. We will arrive before rehearsal and load our trailer, and drop-off the day after your wedding at the designated location. (*Restrictions may apply*)"
            }
        ],
        rightColumnFooter: "<i>Includes Coordination Package</i>",
        rightColumnImage: "/img/reviews/clongo.png",
        rightColumnImageAlt: "Wedding Review 2024",
        
        // Price footer
        price: "$5,000",
        
        // Call-to-action
        callToAction: {
        label: "Request Consultation",
        url: "/contact"
        }
    },
        
    // doc package page data
    docPackage: {
        titleType: "image",
        titleImage: "/favicon/logo-coordination.png",
        titleAlt: "Beyond Events Wedding Planning and Rentals",
        
        // Left column items - centered text
        leftColumnSections: [
        {
            title: "STRUCTURED MEETINGS:",
            content: "It's easy to feel flustered, and it's okay to feel that way also! With Beyond Events, we will guide you efficiently in a prioritized demeanor to insure that you are ticking the boxes in the right order."
        },
        {
            title: "TIMELINE BUILDING:",
            content: "With our heavy experience in the industry, we will create a timeline that prevents issues before they occur, and once we have sent it to your vendors, we will work them to adjust accordingly."
        },
        {
            title: "REHEARSAL & DAY-OF:",
            content: "With our first-to-arrive- & last-to-leave policy, that creates an unlimited window of hours of our service on these days."
        }
        ],
        leftColumnImage: "/img/weddings/couple-kiss.png",
        leftColumnImageAlt: "Wedding Review 2024",
        leftColumnFooter: "& SO MUCH MORE...",
        
        // Right column items - centered text
        rightColumnSections: [
        {
            title: "DECOR & VENDOR ASSISTANCE:",
            content: "We will assist you in making your vision a reality with every aspect. We have plenty of tips and tricks for you to utilize, and have worked with a massive amount of vendors in the area and will direct you to find the perfect match. With our vast experince in creating unique tablescapes and aesthetic, no vision is impossible, in any venue, and we will show you how."
        },
        {
            title: "SET-UP & TEAR-DOWN",
            content: "We take care of it all, and prioritize this in a efficient way to insure that you get that private walk-through before ceremony, and are not having to have family linger too late waiting for breakdown."
        }
        ],
        rightColumnImage: "/img/reviews/edensmore.png",
        rightColumnImageAlt: "Wedding Review 2024",
        
        // Price footer
        price: "$2,750",
        
        // Call-to-action
        callToAction: {
        label: "Request Consultation",
        url: "/contact"
        },
        
        // Text alignment
        textAlignment: "center"
    },
    
    // gallery page data
    gallery: {
        title: "Gallery Images",
        
        // Gallery items with styles
        galleryItems: [
            {
                image: "/img/weddings/wedding-disco.png",
                alt: "disco balls",
                style: "Modern"
            },
            {
                image: "/img/weddings/wedding-donuts.png",
                alt: "glassware",
                style: "Playful"
            },
            {
                image: "/img/weddings/wedding-juice.png",
                alt: "flowers",
                style: "Garden"
            },
            {
                image: "/img/weddings/wedding-barn.png",
                alt: "tableware",
                style: "Rustic"
            },
            {
                image: "/img/weddings/wedding-bride.png",
                alt: "juice",
                style: "Glam"
            },
            {
                image: "/img/weddings/wedding-cake.png",
                alt: "salad",
                style: "Minimalist"
            },
            {
                image: "/img/weddings/wedding-centerpiece.png",
                alt: "holiday",
                style: "Romantic"
            },
            {
                image: "/img/weddings/wedding-chairs.png",
                alt: "cakestand",
                style: "Eclectic"
            },
            {
                image: "/img/weddings/wedding-florals.png",
                alt: "flowers",
                style: "Boho"
            }
        ],
        
        // Call-to-action
        callToAction: {
          label: "Schedule a Consultation",
          url: "/contact"
        }
    },
      
    // contact page data
    contact: {
        title: "Contact Our Team",
        subtitle: "Please complete the provided form below, and we will get back to you as soon as possible. Be sure to include your wedding date, location, and any other details you would like to share. We look forward to working with you to make your dreams a reality!",
        
        // Form section
        formHeader: "Let's get started",
        
        // Form fields - specifies what the form needs to include
        formFields: [
            {
                name: "name",
                label: "Name",
                type: "text",
                required: true,
                placeholder: "Your full name"
            },
            {
                name: "email",
                label: "Email",
                type: "email",
                required: true,
                placeholder: "Your email address"
            },
            {
                name: "phone",
                label: "Phone",
                type: "tel",
                required: true,
                placeholder: "Your phone number"
            },
            {
                name: "weddingDate",
                label: "Wedding Date",
                type: "date",
                required: false,
                helpText: "If you don't have a specific date yet, that's okay!"
            },
            {
                name: "location",
                label: "Wedding Location",
                type: "text",
                required: false,
                placeholder: "City, State or Venue Name"
            },
            {
                name: "message",
                label: "Message",
                type: "textarea",
                required: true,
                placeholder: "Tell us about your vision or any questions you have",
                rows: 5
            }
        ],
        
        // Submit button
        submitButton: {
          label: "Send Message",
          loadingLabel: "Sending..."
        },
        
        // Success page redirect
        successRedirect: "/confirm"
    },
      
    // Confirmation page after form submission
    confirm: {
        title: "Thank you for contacting Beyond Events!",
        message: "We'll be in touch soon to discuss your vision.",
        image: "/img/thank-you.png",
        imageAlt: "Thank you",
        
        // Return home button
        returnButton: {
          label: "Return to Home",
          url: "/"
        }
    },
};
  