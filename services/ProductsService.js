const PRODUCTS = [
    {
        id: 100,
        name: 'Anker Soundcore Life P2 ',
        price: 80,
        image: require('../assets/products/Soundcore.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'SOUNDPEATS TrueFree2',
        price: 40,
        image: require('../assets/products/Soundpeats.jpg'),
        description: 'Customized Earfins & Ipx7 Waterproof - Exclusive silicone ear fins powered by Freebit provide you comfortable and secure-fit. Reinforced design and IPX7-rated protect the earbuds from sweat and water, and allows you to enjoy your positive and active lifestyle.'
    },
    {
        id: 102,
        name: 'FIIL CC PRO True Wireless ',
        price: 200,
        image: require('../assets/products/FIIL.jpg'),
        description: 'Perfect for Home Offices: Each earbud has two microphones with beamforming noise reduction and cVc 8. 0 technology for superior vocal enhancement and background-noise suppression.'
    },
    {
        id: 103,
        name: 'Jbl Wave 300Tws ',
        price: 260,
        image: require('../assets/products/JBL.jpg'),
        description: 'COMFORTABLE FIT AND RAIN RESISTANT The ergonomic fit of these earbuds stays snug and secure to keep you comfortable and connected all day while the open ear design enhances your ambient awareness of your surroundings.'
    },
    {
        id: 104,
        name: 'Razer Hammerhead',
        price: 400,
        image: require('../assets/products/Razer.jpg'),
        description: 'More synchronized audio visual response for mobile gaming: Provides a more immersive wireless experience for videos and games via a 60ms input latency. Immersive, Full Range Audio: Custom tuned 13mm driver technology provides deeper bass and higher frequency detail for dynamic, superior audio clarity for gaming, music, videos, and conference calls'
    },
    {
        id: 105,
        name: 'HUAWEI Freebuds ',
        price: 120,
        image: require('../assets/products/Huwawei.jpg'),
        description: 'The oval shaped charging case is compact and refreshingly original in design, with a smooth touch that lets you feel totally in sync. The streamlined curves and high-polish finish of the earbuds give you a modern, standout look. In Ceramic White, Carbon Black, or Red - to fill your days and nights with dynamic style.'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}