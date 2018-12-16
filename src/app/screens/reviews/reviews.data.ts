import {IReview, IUser, IRecipe} from '../../dtos';

const reviews: IReview[] = [
  {
    id: 0,
    rating: 5,
    recipe: <IRecipe>{
      id: 0,
      name: 'Rántotta'
    },
    user: <IUser>{
      id: 0,
      email: 'janedoe@example.com',
      displayName: 'Jane Doe',
    }
  },
  {
    id: 1,
    rating: 5,
    recipe: <IRecipe>{
      id: 1,
      name: 'Húsleves'
    },
    user: <IUser>{
      id: 1,
      email: 'johndoe@example.com',
      displayName: 'John Doe',
    }
  },
];

export default reviews;
