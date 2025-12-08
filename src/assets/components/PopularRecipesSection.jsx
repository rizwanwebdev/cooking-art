import PopularRecipeCard from "./PopularRecipeCard";
const PopularRecipesSection = () => {
  const recipes = [
    {
      idMeal: 5210,
      title: "Creamy Carbonara",
      description:
        "Classic Italian pasta with a rich, velvety sauce and crispy pancetta.",
      imageUrl:
        "https://images.unsplash.com/photo-1660092750753-42bc91728014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMHJlY2lwZXxlbnwxfHx8fDE3NjQ4MjU4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      idMeal: 5210,
      title: "Fluffy Pancakes",
      description:
        "Light, airy breakfast pancakes topped with fresh berries and maple syrup.",
      imageUrl:
        "https://images.unsplash.com/photo-1637533114107-1dc725c6e576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwYW5jYWtlc3xlbnwxfHx8fDE3NjQ3NjIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      idMeal: 5210,
      title: "Dragon Roll Sushi",
      description:
        "Elegant sushi rolls with fresh avocado, eel, and a sweet teriyaki glaze.",
      imageUrl:
        "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzfGVufDF8fHx8MTc2NDc1OTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      idMeal: 5210,
      title: "Decadent Chocolate Cake",
      description:
        "Rich, moist chocolate layer cake with silky ganache frosting.",
      imageUrl:
        "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NDgwNTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];
  return (
    <>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-primary-text mb-3 text-4xl font-semibold">
              Popular Recipes
            </h2>
            <p className="text-primary-text">
              Try these crowd favorites from our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <PopularRecipeCard
                key={recipe.title}
                title={recipe.title}
                description={recipe.description}
                imageUrl={recipe.imageUrl}
                idMeal={recipe.idMeal}
              />
            ))}
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default PopularRecipesSection;
