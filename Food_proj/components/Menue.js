


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
            {

                name: 'Big-Breakfast',
                weight: 150,
                rating: ' 4.0',
                price: '25$',
                isTopOfTheWeek: false,
                image: require('../assets/BreakFast/Big-Breakfast-W-Coffe.png'),
                size: 'Large 12 ',
                delivery: 20,
                ingredients: [
                    require('../assets/flour.png'),
                    require('../assets/cheese.png'),
                    require('../assets/Sliced-Onion.png'),
                    require('../assets/Tomato.png'),
                ],



            },

            {

                name: 'Egg-Cheese-Wrap',
                weight: 250,
                rating: ' 4.5',
                price: '28$',
                isTopOfTheWeek: false,
                image: require('../assets/BreakFast/Egg-Cheese-Wrap.png'),
                size: 'Large 10 ',
                delivery: 55,
                ingredients: [
                    require('../assets/flour.png'),
                    require('../assets/cheese.png'),
                    require('../assets/Sliced-Onion.png'),
                    require('../assets/Tomato.png'),
                ],

            },

        ]

    },
    {
        name: 'Pizza',
        image: require('../assets/pizza/pizza.png'),
        items: [
            {


                name: 'Pepperoni Pizza',
                weight: 250,
                rating: '5.0',
                price: 199,
                isTopOfTheWeek: true,
                image: require('../assets/pizza/pepperonipizza.png'),
                size: 'Large 14"',
                crust: 'Thin Crust',
                delivery: 30,
                ingredients: [
                    require('../assets/flour.png'),
                    require('../assets/cheese.png'),
                    require('../assets/Sliced-Onion.png'),
                    require('../assets/Tomato.png'),
                ]
            },
            {
                name: 'Plain Cheese Pizza',
                weight: 300,
                rating: '4.5',
                price: 299,
                isTopOfTheWeek: false,
                image: require('../assets/pizza/plaincheesepizza.png'),
                size: 'Large 16"',
                crust: 'Thin Cheese',
                delivery: 25,
                ingredients: [
                    require('../assets/flour.png'),
                    require('../assets/cheese.png'),
                    require('../assets/Sliced-Onion.png'),
                    require('../assets/Tomato.png'),
                ]
            },
            {
                name: 'Mexican Green Wave',
                weight: 350,
                rating: '4.2',
                price: 499,
                isTopOfTheWeek: false,
                image: require('../assets/pizza/mexicangreenwave.png'),
                size: 'Large 15"',
                crust: 'Thin Crust',
                delivery: 45,
                ingredients: [
                    require('../assets/flour.png'),
                    require('../assets/cheese.png'),
                    require('../assets/Sliced-Onion.png'),
                    require('../assets/Tomato.png'),
                ]
            },

        ]


    },
    {

        name: 'Desserts',
        image: require('../assets/Desserts/Chocolate.png'),
        items: [

            {

                name: 'Strawberry Sundae',
                weight: 168,
                rating: '4.8',
                price: 80,
                isTopOfTheWeek: true,
                image: require('../assets/Desserts/Straw.png'),
                size: 'Medium ',
                crust: 'Small Ice',
                delivery: 10,
               


            },

            {
                name: 'Caramel Sundae',
                weight: 202,
                rating: '4.5',
                price: 199,
                isTopOfTheWeek: false,
                image: require('../assets/Desserts/Caramel.png'),
                size: 'Large ',
                crust: 'Large Ice',
                delivery: 8,
               
              },
              {
                name: 'Ice Cream Cone',
                weight: 150,
                rating: '4.2',
                price: 99,
                isTopOfTheWeek: false,
                image: require('../assets/Desserts/Cone.png'),
                size: 'Large Glass',
                crust: 'Small Ice',
                delivery: 5,
                
              },

        ],


    },
    {

        name: 'Soft Drinks',
        image: require('../assets/softdrinks/StrawberryBanana.png'),
        items: [

            {

                name: 'Coco Cola',
                weight: 200,
                rating: '5.0',
                price: 299,
                isTopOfTheWeek: true,
                image: require('../assets/softdrinks/Cola.png'),
                size: 'Medium Glass',
                crust: 'Small Ice',
                delivery: 10,
                ingredients: [require('../assets/softdrinks/cocacola.png')
            ],


            },

            {
                name: 'Frozen Coca-Cola',
                weight: 500,
                rating: '4.5',
                price: 150,
                isTopOfTheWeek: false,
                image: require('../assets/softdrinks/FrozenCocaCola.png'),
                size: 'LArge Glass',
                crust: 'Large Ice',
                delivery: 8,
                ingredients: [require('../assets/softdrinks/orange.png')],
              },
              {
                name: 'Hot Tea',
                weight: 30,
                rating: '4.2',
                price: 30,
                isTopOfTheWeek: false,
                image: require('../assets/softdrinks/tea.jpeg'),
                size: 'Large Glass',
                crust: 'Small Ice',
                delivery: 5,
                ingredients: [require('../assets/softdrinks/mango.png')],
              },

        ],


    },

];
export default categories;
