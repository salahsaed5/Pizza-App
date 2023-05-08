

const categories = [
    {
        name: 'BreakFast',
        image: require('../assets/BreakFast/BreakFast.png'),
        items: [
            {

                name: 'Falafel',
                weight: 120,
                rating: ' 4.0',
                price: '20$',
                isTopOfTheWeek: true,
                image: require('../assets/BreakFast/McFalafel.png'),
                size: 'Large 8',
                delivery: 25,
                ingredients: [
                    require('../assets/flour.png'),
                    require('../assets/cheese.png'),
                    require('../assets/Sliced-Onion.png'),
                    require('../assets/Tomato.png'),
                ],



            },
            
        ]

    },
    
       

];
export default categories;
