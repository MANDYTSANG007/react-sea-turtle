import beefStew from '../../src/assets/beef-stew.jpg';
import appleCake from '../../src/assets/apple-cake.jpg';
import greekSalad from '../../src/assets/greek-salad.jpg';
import salmonSalad from '../../src/assets/salmon-salad.jpeg';
import steakTartare from '../../src/assets/steak-tartare.jpg';
import lobster from '../../src/assets/lobster.jpg';
import macarons from '../../src/assets/french-macarons.jpg';
import blackForest from '../../src/assets/black-forest.jpg';


export const menuData = [
    {
        id: 1,
        title: 'Beef Stew',
        price: '20.99',
        description: 'A hearty and comforting stew made with tender chunks of beef, vegetables and a rich, savory broth. Served with crusty bread.' ,
        appetizers: false,
        dessert: false,
        mainCourse: true,
        image: beefStew,
    },
    {
        id: 2,
        title: 'Apple Cake',
        price: '8.99',
        description: 'A moist and flavorful cake made with fresh apples and warm spices such as cinnamon and nutmeg. Served warm with a dollop of whipped cream.' ,
        appetizers: false,
        dessert: true,
        mainCourse: false,
        image: appleCake,
    },
    {
        id: 3,
        title: 'Greek Salad',
        price: '10.99',
        description: 'A refreshing and healthy salad made with fresh vegetables, topped with crumbled feta cheese and olives. Dressed with a simple vinaigrette made with olive oil and lemon juice.' ,
        appetizers: true,
        dessert: false,
        mainCourse: false,
        image: greekSalad,
    },
    {
        id: 4,
        title: 'Smoked Salmon Salad',
        price: '20.99',
        description: 'A fresh and flavorful salad made with smoked salmon, mixed greens, and a variety of vegetables. Served with a light vinaigrette or creamy dressing, this salad is a healthy and delicious choice for lunch or dinner.' ,
        appetizers: false,
        dessert: false,
        mainCourse: true,
        image: salmonSalad,
    },
    {
        id: 5,
        title: 'Steak Tartare',
        price: '30.99',
        description: 'A dish made with finely chopped or ground raw beef, mixed with various seasonings such as capers, mustard, and Worcestershire sauce. Served with a raw egg yolk on top, this dish has a rich, meaty flavor and a smooth, silky texture.' ,
        appetizers: true,
        dessert: false,
        mainCourse: false,
        image: steakTartare,
    },
    {
        id: 6,
        title: 'Maine Lobster',
        price: '38.99',
        description: 'A succulent and flavorful seafood dish featuring fresh lobster from the coast of Maine. Served with butter and lemon, this dish is a true delicacy and a must-try for seafood lovers.' ,
        appetizers: false,
        dessert: false,
        mainCourse: true,
        image: lobster,
    },
    {
        id: 7,
        title: 'Assortment of French Macarons',
        price: '16.99',
        description: ' A delicate and elegant French dessert made with two almond meringue cookies sandwiched together with a sweet filling such as buttercream or ganache. Available in a variety of flavors and colors.' ,
        appetizers: false,
        dessert: true,
        mainCourse: false,
        image: macarons,
    },
    {
        id: 8,
        title: 'Black Forest',
        price: '10.99',
        description: "A classic German dessert made with layers of chocolate cake, whipped cream, and cherries. Topped with chocolate shavings and more cherries, this indulgent dessert is a chocolate lover's dream.",
        appetizers: false,
        dessert: true,
        mainCourse: false,
        image: blackForest,
    },
]


export const specialMenuData = [
    {
        id: 1,
        title: 'Beef Stew',
        price: '20.99',
        description: 'A hearty and comforting stew made with tender chunks of beef, vegetables and a rich, savory broth. Served with crusty bread.' ,
        image: beefStew,
    },
    {
        id: 2,
        title: 'Apple Cake',
        price: '8.99',
        description: 'A moist and flavorful cake made with fresh apples and warm spices such as cinnamon and nutmeg. Served warm with a dollop of whipped cream.' ,
        image: appleCake,
    },
    {
        id: 3,
        title: 'Greek Salad',
        price: '10.99',
        description: 'A refreshing and healthy salad made with fresh vegetables, topped with crumbled feta cheese and olives. Dressed with a simple vinaigrette made with olive oil and lemon juice.' ,
        image: greekSalad,
    },
]