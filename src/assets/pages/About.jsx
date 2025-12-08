import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Heart, Users, BookOpen, Award, Target, Sparkles } from "lucide-react";
import ImageWithFallBack from "../components/ImageWithFallBack";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description:
        "We believe cooking is an art form that brings joy and connects people.",
    },
    {
      icon: Sparkles,
      title: "Creative Expression",
      description:
        "Every recipe is a canvas for creativity, blending flavors with imagination.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built by food lovers, for food lovers. We grow together through shared recipes.",
    },
    {
      icon: BookOpen,
      title: "Educational Focus",
      description:
        "Learn techniques, discover ingredients, and master the art of cooking.",
    },
  ];

  const team = [
    {
      name: "Elena Martinez",
      role: "Founder & Head Chef",
      imageUrl:
        "https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY0ODI1ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Marcus Chen",
      role: "Recipe Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY0ODI1ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Sofia Patel",
      role: "Culinary Artist",
      imageUrl:
        "https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY0ODI1ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const stats = [
    { number: "10K+", label: "Recipes" },
    { number: "50K+", label: "Community Members" },
    { number: "100+", label: "Countries" },
    { number: "4.9★", label: "Average Rating" },
  ];
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-linear-to-b from-[hsl(30,25%,92%)] to-white py-20 px-6 overflow-hidden">
          <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-[hsl(25,85%,85%)] opacity-20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[hsl(120,20%,85%)] opacity-20 blur-3xl" />

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-primary-text font-bold mb-6 text-4xl md:text-5xl">
              Our Story: Where Flavor Meets Art
            </h1>
            <p className="text-[hsl(0,0%,50%)] mb-8 max-w-3xl mx-auto">
              Founded in 2020, Cooking Art was born from a simple belief:
              cooking is more than following instructions—it's a creative
              journey. We blend the precision of culinary techniques with the
              freedom of artistic expression, creating a space where every dish
              tells a story.
            </p>
            <div className="flex justify-center gap-4">
              <button className="cursor-pointer bg-primary-color hover:bg-hover-color text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg">
                Join Our Community
              </button>
              <button className="cursor-pointer bg-white hover:bg-[hsl(30,25%,95%)] text-primary-text px-8 py-3 rounded-full transition-all shadow-md border border-[hsl(20,5.9%,90%)]">
                Explore Recipes
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary-color" />
                  <h2 className="text-4xl font-semibold text-primary-text">
                    Our Mission
                  </h2>
                </div>
                <p className="text-[hsl(0,0%,50%)] mb-6">
                  To inspire home cooks around the world by providing
                  accessible, creative recipes that celebrate both tradition and
                  innovation. We believe everyone can be a culinary artist with
                  the right inspiration and guidance.
                </p>
                <p className="text-[hsl(0,0%,50%)]">
                  Through our platform, we aim to build a global community where
                  food lovers can discover, share, and celebrate the art of
                  cooking together.
                </p>
              </div>
              <div className="relative">
                <ImageWithFallBack
                  src="https://images.unsplash.com/photo-1719557553376-cb844157294f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2tldGNoJTIwZHJhd2luZ3xlbnwxfHx8fDE3NjQ4MjU4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Food sketches"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(120,20%,75%)] rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-linear-to-r from-[hsl(30,25%,95%)] to-[hsl(120,20%,95%)]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary-color mb-2">{stat.number}</div>
                  <p className="text-[hsl(0,0%,50%)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-primary-text mb-4">
                Our Core Values
              </h2>
              <p className="text-[hsl(0,0%,50%)] max-w-2xl mx-auto">
                These principles guide everything we do, from recipe curation to
                community building
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border-2 border-[hsl(20,5.9%,90%)] hover:border-[hsl(25,85%,75%)]"
                >
                  <value.icon
                    className="w-10 h-10 text-primary-color mb-4"
                    strokeWidth={1.5}
                  />
                  <h4 className="text-primary-text mb-3">{value.title}</h4>
                  <p className="text-[hsl(0,0%,60%)]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 bg-[hsl(30,25%,95%)]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-primary-text mb-4">
                Meet Our Team
              </h2>
              <p className="text-[hsl(0,0%,50%)] max-w-2xl mx-auto">
                Passionate food artists dedicated to bringing you the best
                culinary experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-72">
                    <ImageWithFallBack
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="mb-1">{member.name}</h4>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <Award className="w-16 h-16 text-primary-color  mx-auto mb-6" />
            <h2 className="text-4xl font-semibold text-primary-text mb-6">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[hsl(30,25%,95%)] rounded-xl">
                <p className="text-primary-text mb-2">
                  Best Recipe Platform 2024
                </p>
                <p className="text-[hsl(0,0%,60%)]">Food & Tech Awards</p>
              </div>
              <div className="p-6 bg-[hsl(30,25%,95%)] rounded-xl">
                <p className="text-primary-text mb-2">
                  Community Choice Winner
                </p>
                <p className="text-[hsl(0,0%,60%)]">
                  Culinary Innovation Summit
                </p>
              </div>
              <div className="p-6 bg-[hsl(30,25%,95%)] rounded-xl">
                <p className="text-primary-text mb-2">Editor's Pick</p>
                <p className="text-[hsl(0,0%,60%)]">Food Magazine 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-linear-to-r from-[hsl(25,85%,75%)] to-[hsl(25,85%,85%)]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Join Our Culinary Community
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Become part of a global network of food lovers sharing recipes,
              tips, and inspiration
            </p>
            <button className="cursor-pointer bg-white hover:bg-[hsl(30,25%,95%)] text-primary-text px-12 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default About;
