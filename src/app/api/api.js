const clothes = [
  {
    id: 1,
    title: "Бомбер красный",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image:
      "https://static.insales-cdn.com/r/cYmKb2URHHE/rs:fit:440:0:1/q:100/plain/images/products/1/2153/423413865/large_Rectangle-6.jpg",
    rating: { rate: 3.9, count: 120 },
    size: "S",
    sex: "male"
  },
  {
    id: 2,
    title: "Пальто кашемировое",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://static.insales-cdn.com/r/-0vRTRhZo-k/rs:fit:440:0:1/plain/images/products/1/2216/423413928/large_Rectangle-7.jpg",
    rating: { rate: 4.1, count: 259 },
    size: "M",
    sex: "male"
  },
  {
    id: 3,
    title: "Футболка горчичная",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image:
      "https://static.insales-cdn.com/r/WC5AvmbNH8Q/rs:fit:440:0:1/plain/images/products/1/2269/423413981/large_Rectangle-14.jpg",
    rating: { rate: 4.7, count: 500 },
    size: "L",
    sex: "male"
  },
  {
    id: 4,
    title: "Кардиган серый",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image:
      "https://static.insales-cdn.com/r/NjkBpRnUjqw/rs:fit:440:0:1/plain/images/products/1/2350/423414062/large_Rectangle-13.jpg",
    rating: { rate: 2.1, count: 430 },
    size: "XL",
    sex: "male"
  },
  {
    id: 5,
    title: "Куртка с карманами",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image:
      "https://static.insales-cdn.com/r/WkAIpo3w3KA/rs:fit:440:0:1/plain/images/products/1/2439/423414151/large_Rectangle-3.jpg",
    rating: { rate: 4.6, count: 400 },
    size: "S",
    sex: "male"
  },
  {
    id: 6,
    title: "Пальто песочное",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "https://static.insales-cdn.com/r/c0_WV0mSp3s/rs:fit:440:0:1/plain/images/products/1/2515/423414227/large_Rectangle.jpg",
    rating: { rate: 3.9, count: 70 },
    size: "S",
    sex: "male"
  },
  {
    id: 7,
    title: "Джинсовая куртка синяя",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image:
      "https://static.insales-cdn.com/r/YVTNTRbduc0/rs:fit:440:0:1/plain/images/products/1/1901/423438189/large_Rectangle.jpg",
    rating: { rate: 3, count: 400 },
    size: "L",
    sex: "female"
  },
  {
    id: 8,
    title: "Куртка с вишенками",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image:
      "https://static.insales-cdn.com/r/ZO7lm1cCAoU/rs:fit:440:0:1/plain/images/products/1/2795/423439083/large_Rectangle-1.jpg",
    rating: { rate: 1.9, count: 100 },
    size: "XL",
    sex: "female"
  },
  {
    id: 9,
    title: "Юбка длинная, желтая клетка",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image:
      "https://static.insales-cdn.com/r/PiByPn5EuIY/rs:fit:440:0:1/plain/images/products/1/3168/423439456/large_Rectangle-2.jpg",
    rating: { rate: 3.3, count: 203 },
    size: "L",
    sex: "female"
  },
  {
    id: 10,
    title: "Платье кружевное, морковное",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image:
      "https://static.insales-cdn.com/r/cgaVqfv8waI/rs:fit:440:0:1/plain/images/products/1/3663/423439951/large_Rectangle-3.jpg",
    rating: { rate: 2.9, count: 470 },
    size: "M",
    sex: "female"
  },
  {
    id: 11,
    title: "Платье в тонкую полоску, голубое",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image:
      "https://static.insales-cdn.com/r/ZjpZj_zeULA/rs:fit:440:0:1/plain/images/products/1/1026/423445506/large_Rectangle-5.jpg",
    rating: { rate: 4.8, count: 319 },
    size: "M",
    sex: "female"
  },
  {
    id: 12,
    title: "Платье красное в цветочек",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image:
      "https://static.insales-cdn.com/r/mzxYfRfFLlk/rs:fit:440:0:1/plain/images/products/1/1331/423445811/large_Rectangle-6.jpg",
    rating: { rate: 4.8, count: 400 },
    size: "XL",
    sex: "female"
  },
  {
    id: 13,
    title: "Платье черное в цветочек",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image:
      "https://static.insales-cdn.com/r/wPJzVT-UFSE/rs:fit:440:0:1/plain/images/products/1/2329/423446809/large_Rectangle-7.jpg",
    rating: { rate: 2.9, count: 250 },
    size: "S",
    sex: "female"
  },
  {
    id: 14,
    title: "Платье воздушное, белое",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image:
      "https://static.insales-cdn.com/r/hxkBwt8lkIU/rs:fit:440:0:1/plain/images/products/1/3508/423447988/large_Rectangle-8.jpg",
    rating: { rate: 2.2, count: 140 },
    size: "M",
    sex: "female"
  },
  {
    id: 15,
    title: "Платье синее в цветочек",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image:
      "https://static.insales-cdn.com/r/tOzPa9V8EGw/rs:fit:440:0:1/plain/images/products/1/3827/423448307/large_Rectangle-10.jpg",
    rating: { rate: 2.6, count: 235 },
    size: "XL",
    sex: "female"
  },
  {
    id: 17,
    title: "Комбинезон серый",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image:
      "https://static.insales-cdn.com/r/pz_ifBIhUiM/rs:fit:440:0:1/plain/images/products/1/4293/423448773/large_Rectangle-11.jpg",
    rating: { rate: 3.8, count: 679 },
    size: "S",
    sex: "female"
  },
  {
    id: 18,
    title: "Платье цветочное",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image:
      "https://static.insales-cdn.com/r/5RN3821PBbM/rs:fit:440:0:1/q:100/plain/images/products/1/5274/423449754/large_Rectangle-12.jpg",
    rating: { rate: 4.7, count: 130 },
    size: "M",
    sex: "female"
  },
  {
    id: 19,
    title: "Платье вечернее, розовое",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image:
      "https://static.insales-cdn.com/r/nr9jy15tBCs/rs:fit:440:0:1/q:100/plain/images/products/1/5483/423449963/large_Rectangle-14.jpg",
    rating: { rate: 4.5, count: 146 },
    size: "L",
    sex: "female"
  },
  {
    id: 20,
    title: "Джинсовая куртка, бирюза",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image:
      "https://static.insales-cdn.com/r/b4lR0GeXe8k/rs:fit:440:0:1/q:100/plain/images/products/1/4805/423416517/large_Rectangle-11.jpg",
    rating: { rate: 3.6, count: 145 },
    size: "L",
    sex: "male"
  }
];

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const foundItem = clothes.find(
        (item) => item.id.toString() === id.toString()
      );
      resolve(foundItem);
    }, 1000);
  });
};

export const fetchAll = (item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredClothesAsSex = item
        ? clothes.filter((clothe) => clothe.sex === item)
        : clothes;
      if (filteredClothesAsSex.length) {
        resolve(filteredClothesAsSex);
      } else {
        resolve(clothes);
      }
    }, 1000);
  });
};
