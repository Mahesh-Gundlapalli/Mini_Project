import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { Recipe } from './recipes.model';

@Injectable() //now the data source is angular entity and injectable initally it is orphan=>model.module.ts registered
//can be injected as a dependency
export class StaticDataSource {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Classic Margherita Pizza',
      'veg',
      [
        'Pizza dough',
        'Tomato sauce',
        'Fresh mozzarella cheese',
        'Fresh basil leaves',
        'Olive oil',
        'Salt and pepper to taste',
      ],
      [
        'Preheat the oven to 475°F (245°C).',
        'Roll out the pizza dough and spread tomato sauce evenly.',
        'Top with slices of fresh mozzarella and fresh basil leaves.',
        'Drizzle with olive oil and season with salt and pepper.',
        'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
        'Slice and serve hot.',
      ],
      'https://th.bing.com/th/id/R.b6d89263162690146ec26e6aca1f6566?rik=3ccCFNGMozuoAg&riu=http%3a%2f%2fkitchenswagger.com%2fwp-content%2fuploads%2f2016%2f04%2fmarg-pizza3.jpg&ehk=xSztLP54PKtDhDOI8uupULX2cSUl1JGIodyBHyNphlM%3d&risl=&pid=ImgRaw&r=0'
    ),
    new Recipe(
      2,
      'Paneer Butter Masala',
      'veg',
      [
        'Paneer cubes',
        'Butter',
        'Tomatoes',
        'Onions',
        'Garlic and ginger paste',
        'Cashew nuts',
        'Cream',
        'Garam masala',
        'Red chili powder',
        'Salt',
        'Coriander leaves',
      ],
      [
        'Soak cashews in warm water and blend into a smooth paste.',
        'Sauté onions in butter until golden, then add garlic-ginger paste.',
        'Add tomato puree and cook until oil separates.',
        'Mix in cashew paste, spices, and cream. Simmer for 5 minutes.',
        'Add paneer cubes and cook for another 5-7 minutes.',
        'Garnish with coriander leaves and serve hot with naan or rice.',
      ],
      'https://bing.com/th?id=OSK.be0c7272acc80cb4c4d016157860369d'
    ),
    new Recipe(
      3,
      'Vegetable Stir Fry',
      'veg',
      [
        'Broccoli florets',
        'Carrots',
        'Bell peppers',
        'Snow peas',
        'Soy sauce',
        'Garlic',
        'Ginger',
        'Sesame oil',
        'Cornstarch',
        'Water',
        'Salt and pepper',
      ],
      [
        'Heat sesame oil in a wok and sauté garlic and ginger.',
        'Add chopped vegetables and stir fry on high heat for 5-7 minutes.',
        'Mix soy sauce, cornstarch, and water to make a slurry.',
        'Pour the slurry over vegetables and cook until sauce thickens.',
        'Season with salt and pepper.',
        'Serve hot with steamed rice or noodles.',
      ],
      'https://tse4.mm.bing.net/th/id/OIP.TS03CN6O2LKaJw88LskEgwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3'
    ),
    new Recipe(
      4,
      'Chole (Chickpea Curry)',
      'veg',
      [
        'Boiled chickpeas',
        'Onions',
        'Tomatoes',
        'Garlic and ginger paste',
        'Chole masala',
        'Turmeric',
        'Red chili powder',
        'Coriander powder',
        'Salt',
        'Oil',
        'Coriander leaves',
      ],
      [
        'Heat oil and sauté onions until golden brown.',
        'Add garlic-ginger paste and cook for 2 minutes.',
        'Add tomato puree and cook until oil separates.',
        'Mix in spices and cook for another 2 minutes.',
        'Add boiled chickpeas and simmer for 10-15 minutes.',
        'Garnish with coriander leaves and serve with puri or rice.',
      ],
      'https://tse1.mm.bing.net/th/id/OIP.kpxJFMQopeX-ctrLipkRLwHaHm?w=680&h=698&rs=1&pid=ImgDetMain&o=7&rm=3'
    ),
    new Recipe(
      5,
      'Vegetable Biryani',
      'veg',
      [
        'Basmati rice',
        'Mixed vegetables (carrot, beans, peas, potato)',
        'Onions',
        'Tomatoes',
        'Yogurt',
        'Ginger-garlic paste',
        'Biryani masala',
        'Mint leaves',
        'Coriander leaves',
        'Ghee or oil',
        'Salt',
      ],
      [
        'Cook rice until 70% done and set aside.',
        'Sauté onions in ghee until golden, add ginger-garlic paste.',
        'Add chopped vegetables, tomatoes, yogurt, and biryani masala.',
        'Cook until vegetables are tender and mixture thickens.',
        'Layer rice and vegetable mixture in a pot, sprinkle mint and coriander.',
        'Cover and cook on low heat for 15-20 minutes.',
        'Serve hot with raita or salad.',
      ],
      'https://www.zeelskitchen.com/wp-content/uploads/2015/07/Vegtable_Biryani_14.jpg'
    ),
    new Recipe(
      6,
      'Butter Chicken',
      'non-veg',
      [
        'Boneless chicken pieces',
        'Butter',
        'Tomatoes',
        'Onions',
        'Garlic and ginger paste',
        'Cream',
        'Cashew nuts',
        'Garam masala',
        'Red chili powder',
        'Salt',
        'Coriander leaves',
      ],
      [
        'Marinate chicken with spices and yogurt for 30 minutes.',
        'Cook chicken in a pan until lightly browned and set aside.',
        'Sauté onions, garlic-ginger paste, and tomato puree in butter.',
        'Add cashew paste, cream, and spices. Simmer until thick.',
        'Add cooked chicken and simmer for 10-15 minutes.',
        'Garnish with coriander leaves and serve with naan or rice.',
      ],
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg'
    ),
    new Recipe(
      7,
      'Egg Curry',
      'non-veg',
      [
        'Boiled eggs',
        'Onions',
        'Tomatoes',
        'Garlic and ginger paste',
        'Turmeric',
        'Red chili powder',
        'Coriander powder',
        'Garam masala',
        'Salt',
        'Oil',
        'Coriander leaves',
      ],
      [
        'Heat oil and sauté onions until golden brown.',
        'Add garlic-ginger paste and cook for 2 minutes.',
        'Add tomato puree and spices, cook until oil separates.',
        'Add boiled eggs and simmer for 10 minutes.',
        'Garnish with coriander leaves and serve with rice or roti.',
      ],
      'https://www.sharmispassions.com/wp-content/uploads/2015/06/EggCurry3.jpg'
    ),
    new Recipe(
      8,
      'Fish Fry',
      'non-veg',
      [
        'Fish fillets',
        'Turmeric',
        'Red chili powder',
        'Ginger-garlic paste',
        'Lemon juice',
        'Salt',
        'Oil for frying',
      ],
      [
        'Marinate fish with spices, ginger-garlic paste, and lemon juice for 30 minutes.',
        'Heat oil in a pan and shallow fry fish until golden brown on both sides.',
        'Drain excess oil and serve hot with lemon wedges and onion rings.',
      ],
      'https://tse4.mm.bing.net/th/id/OIP.iY9hV2EwUXDWVmQO-0CzoAHaEK?w=1280&h=720&rs=1&pid=ImgDetMain&o=7&rm=3'
    ),
    new Recipe(
      9,
      'Chicken Biryani',
      'non-veg',
      [
        'Basmati rice',
        'Chicken pieces',
        'Onions',
        'Tomatoes',
        'Yogurt',
        'Ginger-garlic paste',
        'Biryani masala',
        'Mint leaves',
        'Coriander leaves',
        'Ghee or oil',
        'Salt',
      ],
      [
        'Marinate chicken with yogurt, spices, and ginger-garlic paste for 1 hour.',
        'Cook rice until 70% done and set aside.',
        'Sauté onions in ghee, add tomatoes and marinated chicken.',
        'Cook until chicken is tender and gravy thickens.',
        'Layer rice and chicken in a pot, sprinkle mint and coriander.',
        'Cover and cook on low heat for 20 minutes.',
        'Serve hot with raita or salad.',
      ],
      'https://smellslikedelish.com/wp-content/uploads/2023/05/chicken-biryani-horizontal-2.jpg'
    ),

    new Recipe(
      10,
      'Classic Margherita Pizza',
      'non-veg',
      [
        'Pizza dough',
        'Tomato sauce',
        'Fresh mozzarella cheese',
        'Fresh basil leaves',
        'Olive oil',
        'Salt and pepper to taste',
      ],
      [
        'Preheat the oven to 475°F (245°C).',
        'Roll out the pizza dough and spread tomato sauce evenly.',
        'Top with slices of fresh mozzarella and fresh basil leaves.',
        'Drizzle with olive oil and season with salt and pepper.',
        'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
        'Slice and serve hot.',
      ],
      'https://tse4.mm.bing.net/th/id/OIP.G20hT50zaFqDigfk71KdOAHaJl?w=700&h=906&rs=1&pid=ImgDetMain&o=7&rm=3'
    ),
  ];
  getRecipes(): Observable<Recipe[]> {
    return from([this.recipes]);
  }
}
