export interface IUser {
  id: number;
  email: string;
  displayName: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  displayName: string;
  email: string;
  password: string;
}

export interface IRecipe {
  id: number;
  name: string;
  // ingredients: IIngredient[];
}

export interface IIngredient {
  id: number;
  name: string;
}

export interface IReview {
  id: number;
  rating: number;
  user: IUser;
  recipe: IRecipe;
}
