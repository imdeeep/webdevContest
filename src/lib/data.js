export const Data = {
  categories: [
    {
      id: "electronics",
      name: "Electronics",
      color: "#3B82F6",
      products: [
        {
          id: "ps5",
          name: "PlayStation 5 (PS5)",
          shortDescription: "Next-gen gaming console with ultra-high-speed SSD and ray tracing.",
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop&q=80",
          price: "$499.99",
          tags: ["gaming", "console", "entertainment"],
          colors: ["White", "Black"],
          referenceLinks: [
            { title: "Official PlayStation Website", url: "https://www.playstation.com/en-us/ps5/" },
            { title: "Amazon Product Page", url: "https://www.amazon.com/dp/B0BCNKKZ91" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800", "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800"],
            videos: ["https://www.youtube.com/watch?v=RkC0l4iekYo"],
            models3d: ["https://sketchfab.com/3d-models/playstation-5-e1b39450c26c4ac5b552277d0663e2a9"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1200px-PlayStation_logo.svg.png"
          }
        },
        {
          id: "iphone-15-pro",
          name: "iPhone 15 Pro",
          shortDescription: "Titanium design with A17 Pro chip and advanced camera system.",
          image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=80",
          price: "$999.00",
          tags: ["smartphone", "apple", "premium"],
          colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
          referenceLinks: [
            { title: "Apple iPhone 15 Pro", url: "https://www.apple.com/iphone-15-pro/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800"],
            videos: ["https://www.youtube.com/watch?v=xqyUdNxWazA"],
            models3d: ["https://sketchfab.com/3d-models/apple-iphone-15-pro-max-931835532d884783a35606a2372a71cf"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
          }
        },
        {
            id: "xbox-series-x",
            name: "Xbox Series X",
            shortDescription: "The fastest, most powerful Xbox ever, designed for a new generation of console gaming.",
            image: "https://images.unsplash.com/photo-1621259182962-41618ce11b51?w=400&h=300&fit=crop&q=80",
            price: "$499.99",
            tags: ["gaming", "console", "microsoft"],
            colors: ["Carbon Black"],
            referenceLinks: [
              { title: "Official Xbox Website", url: "https://www.xbox.com/en-US/consoles/xbox-series-x" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1621259182962-41618ce11b51?w=800"],
              videos: ["https://www.youtube.com/watch?v=0tUqIHwHDEc"],
              models3d: ["https://sketchfab.com/3d-models/xbox-series-x-console-de44275260b44b82b3c153d6f7a6a908"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png"
            }
        },
        {
            id: "bose-qc-headphones",
            name: "Bose QuietComfort Ultra Headphones",
            shortDescription: "World-class noise cancellation and high-fidelity audio in a premium design.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&q=80",
            price: "$429.00",
            tags: ["audio", "headphones", "noise-cancelling"],
            colors: ["Black", "White Smoke"],
            referenceLinks: [
              { title: "Bose Official Website", url: "https://www.bose.com/p/headphones/bose-quietcomfort-ultra-headphones/QCUH-HEADPHONE.html" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"],
              videos: ["https://www.youtube.com/watch?v=hna0_p2V-jQ"],
              models3d: ["https://sketchfab.com/3d-models/bose-quietcomfort-45-headphones-039c32316e6f4a86b24508492c68e1de"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bose_logo.svg/1200px-Bose_logo.svg.png"
            }
        },
        {
            id: "samsung-galaxy-z-fold",
            name: "Samsung Galaxy Z Fold 5",
            shortDescription: "A powerful smartphone and a 7.6-inch tablet in one foldable device.",
            image: "https://images.unsplash.com/photo-1694734132388-93693e50b6a6?w=400&h=300&fit=crop&q=80",
            price: "$1799.99",
            tags: ["smartphone", "samsung", "foldable"],
            colors: ["Icy Blue", "Phantom Black", "Cream"],
            referenceLinks: [
              { title: "Samsung Official Website", url: "https://www.samsung.com/us/smartphones/galaxy-z-fold5/" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1694734132388-93693e50b6a6?w=800"],
              videos: ["https://www.youtube.com/watch?v=Z3K4o2i8T6s"],
              models3d: ["https://sketchfab.com/3d-models/samsung-galaxy-z-fold-5-5g-all-colors-36d24660231548eebf23028d7a31f790"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png"
            }
        },
        {
            id: "macbook-pro-16",
            name: "MacBook Pro 16-inch (M3)",
            shortDescription: "The ultimate pro laptop with the game-changing power of the M3 Max chip.",
            image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop&q=80",
            price: "$2499.00",
            tags: ["laptop", "apple", "professional"],
            colors: ["Space Black", "Silver"],
            referenceLinks: [
              { title: "Apple MacBook Pro 16", url: "https://www.apple.com/macbook-pro/" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800"],
              videos: ["https://www.youtube.com/watch?v=U5P2pW-O_b8"],
              models3d: ["https://sketchfab.com/3d-models/macbook-pro-2021-e87494e4a6a641199341c2c3664d6e9f"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
            }
        },
        {
          id: "sony-a7-iv",
          name: "Sony Alpha 7 IV Camera",
          shortDescription: "Hybrid mirrorless camera with a 33MP sensor, perfect for both stills and video.",
          image: "https://images.unsplash.com/photo-1677626343586-4519a715f22f?w=400&h=300&fit=crop&q=80",
          price: "$2499.99",
          tags: ["camera", "mirrorless", "photography"],
          colors: ["Black"],
          referenceLinks: [
            { title: "Sony Official Website", url: "https://electronics.sony.com/imaging/interchangeable-lens-cameras/all-interchangeable-lens-cameras/p/ilce7m4-b" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1677626343586-4519a715f22f?w=800"],
            videos: ["https://www.youtube.com/watch?v=InqQv_U_-L4"],
            models3d: ["https://sketchfab.com/3d-models/sony-alpha-7-iv-a7m4-c081308a0e884e3c983d5a5704d2e8b8"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png"
          }
        },
        {
          id: "dji-mavic-3-pro",
          name: "DJI Mavic 3 Pro Drone",
          shortDescription: "Flagship drone with a triple-camera system for unparalleled aerial imaging.",
          image: "https://images.unsplash.com/photo-1662635017685-717a78361007?w=400&h=300&fit=crop&q=80",
          price: "$2199.00",
          tags: ["drone", "videography", "aerial"],
          colors: ["Grey"],
          referenceLinks: [
            { title: "DJI Official Store", url: "https://store.dji.com/product/dji-mavic-3-pro" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1662635017685-717a78361007?w=800"],
            videos: ["https://www.youtube.com/watch?v=brIj4hK_o-s"],
            models3d: ["https://sketchfab.com/3d-models/dji-mavic-3-pro-d20a0050860a4f568eb2a66e6cf1e4d3"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/DJI_Logo.svg/1200px-DJI_Logo.svg.png"
          }
        },
        {
          id: "apple-watch-ultra-2",
          name: "Apple Watch Ultra 2",
          shortDescription: "The most rugged and capable Apple Watch, designed for endurance and adventure.",
          image: "https://images.unsplash.com/photo-1695228587327-1830571f5973?w=400&h=300&fit=crop&q=80",
          price: "$799.00",
          tags: ["smartwatch", "apple", "fitness"],
          colors: ["Titanium"],
          referenceLinks: [
            { title: "Apple Watch Ultra 2", url: "https://www.apple.com/apple-watch-ultra-2/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1695228587327-1830571f5973?w=800"],
            videos: ["https://www.youtube.com/watch?v=F2u_C-P_2a4"],
            models3d: ["https://sketchfab.com/3d-models/apple-watch-ultra-2-titanium-case-8531d04423a649e3940be6a32d677d33"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
          }
        },
        {
          id: "nintendo-switch-oled",
          name: "Nintendo Switch - OLED Model",
          shortDescription: "Features a vibrant 7-inch OLED screen, a wide adjustable stand, and enhanced audio.",
          image: "https://images.unsplash.com/photo-1653457224203-b0351369a478?w=400&h=300&fit=crop&q=80",
          price: "$349.99",
          tags: ["gaming", "console", "nintendo"],
          colors: ["White", "Neon Red/Blue"],
          referenceLinks: [
            { title: "Official Nintendo Website", url: "https://www.nintendo.com/us/switch/oled-model/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1653457224203-b0351369a478?w=800"],
            videos: ["https://www.youtube.com/watch?v=4mHq6Y7JSmg"],
            models3d: ["https://sketchfab.com/3d-models/nintendo-switch-oled-model-8250322f87f7422588c85419b4621cba"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1200px-Nintendo.svg.png"
          }
        },
        {
          id: "google-pixel-8-pro",
          name: "Google Pixel 8 Pro",
          shortDescription: "The most advanced Pixel camera yet, with Google AI to help you do more.",
          image: "https://images.unsplash.com/photo-1697059288188-4f6ea3a5d836?w=400&h=300&fit=crop&q=80",
          price: "$999.00",
          tags: ["smartphone", "google", "android"],
          colors: ["Porcelain", "Bay", "Obsidian"],
          referenceLinks: [
            { title: "Google Store", url: "https://store.google.com/product/pixel_8_pro" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1697059288188-4f6ea3a5d836?w=800"],
            videos: ["https://www.youtube.com/watch?v=u_5fw8j6vTM"],
            models3d: ["https://sketchfab.com/3d-models/google-pixel-8-pro-all-colors-1628d02c52084c8f9486c12b704c77d4"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          }
        },
        {
          id: "amazon-echo-dot",
          name: "Amazon Echo Dot (5th Gen)",
          shortDescription: "Our best-sounding Echo Dot yet, with clearer vocals and deeper bass.",
          image: "https://images.unsplash.com/photo-1678855682970-19277c1b5a5c?w=400&h=300&fit=crop&q=80",
          price: "$49.99",
          tags: ["smart-speaker", "amazon", "alexa"],
          colors: ["Charcoal", "Deep Sea Blue", "Glacier White"],
          referenceLinks: [
            { title: "Amazon Product Page", url: "https://www.amazon.com/dp/B09B8V1LZ3" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1678855682970-19277c1b5a5c?w=800"],
            videos: ["https://www.youtube.com/watch?v=f-YI3YpD_eY"],
            models3d: ["https://sketchfab.com/3d-models/amazon-echo-dot-5th-gen-841f33f2e1e342898c19951664c39c12"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          }
        },
        {
          id: "gopro-hero12-black",
          name: "GoPro HERO12 Black",
          shortDescription: "Incredible image quality, better HyperSmooth stabilization and a huge boost in battery life.",
          image: "https://images.unsplash.com/photo-1517721835560-a23a8b273b43?w=400&h=300&fit=crop&q=80",
          price: "$399.99",
          tags: ["action-camera", "gopro", "vlogging"],
          colors: ["Black"],
          referenceLinks: [
            { title: "GoPro Official Website", url: "https://gopro.com/en/us/shop/cameras/hero12-black/CHDHX-121-master.html" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1517721835560-a23a8b273b43?w=800"],
            videos: ["https://www.youtube.com/watch?v=19z766aTkgc"],
            models3d: ["https://sketchfab.com/3d-models/gopro-hero-11-black-c70e30d19e6b4e6490c649176f50539c"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/GoPro_logo.svg/1200px-GoPro_logo.svg.png"
          }
        },
        {
          id: "sony-wh1000xm5",
          name: "Sony WH-1000XM5 Headphones",
          shortDescription: "Industry-leading noise canceling headphones with a new design and exceptional sound quality.",
          image: "https://images.unsplash.com/photo-1680458925471-8935c7efb0f7?w=400&h=300&fit=crop&q=80",
          price: "$399.99",
          tags: ["audio", "headphones", "sony"],
          colors: ["Black", "Silver", "Midnight Blue"],
          referenceLinks: [
            { title: "Sony Official Website", url: "https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1680458925471-8935c7efb0f7?w=800"],
            videos: ["https://www.youtube.com/watch?v=hXgl3n-6i4w"],
            models3d: ["https://sketchfab.com/3d-models/sony-wh-1000xm5-headphones-2c5e533d1c5d4f3b890989f6b9c104e6"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png"
          }
        },
        {
          id: "lg-c3-oled-tv",
          name: "LG C3 65-Inch OLED TV",
          shortDescription: "Stunning 4K OLED picture quality with self-lit pixels and advanced AI processing.",
          image: "https://images.unsplash.com/photo-1628174715101-700682255d61?w=400&h=300&fit=crop&q=80",
          price: "$1599.99",
          tags: ["tv", "oled", "lg"],
          colors: ["Black"],
          referenceLinks: [
            { title: "LG Official Website", url: "https://www.lg.com/us/tvs/lg-oled65c3pua-oled-4k-tv" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1628174715101-700682255d61?w=800"],
            videos: ["https://www.youtube.com/watch?v=d_McfplB-mM"],
            models3d: ["https://sketchfab.com/3d-models/lg-oled-tv-c-series-8f1929949d014eb3a1b32d84713c79c5"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/LG_logo_%282014%29.svg/1200px-LG_logo_%282014%29.svg.png"
          }
        },
        {
          id: "razer-blade-15",
          name: "Razer Blade 15 Gaming Laptop",
          shortDescription: "Advanced gaming laptop with NVIDIA GeForce RTX graphics and a fast 15.6-inch display.",
          image: "https://images.unsplash.com/photo-1662015294572-c2b650a5813f?w=400&h=300&fit=crop&q=80",
          price: "$2499.99",
          tags: ["laptop", "gaming", "razer"],
          colors: ["Black"],
          referenceLinks: [
            { title: "Razer Official Website", url: "https://www.razer.com/gaming-laptops/razer-blade-15" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1662015294572-c2b650a5813f?w=800"],
            videos: ["https://www.youtube.com/watch?v=33yY2F01I3M"],
            models3d: ["https://sketchfab.com/3d-models/razer-blade-15-2022-laptop-e0b9b32c253c4489a246a48a4369e8b9"],
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png"
          }
        },
        {
            id: "dell-xps-15",
            name: "Dell XPS 15 Laptop",
            shortDescription: "A premium laptop with a stunning display, powerful performance, and sleek design.",
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&q=80",
            price: "$1499.00",
            tags: ["laptop", "dell", "windows"],
            colors: ["Platinum Silver"],
            referenceLinks: [
              { title: "Dell Official Website", url: "https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9530-laptop" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"],
              videos: ["https://www.youtube.com/watch?v=h6_0kF2VaGA"],
              models3d: ["https://sketchfab.com/3d-models/dell-xps-15-2020-f5713481b88e4414b2d55653c457d1a3"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1200px-Dell_Logo.svg.png"
            }
        },
        {
            id: "apple-ipad-pro",
            name: "Apple iPad Pro (M2)",
            shortDescription: "The ultimate iPad experience with the powerful M2 chip, Liquid Retina XDR display, and pro cameras.",
            image: "https://images.unsplash.com/photo-1587428124420-5631e87877e3?w=400&h=300&fit=crop&q=80",
            price: "$799.00",
            tags: ["tablet", "apple", "pro"],
            colors: ["Space Gray", "Silver"],
            referenceLinks: [
              { title: "Apple iPad Pro", url: "https://www.apple.com/ipad-pro/" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1587428124420-5631e87877e3?w=800"],
              videos: ["https://www.youtube.com/watch?v=yUKRk33hY-4"],
              models3d: ["https://sketchfab.com/3d-models/ipad-pro-2022-129-inch-8e2b1b3b1b1b4b1b8b1b1b1b1b1b1b1b"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
            }
        },
        {
            id: "samsung-galaxy-watch-6",
            name: "Samsung Galaxy Watch 6",
            shortDescription: "A stylish smartwatch with advanced health monitoring and a large, vibrant display.",
            image: "https://images.unsplash.com/photo-1694932223594-8a71931a74d4?w=400&h=300&fit=crop&q=80",
            price: "$299.99",
            tags: ["smartwatch", "samsung", "fitness"],
            colors: ["Graphite", "Silver", "Gold"],
            referenceLinks: [
              { title: "Samsung Official Website", url: "https://www.samsung.com/us/watches/galaxy-watch6/" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1694932223594-8a71931a74d4?w=800"],
              videos: ["https://www.youtube.com/watch?v=NA4aC3v-aYQ"],
              models3d: ["https://sketchfab.com/3d-models/samsung-galaxy-watch-6-classic-47mm-2115f532b2d04a60b94a8f9d0c65c404"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png"
            }
        },
        {
          id: "oculus-quest-3",
          name: "Meta Quest 3",
          shortDescription: "Breakthrough mixed reality headset that transforms your home into an exciting new playground.",
          image: "https://images.unsplash.com/photo-1697224281091-ce11c972f7a0?w=400&h=300&fit=crop&q=80",
          price: "$499.99",
          tags: ["vr", "gaming", "meta"],
          colors: ["White"],
          referenceLinks: [
            { title: "Meta Quest Official Site", url: "https://www.meta.com/quest/quest-3/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1697224281091-ce11c972f7a0?w=800"],
            videos: ["https://www.youtube.com/watch?v=5_bVkbG1ZCo"],
            models3d: ["https://sketchfab.com/3d-models/meta-quest-3-headset-2e7054f169544498b6c430e3715c61d5"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.svg/1200px-Meta-Logo.svg.png"
          }
        }
      ]
    },
    {
      id: "automobiles",
      name: "Automobiles",
      color: "#EF4444",
      products: [
        {
          id: "tesla-model-3",
          name: "Tesla Model 3",
          shortDescription: "Electric sedan with autopilot and over 300 miles of range.",
          image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop&q=80",
          price: "$38,990",
          tags: ["electric", "sedan", "autonomous"],
          colors: ["Pearl White", "Solid Black", "Midnight Silver", "Deep Blue", "Red Multi-Coat"],
          referenceLinks: [
            { title: "Tesla Official Website", url: "https://www.tesla.com/model3" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800"],
            videos: ["https://www.youtube.com/watch?v=sQdpOGu2dEg"],
            models3d: ["https://sketchfab.com/3d-models/tesla-model-3-e290453d9d6249c59527f549c450c201"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png"
          }
        },
        {
          id: "bmw-i8",
          name: "BMW i8",
          shortDescription: "A plug-in hybrid sports car with futuristic styling and butterfly doors.",
          image: "https://images.unsplash.com/photo-1566024169334-1c31a2a4a354?w=400&h=300&fit=crop&q=80",
          price: "$147,500",
          tags: ["sports-car", "hybrid", "bmw"],
          colors: ["Sophisto Grey", "Crystal White", "E-Copper"],
          referenceLinks: [
            { title: "BMW i8 Official Page", url: "https://www.bmwusa.com/concept-vehicles/i8-concept.html" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1566024169334-1c31a2a4a354?w=800"],
            videos: ["https://www.youtube.com/watch?v=cMTh99Y2-V8"],
            models3d: ["https://sketchfab.com/3d-models/bmw-i8-roadster-2018-091a0c4f3f014e7ab2f8f74701e85f81"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png"
          }
        },
        {
          id: "toyota-supra",
          name: "Toyota GR Supra",
          shortDescription: "An iconic sports car reborn, blending powerful performance with a stunning design.",
          image: "https://images.unsplash.com/photo-1577452878140-563b065a4b7f?w=400&h=300&fit=crop&q=80",
          price: "$45,540",
          tags: ["sports-car", "coupe", "toyota"],
          colors: ["Renaissance Red", "Nocturnal Black", "Absolute Zero White"],
          referenceLinks: [
            { title: "Toyota GR Supra Official Page", url: "https://www.toyota.com/grsupra/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1577452878140-563b065a4b7f?w=800"],
            videos: ["https://www.youtube.com/watch?v=zTzY4iG-eE0"],
            models3d: ["https://sketchfab.com/3d-models/toyota-supra-gr-a90-71708a28790046b5a103213c4c8d5a1c"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1200px-Toyota_carlogo.svg.png"
          }
        },
        {
          id: "porsche-taycan",
          name: "Porsche Taycan",
          shortDescription: "An all-electric sports sedan that is unmistakably Porsche in performance and soul.",
          image: "https://images.unsplash.com/photo-1582887618580-879a6382136e?w=400&h=300&fit=crop&q=80",
          price: "$90,900",
          tags: ["electric", "sedan", "porsche"],
          colors: ["Jet Black Metallic", "Carrara White", "Gentian Blue"],
          referenceLinks: [
            { title: "Porsche Taycan Official Page", url: "https://www.porsche.com/usa/models/taycan/taycan-models/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1582887618580-879a6382136e?w=800"],
            videos: ["https://www.youtube.com/watch?v=FpasYkmmg9g"],
            models3d: ["https://sketchfab.com/3d-models/porsche-taycan-turbo-s-cross-turismo-2021-39a7b26c36c7478d8a78370776b701f1"],
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Porsche_logo.svg/1200px-Porsche_logo.svg.png"
          }
        },
        {
          id: "jeep-wrangler",
          name: "Jeep Wrangler",
          shortDescription: "The iconic off-road SUV, offering open-air freedom and legendary capability.",
          image: "https://images.unsplash.com/photo-1551522435-aee06b25f47d?w=400&h=300&fit=crop&q=80",
          price: "$31,895",
          tags: ["suv", "off-road", "jeep"],
          colors: ["Firecracker Red", "Sarge Green", "Bright White"],
          referenceLinks: [
            { title: "Jeep Wrangler Official Page", url: "https://www.jeep.com/wrangler.html" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1551522435-aee06b25f47d?w=800"],
            videos: ["https://www.youtube.com/watch?v=Ankhs_3w0sI"],
            models3d: ["https://sketchfab.com/3d-models/jeep-wrangler-rubicon-2017-0630b95761e3450d876a440e69b5962b"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Jeep_logo.svg/1200px-Jeep_logo.svg.png"
          }
        },
        {
          id: "ford-mustang-mach-e",
          name: "Ford Mustang Mach-E",
          shortDescription: "An all-electric SUV that delivers exhilarating performance with the spirit of a Mustang.",
          image: "https://images.unsplash.com/photo-1621391590209-6d8c2e6486e9?w=400&h=300&fit=crop&q=80",
          price: "$43,495",
          tags: ["electric", "suv", "ford"],
          colors: ["Rapid Red", "Star White", "Grabber Blue"],
          referenceLinks: [
            { title: "Ford Mustang Mach-E Official Page", url: "https://www.ford.com/suvs/mustang-mach-e/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1621391590209-6d8c2e6486e9?w=800"],
            videos: ["https://www.youtube.com/watch?v=344_g0eM0-I"],
            models3d: ["https://sketchfab.com/3d-models/ford-mustang-mach-e-9154ac941c594c9ab5a7d6560965c490"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1200px-Ford_logo_flat.svg.png"
          }
        },
        {
          id: "rivian-r1t",
          name: "Rivian R1T",
          shortDescription: "The world's first electric adventure vehicle, a truck built for on- and off-road exploration.",
          image: "https://images.unsplash.com/photo-1647894451739-1959b8a82759?w=400&h=300&fit=crop&q=80",
          price: "$73,000",
          tags: ["electric", "truck", "rivian"],
          colors: ["Rivian Blue", "Glacier White", "Limestone"],
          referenceLinks: [
            { title: "Rivian R1T Official Page", url: "https://rivian.com/r1t" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1647894451739-1959b8a82759?w=800"],
            videos: ["https://www.youtube.com/watch?v=iAMzPs47Iqc"],
            models3d: ["https://sketchfab.com/3d-models/rivian-r1t-launch-edition-0e060c5a243a41b5a593259e217c91c3"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rivian_logo.svg/1200px-Rivian_logo.svg.png"
          }
        },
        {
          id: "porsche-911-gt3",
          name: "Porsche 911 GT3 RS",
          shortDescription: "A high-performance, track-focused sports car that pushes the limits of engineering.",
          image: "https://images.unsplash.com/photo-1678848415712-421b5aa76ef3?w=400&h=300&fit=crop&q=80",
          price: "$241,300",
          tags: ["supercar", "track", "porsche"],
          colors: ["Guards Red", "Racing Yellow", "GT Silver Metallic"],
          referenceLinks: [
            { title: "Porsche 911 GT3 RS Official Page", url: "https://www.porsche.com/usa/models/911/911-gt3-rs/911-gt3-rs/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1678848415712-421b5aa76ef3?w=800"],
            videos: ["https://www.youtube.com/watch?v=T_0b698pLRc"],
            models3d: ["https://sketchfab.com/3d-models/porsche-911-992-gt3-rs-2b5d4f3b76424564855a9602a65a315f"],
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Porsche_logo.svg/1200px-Porsche_logo.svg.png"
          }
        },
        {
          id: "lamborghini-huracan",
          name: "Lamborghini Huracán",
          shortDescription: "An exhilarating Italian supercar with a roaring V10 engine and breathtaking design.",
          image: "https://images.unsplash.com/photo-1599435163402-0a6a570c6314?w=400&h=300&fit=crop&q=80",
          price: "$249,865",
          tags: ["supercar", "v10", "lamborghini"],
          colors: ["Giallo Inti", "Verde Mantis", "Arancio Borealis"],
          referenceLinks: [
            { title: "Lamborghini Huracán Official Page", url: "https://www.lamborghini.com/en-en/models/huracan" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1599435163402-0a6a570c6314?w=800"],
            videos: ["https://www.youtube.com/watch?v=--T2G7oE-aI"],
            models3d: ["https://sketchfab.com/3d-models/lamborghini-huracan-sto-d6278e9185a940428d009b0b4317112c"],
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png"
          }
        },
        {
          id: "ferrari-sf90",
          name: "Ferrari SF90 Stradale",
          shortDescription: "A revolutionary hybrid supercar, the most powerful production Ferrari ever made.",
          image: "https://images.unsplash.com/photo-1617079233633-82089304125a?w=400&h=300&fit=crop&q=80",
          price: "$524,814",
          tags: ["hypercar", "hybrid", "ferrari"],
          colors: ["Rosso Corsa", "Giallo Modena", "Nero Daytona"],
          referenceLinks: [
            { title: "Ferrari SF90 Official Page", url: "https://www.ferrari.com/en-EN/auto/sf90-stradale" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1617079233633-82089304125a?w=800"],
            videos: ["https://www.youtube.com/watch?v=sdY86bwlGms"],
            models3d: ["https://sketchfab.com/3d-models/ferrari-sf90-stradale-2020-f5a6039f697444c194e4a646c1a8e806"],
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/1200px-Ferrari-Logo.svg.png"
          }
        },
        {
          id: "audi-r8",
          name: "Audi R8",
          shortDescription: "A V10-powered supercar that combines breathtaking performance with everyday usability.",
          image: "https://images.unsplash.com/photo-1614026480414-2340339defa2?w=400&h=300&fit=crop&q=80",
          price: "$158,600",
          tags: ["supercar", "v10", "audi"],
          colors: ["Ibis White", "Mythos Black", "Vegas Yellow"],
          referenceLinks: [
            { title: "Audi R8 Official Page", url: "https://www.audiusa.com/us/web/en/models/r8/r8-coupe.html" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1614026480414-2340339defa2?w=800"],
            videos: ["https://www.youtube.com/watch?v=ASMDYCFzXRw"],
            models3d: ["https://sketchfab.com/3d-models/audi-r8-v10-plus-2016-291702f254e743a497a7a53c65d2a9f4"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/1200px-Audi-Logo_2016.svg.png"
          }
        },
        {
          id: "corvette-c8",
          name: "Chevrolet Corvette C8",
          shortDescription: "The first-ever mid-engine Corvette, a supercar that pushes the boundaries of performance.",
          image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop&q=80",
          price: "$68,300",
          tags: ["supercar", "mid-engine", "chevrolet"],
          colors: ["Torch Red", "Arctic White", "Amplify Orange"],
          referenceLinks: [
            { title: "Chevrolet Corvette Official Page", url: "https://www.chevrolet.com/performance/corvette" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800"],
            videos: ["https://www.youtube.com/watch?v=S2gPSo2bbkU"],
            models3d: ["https://sketchfab.com/3d-models/corvette-c8-stingray-2020-f5a08ac9303d42c38708fd53573887c3"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet-logo.png/1200px-Chevrolet-logo.png"
          }
        },
         {
            id: "land-rover-defender",
            name: "Land Rover Defender",
            shortDescription: "An icon reimagined for the 21st century. An unstoppable and capable off-road vehicle.",
            image: "https://images.unsplash.com/photo-1678252251996-26795f723631?w=400&h=300&fit=crop&q=80",
            price: "$56,400",
            tags: ["suv", "off-road", "land-rover"],
            colors: ["Pangea Green", "Tasman Blue", "Santorini Black"],
            referenceLinks: [
              { title: "Land Rover Official Website", url: "https://www.landroverusa.com/defender/index.html" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1678252251996-26795f723631?w=800"],
              videos: ["https://www.youtube.com/watch?v=17w7T5pE_j0"],
              models3d: ["https://sketchfab.com/3d-models/land-rover-defender-110-2020-f0049714c64b4c379a25e6e2f1860d5b"],
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Land_Rover_logo.svg/1200px-Land_Rover_logo.svg.png"
            }
        },
        {
            id: "mclaren-720s",
            name: "McLaren 720S",
            shortDescription: "A breathtaking supercar with a twin-turbo V8, known for its incredible speed and aerodynamic design.",
            image: "https://images.unsplash.com/photo-1594838634937-2351235b89a8?w=400&h=300&fit=crop&q=80",
            price: "$310,500",
            tags: ["supercar", "mclaren", "v8"],
            colors: ["McLaren Orange", "Silica White", "Onyx Black"],
            referenceLinks: [
              { title: "McLaren Official Website", url: "https://cars.mclaren.com/us-en/super-series/720s" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1594838634937-2351235b89a8?w=800"],
              videos: ["https://www.youtube.com/watch?v=x-8_4o-2j8M"],
              models3d: ["https://sketchfab.com/3d-models/mclaren-720s-b971a815e9944358872580a5e2f7a627"],
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/McLaren_logo.svg/1200px-McLaren_logo.svg.png"
            }
        },
        {
            id: "bugatti-chiron",
            name: "Bugatti Chiron",
            shortDescription: "A masterpiece of engineering, a quad-turbo W16 hypercar that defines ultimate performance.",
            image: "https://images.unsplash.com/photo-1616422285852-243178a7c5c7?w=400&h=300&fit=crop&q=80",
            price: "$3,300,000",
            tags: ["hypercar", "bugatti", "luxury"],
            colors: ["French Racing Blue", "Black Carbon", "Red Carbon"],
            referenceLinks: [
              { title: "Bugatti Official Website", url: "https://www.bugatti.com/chiron/" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1616422285852-243178a7c5c7?w=800"],
              videos: ["https://www.youtube.com/watch?v=PkkV1vLnHDU"],
              models3d: ["https://sketchfab.com/3d-models/bugatti-chiron-pur-sport-92d6399126a245f9911e3bce7c83f12c"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bugatti_logo.svg/1200px-Bugatti_logo.svg.png"
            }
        }
      ]
    },
    {
      id: "lifestyle-fashion",
      name: "Lifestyle & Fashion",
      color: "#8B5CF6",
      products: [
        {
          id: "air-jordan-1",
          name: "Nike Air Jordan 1",
          shortDescription: "Legendary basketball sneakers that started the Jordan legacy.",
          image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop&q=80",
          price: "$180.00",
          tags: ["sneakers", "basketball", "retro"],
          colors: ["Bred", "Chicago", "Royal Blue"],
          referenceLinks: [
            { title: "Nike Official Store", url: "https://www.nike.com/jordan" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800"],
            videos: ["https://www.youtube.com/watch?v=Q4PE2hSqVnk"],
            models3d: ["https://sketchfab.com/3d-models/nike-air-jordan-1-retro-high-og-chicago-85287f3394a44a178229b36952a20b92"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
          }
        },
        {
          id: "adidas-ultraboost",
          name: "Adidas Ultraboost 1.0",
          shortDescription: "A revolutionary running shoe with responsive Boost cushioning for ultimate comfort.",
          image: "https://images.unsplash.com/photo-1557683311-e8720444d623?w=400&h=300&fit=crop&q=80",
          price: "$180.00",
          tags: ["sneakers", "running", "adidas"],
          colors: ["Core Black", "Cloud White", "Grey Three"],
          referenceLinks: [
            { title: "Adidas Official Store", url: "https://www.adidas.com/us/ultraboost" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1557683311-e8720444d623?w=800"],
            videos: ["https://www.youtube.com/watch?v=kPuA822iXPc"],
            models3d: ["https://sketchfab.com/3d-models/adidas-ultra-boost-20-43545800d54f4640989b5c31752b0278"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png"
          }
        },
        {
          id: "ray-ban-aviator",
          name: "Ray-Ban Aviator Classic",
          shortDescription: "Timeless sunglasses originally designed for U.S. aviators in 1937.",
          image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop&q=80",
          price: "$163.00",
          tags: ["sunglasses", "classic", "ray-ban"],
          colors: ["Gold/Green", "Black/Grey", "Silver/Blue"],
          referenceLinks: [
            { title: "Ray-Ban Official Store", url: "https://www.ray-ban.com/usa/sunglasses/aviator" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800"],
            videos: ["https://www.youtube.com/watch?v=fAlOSY5p7yU"],
            models3d: ["https://sketchfab.com/3d-models/ray-ban-aviator-313d4b6b69c24e75a5c4b8b6a372642a"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ray-Ban_logo.svg/1200px-Ray-Ban_logo.svg.png"
          }
        },
        {
          id: "fossil-smartwatch",
          name: "Fossil Gen 6 Smartwatch",
          shortDescription: "A stylish smartwatch with advanced health tracking, powered by Wear OS.",
          image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop&q=80",
          price: "$299.00",
          tags: ["smartwatch", "wearable", "fossil"],
          colors: ["Smoke Stainless", "Brown Leather", "Rose Gold"],
          referenceLinks: [
            { title: "Fossil Official Store", url: "https://www.fossil.com/en-us/smartwatches/gen-6/" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"],
            videos: ["https://www.youtube.com/watch?v=f2n_3f2TjXA"],
            models3d: ["https://sketchfab.com/3d-models/fossil-carlyle-hr-gen-5-smartwatch-92c286576b29402195f4640d2109e99a"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Fossil_Group_logo.svg/1200px-Fossil_Group_logo.svg.png"
          }
        },
        {
          id: "gucci-handbag",
          name: "Gucci GG Marmont Handbag",
          shortDescription: "An iconic luxury handbag with matelassé leather and the Double G hardware.",
          image: "https://images.unsplash.com/photo-1628218683269-e07fa14122d2?w=400&h=300&fit=crop&q=80",
          price: "$2,550.00",
          tags: ["handbag", "luxury", "gucci"],
          colors: ["Black", "Dusty Pink", "White"],
          referenceLinks: [
            { title: "Gucci Official Store", url: "https://www.gucci.com/us/en/ca/women/handbags/shoulder-bags-for-women/gg-marmont-c-women-handbags-shoulder-bags-gg-marmont" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1628218683269-e07fa14122d2?w=800"],
            videos: ["https://www.youtube.com/watch?v=H7J6f3t8n3s"],
            models3d: ["https://sketchfab.com/3d-models/gucci-bag-888e4046206d4e8c894200c50c0c6c22"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/1200px-Gucci_logo.svg.png"
          }
        },
        {
          id: "rolex-submariner",
          name: "Rolex Submariner Date",
          shortDescription: "The quintessential divers' watch, a benchmark in its genre since 1953.",
          image: "https://images.unsplash.com/photo-1620625335279-51369796825c?w=400&h=300&fit=crop&q=80",
          price: "$10,250.00",
          tags: ["watch", "luxury", "rolex"],
          colors: ["Oystersteel/Black", "Oystersteel/Green"],
          referenceLinks: [
            { title: "Rolex Official Website", url: "https://www.rolex.com/watches/submariner" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1620625335279-51369796825c?w=800"],
            videos: ["https://www.youtube.com/watch?v=QRmTo7T-eYI"],
            models3d: ["https://sketchfab.com/3d-models/rolex-submariner-46d4a133454b423192a83151b1481b4f"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Rolex_logo.svg/1200px-Rolex_logo.svg.png"
          }
        },
        {
          id: "levis-501-jeans",
          name: "Levi's 501 Original Fit Jeans",
          shortDescription: "The timeless American classic, the original blue jean since 1873.",
          image: "https://images.unsplash.com/photo-1604176354204-926873782855?w=400&h=300&fit=crop&q=80",
          price: "$79.50",
          tags: ["denim", "jeans", "levis"],
          colors: ["Stonewash", "Dark Indigo", "Black"],
          referenceLinks: [
            { title: "Levi's Official Store", url: "https://www.levi.com/US/en_US/clothing/men/jeans/501/c/levi_clothing_men_jeans_501" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1604176354204-926873782855?w=800"],
            videos: ["https://www.youtube.com/watch?v=S8pUAT5d658"],
            models3d: ["https://sketchfab.com/3d-models/levis-501-jeans-5a8b79f2e4824e4d9b626e2e5f17112d"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Levi%27s_logo.svg/1200px-Levi%27s_logo.svg.png"
          }
        },
        {
          id: "patagonia-better-sweater",
          name: "Patagonia Better Sweater Fleece Jacket",
          shortDescription: "A warm, low-bulk full-zip jacket made of soft, sweater-knit recycled polyester fleece.",
          image: "https://images.unsplash.com/photo-1628741341650-b0521e1a5338?w=400&h=300&fit=crop&q=80",
          price: "$149.00",
          tags: ["outerwear", "fleece", "patagonia"],
          colors: ["Stonewash", "Nickel", "New Navy"],
          referenceLinks: [
            { title: "Patagonia Official Website", url: "https://www.patagonia.com/product/mens-better-sweater-fleece-jacket/25528.html" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1628741341650-b0521e1a5338?w=800"],
            videos: ["https://www.youtube.com/watch?v=s4e_a_eei44"],
            models3d: null,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Patagonia_logo.svg/1200px-Patagonia_logo.svg.png"
          }
        },
        {
          id: "louis-vuitton-keepall",
          name: "Louis Vuitton Keepall Bandoulière",
          shortDescription: "The iconic travel bag in Monogram canvas, perfect for stylish getaways.",
          image: "https://images.unsplash.com/photo-1611094353457-39d675b3c375?w=400&h=300&fit=crop&q=80",
          price: "$2,570.00",
          tags: ["bag", "travel", "louis-vuitton"],
          colors: ["Monogram Canvas", "Damier Ebene", "Damier Graphite"],
          referenceLinks: [
            { title: "Louis Vuitton Official Website", url: "https://us.louisvuitton.com/eng-us/products/keepall-bandouliere-55-monogram-canvas-000695/M41414" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1611094353457-39d675b3c375?w=800"],
            videos: ["https://www.youtube.com/watch?v=Fiu-NrcV_z0"],
            models3d: ["https://sketchfab.com/3d-models/louis-vuitton-x-nba-keepall-55b-43ac86ff73294334a17fdc5ed036a117"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Louis_Vuitton_logo_and_wordmark.svg/1200px-Louis_Vuitton_logo_and_wordmark.svg.png"
          }
        },
        {
          id: "dr-martens-1460",
          name: "Dr. Martens 1460 Boots",
          shortDescription: "The original Dr. Martens boot, instantly recognizable with 8 eyes and yellow stitching.",
          image: "https://images.unsplash.com/photo-1608256247798-a53a6e451b2a?w=400&h=300&fit=crop&q=80",
          price: "$170.00",
          tags: ["boots", "leather", "dr-martens"],
          colors: ["Black Smooth", "Cherry Red", "White Smooth"],
          referenceLinks: [
            { title: "Dr. Martens Official Website", url: "https://www.drmartens.com/us/en/1460-smooth-leather-lace-up-boots/p/11822006" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1608256247798-a53a6e451b2a?w=800"],
            videos: ["https://www.youtube.com/watch?v=HPs94Pj2w9Y"],
            models3d: ["https://sketchfab.com/3d-models/dr-martens-1460-boots-01524316d31e42b292e4e1a0d63353e6"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dr._Martens_logo.svg/1200px-Dr._Martens_logo.svg.png"
          }
        },
        {
          id: "yeezy-boost-350",
          name: "Adidas Yeezy Boost 350 V2",
          shortDescription: "A highly sought-after sneaker featuring a Primeknit upper and Boost midsole.",
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&q=80",
          price: "$230.00",
          tags: ["sneakers", "hype", "yeezy"],
          colors: ["Zebra", "Beluga", "Bone"],
          referenceLinks: [
            { title: "Adidas Yeezy Page", url: "https://www.adidas.com/us/yeezy" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"],
            videos: ["https://www.youtube.com/watch?v=Dgyuym4G97o"],
            models3d: ["https://sketchfab.com/3d-models/adidas-yeezy-boost-350-v2-50d4f40f0c05423883a48e77c5740fcb"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png"
          }
        },
        {
          id: "cartier-love-bracelet",
          name: "Cartier Love Bracelet",
          shortDescription: "A symbol of free-spirited love, a timeless tribute to passionate romance.",
          image: "https://images.unsplash.com/photo-1620958932348-8319e7a83421?w=400&h=300&fit=crop&q=80",
          price: "$6,900.00",
          tags: ["jewelry", "bracelet", "cartier"],
          colors: ["Yellow Gold", "Pink Gold", "White Gold"],
          referenceLinks: [
            { title: "Cartier Official Website", url: "https://www.cartier.com/en-us/jewelry/bracelets/love-bracelet-CRB6035517.html" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1620958932348-8319e7a83421?w=800"],
            videos: ["https://www.youtube.com/watch?v=Jm3Kk3T_ibg"],
            models3d: ["https://sketchfab.com/3d-models/cartier-love-bracelet-590f7a63445a4a58b8555e7178c7c919"],
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cartier_logo.svg/1200px-Cartier_logo.svg.png"
          }
        },
        {
          id: "north-face-nuptse",
          name: "The North Face 1996 Retro Nuptse Jacket",
          shortDescription: "An iconic, boxy-silhouette jacket with lofty down insulation and a stowable hood.",
          image: "https://images.unsplash.com/photo-1531551063922-2b827e8579cf?w=400&h=300&fit=crop&q=80",
          price: "$330.00",
          tags: ["outerwear", "puffer", "the-north-face"],
          colors: ["TNF Black", "Recycled TNF Red", "Lapis Blue"],
          referenceLinks: [
            { title: "The North Face Official Website", url: "https://www.thenorthface.com/en-us/mens/mens-jackets-vests/mens-insulated-down-jackets-c299298/mens-1996-retro-nuptse-jacket-pNF0A3C8D" }
          ],
          assets: {
            images: ["https://images.unsplash.com/photo-1531551063922-2b827e8579cf?w=800"],
            videos: ["https://www.youtube.com/watch?v=n-W2XA5Sxls"],
            models3d: null,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_North_Face_logo.svg/1200px-The_North_Face_logo.svg.png"
          }
        },
        {
            id: "converse-chuck-70",
            name: "Converse Chuck 70",
            shortDescription: "A vintage-inspired sneaker with modern comfort, celebrating the original 1970s design.",
            image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&h=300&fit=crop&q=80",
            price: "$85.00",
            tags: ["sneakers", "classic", "converse"],
            colors: ["Black", "Parchment", "Sunflower"],
            referenceLinks: [
              { title: "Converse Official Website", url: "https://www.converse.com/shop/p/chuck-70-vintage-canvas-unisex-high-top-shoe/162050C.html" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800"],
              videos: ["https://www.youtube.com/watch?v=uD9x4fV2v4E"],
              models3d: ["https://sketchfab.com/3d-models/converse-chuck-taylor-all-star-70-hi-0c4bd4c8a8c94e8b8a5d3f2b6e1b7f0f"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/1200px-Converse_logo.svg.png"
            }
        },
        {
            id: "fjallraven-kanken",
            name: "Fjällräven Kånken Backpack",
            shortDescription: "A durable and iconic Swedish backpack, perfect for school, work, or travel.",
            image: "https://images.unsplash.com/photo-1553531889-0c678a2da389?w=400&h=300&fit=crop&q=80",
            price: "$80.00",
            tags: ["backpack", "travel", "fjallraven"],
            colors: ["Frost Green", "Ox Red", "Graphite"],
            referenceLinks: [
              { title: "Fjällräven Official Website", url: "https://www.fjallraven.com/us/en-us/bags-gear/kanken/kanken-bags/kanken" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1553531889-0c678a2da389?w=800"],
              videos: ["https://www.youtube.com/watch?v=1LAyS4gBUG8"],
              models3d: ["https://sketchfab.com/3d-models/fjallraven-kanken-backpack-3180c051a3a64d1f868ac483253b8112"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Fj%C3%A4llr%C3%A4ven_logo.svg"
            }
        },
        {
            id: "hermes-h-belt",
            name: "Hermès H Belt Buckle & Reversible Strap",
            shortDescription: "An iconic, reversible leather belt featuring the signature 'H' buckle.",
            image: "https://images.unsplash.com/photo-1620921499557-42775a63c65c?w=400&h=300&fit=crop&q=80",
            price: "$930.00",
            tags: ["belt", "luxury", "hermes"],
            colors: ["Noir/Gold", "Etoupe/Bleu", "Orange/Chocolat"],
            referenceLinks: [
              { title: "Hermès Official Website", url: "https://www.hermes.com/us/en/product/h-belt-buckle-reversible-leather-strap-32-mm-U_BELT_32_H064544CC06_H073967CAAA085/" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1620921499557-42775a63c65c?w=800"],
              videos: ["https://www.youtube.com/watch?v=kYJjYyWb8YI"],
              models3d: ["https://sketchfab.com/3d-models/hermes-h-belt-9e2c6e2b6e3a4e2c9e2c6e2b6e3a4e2c"],
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Hermes_logo.svg/1200px-Hermes_logo.svg.png"
            }
        },
        {
            id: "canada-goose-parka",
            name: "Canada Goose Expedition Parka",
            shortDescription: "The original extreme weather parka, developed for scientists working in Antarctica.",
            image: "https://images.unsplash.com/photo-1546483875-38d5d4a99184?w=400&h=300&fit=crop&q=80",
            price: "$1,550.00",
            tags: ["outerwear", "winter", "canada-goose"],
            colors: ["Black", "Navy", "Red"],
            referenceLinks: [
              { title: "Canada Goose Official Website", url: "https://www.canadagoose.com/us/en/expedition-parka-4660M.html" }
            ],
            assets: {
              images: ["https://images.unsplash.com/photo-1546483875-38d5d4a99184?w=800"],
              videos: ["https://www.youtube.com/watch?v=S07Bkaq_2gU"],
              models3d: null,
              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Canada_Goose_logo.svg/1200px-Canada_Goose_logo.svg.png"
            }
        }
      ]
    }
  ]
};
