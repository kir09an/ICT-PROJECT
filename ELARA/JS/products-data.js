// All 15 ELARA perfumes data
const elaraProducts = {
    // FOR HER COLLECTION
    "elara-lumiere": {
        id: "elara-lumiere",
        name: "Elara Lumière",
        category: "her",
        price: 300,
        tagline: "Soft Radiance, Clean Glow",
        description: "Elara Lumière is an ode to the soft, bright light of a new dawn, capturing a moment of pure, unburdened elegance. It is crafted for the woman who possesses an innate, gentle strength—a soft radiance that lights up any room.",
        image: "elara lumere.jpg",
        notes: {
            top: ["Calabrian Bergamot"],
            middle: ["White Peony"],
            base: ["Soft Musk"]
        },
        ingredients: "Alcohol Denat., Fragrance (Parfum), Aqua, Limonene, Linalool, Citronellol, Geraniol.",
        story: "LUMIÈRE was born from the magical hour when night gently surrenders to day. That fleeting moment when the world is bathed in soft, golden light and anything seems possible. We captured the essence of hope, new beginnings, and the quiet confidence that comes with the dawn."
    },

    "elara-amora": {
        id: "elara-amora",
        name: "Elara Amora",
        category: "her",
        price: 285,
        tagline: "Romantic Warmth with an Elegant Edge",
        description: "Elara Amora captures the sophisticated passion of a romance that deepens over time. A velvet declaration, it begins with a sweet, sparkling burst of succulent Red Berries.",
        image: "elara amora.jpg",
        notes: {
            top: ["Red Berries"],
            middle: ["Rose Petals"],
            base: ["Amber"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Citral, Geraniol, Linalool.",
        story: "AMORA is the scent of a love story written in velvet and gold. Each note tells a chapter of passion that grows deeper, richer, and more sophisticated with time."
    },

    "elara-fleure": {
        id: "elara-fleure",
        name: "Elara Fleuré",
        category: "her",
        price: 275,
        tagline: "Delicate, Blooming, Quiet Beauty",
        description: "Elara Fleuré is an ethereal watercolor of white flowers, embodying the fragile, yet undeniable strength of nature's delicate artistry.",
        image: "elara fleure.jpg",
        notes: {
            top: ["Limonene"],
            middle: ["Jasmine", "Lily"],
            base: ["Powdery Florals"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Limonene, Linalool.",
        story: "FLEURÉ captures the moment a flower unfurls its petals at dawn - delicate, determined, and breathtakingly beautiful."
    },

    "elara-selene": {
        id: "elara-selene",
        name: "Elara Selène",
        category: "her",
        price: 290,
        tagline: "Dreamy, Soft, and Ethereal",
        description: "Elara Selène is a dreamy, hypnotic scent inspired by the cool, soft luminescence of the full moon.",
        image: "elara selene.jpg",
        notes: {
            top: ["Violet"],
            middle: ["White Musk"],
            base: ["Soft Vanilla"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Isoeugenol, Coumarin.",
        story: "SELÈNE dances in moonlight, capturing the mysterious beauty of the night when dreams feel most vivid and possibilities feel endless."
    },

    "elara-mystique": {
        id: "elara-mystique",
        name: "Elara Mystique",
        category: "her",
        price: 320,
        tagline: "Luxurious, Sensual, Slow-Burn Elegance",
        description: "Elara Mystique is the ultimate expression of slow-burn elegance—a rich, deep, and sensual evening fragrance built on profound luxury.",
        image: "elara mystique.jpg",
        notes: {
            top: ["Plum"],
            middle: ["Black Orchid"],
            base: ["Dark Amber"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Linalool, Benzyl Benzoate, Coumarin.",
        story: "MYSTIQUE reveals its secrets slowly, like a story told in whispers after midnight. Each layer unfolds to reveal deeper, more intoxicating complexity."
    },

    // FOR HIM COLLECTION
    "elara-noctis": {
        id: "elara-noctis",
        name: "Elara Noctis",
        category: "him",
        price: 320,
        tagline: "Dark, Powerful, Magnetic",
        description: "Elara Noctis is the very definition of magnetic strength, inspired by the commanding stillness of the midnight hour.",
        image: "noctis.jpg",
        notes: {
            top: ["Black Pepper"],
            middle: ["Smoke Accord"],
            base: ["Cedarwood"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Linalool, Limonene.",
        story: "NOCTIS embodies the power of midnight - when the world is quiet but everything feels possible. A scent for those who command attention without saying a word."
    },

    "elara-vayun": {
        id: "elara-vayun",
        name: "Elara Vayun",
        category: "him",
        price: 265,
        tagline: "Fresh, Modern, Crisp",
        description: "Elara Vayun is a distillation of pure, invigorating modernity. Clean, dynamic, and effortlessly crisp.",
        image: "vayun.jpg",
        notes: {
            top: ["Mint"],
            middle: ["Marine Notes"],
            base: ["Clean Woods"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Citral, Linalool.",
        story: "VAYUN is the first breath of fresh air on a mountain peak - crisp, clean, and revitalizing. For the man who moves with purpose and clarity."
    },

    "elara-aurum": {
        id: "elara-aurum",
        name: "Elara Aurum",
        category: "him",
        price: 350,
        tagline: "Luxurious, Warm, Premium Masculine Presence",
        description: "Elara Aurum is liquid gold—a fragrance of unparalleled warmth and opulence.",
        image: "aurum.jpg",
        notes: {
            top: ["Saffron"],
            middle: ["Leather Accord"],
            base: ["Oud"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Benzyl Alcohol, Coumarin.",
        story: "AURUM is wealth in a bottle - not just material wealth, but the richness of experience, wisdom, and timeless elegance."
    },

    "elara-solen": {
        id: "elara-solen",
        name: "Elara Solen",
        category: "him",
        price: 295,
        tagline: "Strong, Warm, Confident",
        description: "Elara Solen is the essence of a confident, warm, and grounded man—a radiant and enduring masculine classic.",
        image: "solen.jpg",
        notes: {
            top: ["Citrus"],
            middle: ["Amber Resin"],
            base: ["Sandalwood"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Citral, Limonene.",
        story: "SOLEN radiates the steady, reliable warmth of the sun. A scent for the man who stands as a pillar of strength and confidence."
    },

    "elara-arven": {
        id: "elara-arven",
        name: "Elara Arven",
        category: "him",
        price: 280,
        tagline: "Noble, Bold, Protective Aura",
        description: "Elara Arven is an olfactive representation of a protective, noble spirit.",
        image: "arven.jpg",
        notes: {
            top: ["Sage"],
            middle: ["Vetiver"],
            base: ["Dark Musk"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Linalool, Hexyl Cinnamal.",
        story: "ARVEN is the scent of ancient forests and noble spirits. A protective aura for the modern guardian who stands for what matters."
    },

    // UNISEX COLLECTION
    "elara-zephyr": {
        id: "elara-zephyr",
        name: "Elara Zephyr",
        category: "unisex",
        price: 255,
        tagline: "Airy, Bright, Smooth",
        description: "Elara Zephyr is a minimalist masterpiece, capturing the fleeting moment of a cool, dry breeze.",
        image: "zephyr.jpg",
        notes: {
            top: ["Citrus Air Accord"],
            middle: ["Tea Leaves"],
            base: ["Musk"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Limonene, Linalool.",
        story: "ZEPHYR is the feeling of a perfect breeze on a spring morning - light, free, and effortlessly elegant."
    },

    "elara-nyara": {
        id: "elara-nyara",
        name: "Elara Nyara",
        category: "unisex",
        price: 275,
        tagline: "Mystical, Rare, Quietly Dramatic",
        description: "Elara Nyara is a unique, quietly dramatic scent that suggests ancient pathways and hidden knowledge.",
        image: "nyara.jpg",
        notes: {
            top: ["Pear"],
            middle: ["Incense"],
            base: ["Soft Woods"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Isoeugenol, Coumarin.",
        story: "NYARA holds the secrets of ancient temples and forgotten pathways. A scent for those who walk between worlds."
    },

    "elara-solace": {
        id: "elara-solace",
        name: "Elara Solace",
        category: "unisex",
        price: 235,
        tagline: "Comforting Minimalism with Premium Elegance",
        description: "Elara Solace is the ultimate luxury comfort scent—minimalist, enveloping, and supremely elegant.",
        image: "solace.jpg",
        notes: {
            top: ["Cashmere Wood"],
            middle: ["Soft Musk"],
            base: ["Vanilla Haze"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Benzyl Alcohol.",
        story: "SOLACE is a warm embrace in bottle form. The scent of coming home to yourself, of quiet moments and deep comfort."
    },

    "elara-elix": {
        id: "elara-elix",
        name: "Elara Elix",
        category: "unisex",
        price: 310,
        tagline: "Unique, Premium, Modern Elixir Style",
        description: "Elara Elix is a modern, intoxicating elixir built on rich, hedonistic notes.",
        image: "elix.jpg",
        notes: {
            top: ["Rum"],
            middle: ["Resin"],
            base: ["Amber", "Smoke"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Coumarin, Linalool.",
        story: "ELIX is the modern alchemist's masterpiece - transforming simple moments into golden memories through the magic of scent."
    },

    "elara-auren": {
        id: "elara-auren",
        name: "Elara Auren",
        category: "unisex",
        price: 295,
        tagline: "Warm, Golden, Versatile",
        description: "Elara Auren captures the feeling of golden hour—a warm, comforting, and wonderfully versatile scent.",
        image: "auren.jpg",
        notes: {
            top: ["Soft Citrus"],
            middle: ["Honey"],
            base: ["White Amber"]
        },
        ingredients: "Alcohol Denat., Fragrance, Aqua, Limonene, Citral.",
        story: "AUREN is liquid sunlight - the warm, golden glow of perfect moments that you wish could last forever."
    }
};