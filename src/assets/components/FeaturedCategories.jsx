import CategoryCard from "./CategoryCard";
const FeaturedCategories = () => {
  const categories = [
    {
      title: "Appetizers",
      imageUrl:
        "https://images.unsplash.com/photo-1763553113344-b6a32fcd9ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXJzJTIwZm9vZHxlbnwxfHx8fDE3NjQ4MjU4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "hsl(25, 85%, 90%)",
    },
    {
      title: "Main Course",
      imageUrl:
        "https://images.unsplash.com/photo-1616114602131-ba24fc328173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWluJTIwY291cnNlJTIwZGlubmVyfGVufDF8fHx8MTc2NDgyNTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "hsl(120, 20%, 88%)",
    },
    {
      title: "Desserts",
      imageUrl:
        "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjQ4MDgxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "hsl(340, 60%, 88%)",
    },
    {
      title: "Healthy Choices",
      imageUrl:
        "https://images.unsplash.com/photo-1649531794884-b8bb1de72e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc2FsYWQlMjBib3dsfGVufDF8fHx8MTc2NDc5MDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "hsl(140, 30%, 85%)",
    },
    {
      title: "Quick Meals",
      imageUrl:
        "https://images.unsplash.com/photo-1647545401834-39096eb7e4ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWljayUyMG1lYWwlMjBwcmVwfGVufDF8fHx8MTc2NDgyNTgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "hsl(45, 70%, 88%)",
    },
    {
      title: "International",
      imageUrl:
        "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjQ4MjU4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "hsl(200, 30%, 88%)",
    },
  ];

  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-primary-text mb-3 text-4xl font-semibold">
              Featured Categories
            </h2>
            <p className="text-primary-text">
              Explore recipes by your favorite categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                imageUrl={category.imageUrl}
                bgColor={category.bgColor}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCategories;
