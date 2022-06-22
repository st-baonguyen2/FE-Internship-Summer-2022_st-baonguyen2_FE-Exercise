export const decimalNumber = (num) => {
    return Math.round(num * 100) / 100;
};
export const setData = (data, value) => {
    localStorage.setItem(data, JSON.stringify(value));
};
export const getData = (data, value) => {
    return value = JSON.parse(localStorage.getItem(data));
};
export const products = [{
        id: 1,
        name: 'T-Shirt Summer Vibes',
        imageUrl: 'img/image1.png',
        price: 119.99,
        discount: 0.3,
    },
    {
        id: 2,
        name: 'Loose Knit 3/4 Sleeve',
        imageUrl: 'img/image-2.png',
        price: 119.99,
        discount: 0
    },
    {
        id: 3,
        name: 'Basic Slim Fit T-Shirt',
        imageUrl: 'img/image-3.png',
        price: 79.99,
        discount: 0
    },
    {
        id: 4,
        name: 'Loose Textured T-Shirt',
        imageUrl: 'img/image-4.png',
        price: 119.99,
        discount: 0
    }
];
