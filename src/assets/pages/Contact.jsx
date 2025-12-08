import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@cookingart.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Culinary Lane, Food City, FC 12345",
      subtext: "Open by appointment",
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-[hsl(30,25%,92%)] to-white py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <MessageCircle className="w-16 h-16 text-[hsl(25,85%,65%)] mx-auto mb-6" />
            <h1 className="text-[hsl(0,0%,40%)] text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-[hsl(0,0%,50%)] max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello? We'd love
              to hear from you. Our team is here to help you with anything you
              need.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 px-6 -mt-8 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[hsl(20,5.9%,90%)] hover:border-[hsl(25,85%,75%)] transition-all"
                >
                  <info.icon
                    className="w-10 h-10 text-[hsl(25,85%,65%)] mb-4"
                    strokeWidth={1.5}
                  />
                  <h4 className="text-xl font-semibold text-primary-text mb-2">
                    {info.title}
                  </h4>
                  <p className="text-[hsl(0,0%,50%)] mb-1">{info.details}</p>
                  <p className="text-[hsl(0,0%,60%)]">{info.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Form Info */}
              <div>
                <h2 className=" text-4xl font-semibold text-primary-text mb-6">
                  Send Us a Message
                </h2>
                <p className="text-[hsl(0,0%,50%)] mb-8">
                  Fill out the form and we'll get back to you as soon as
                  possible. Whether you're looking for recipe help, partnership
                  opportunities, or just want to share feedback, we're all ears!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[hsl(30,25%,95%)] p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-[hsl(25,85%,65%)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary-text mb-1">
                        Response Time
                      </h4>
                      <p className="text-[hsl(0,0%,60%)]">
                        We typically respond within 24 hours during business
                        days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[hsl(30,25%,95%)] p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-[hsl(25,85%,65%)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary-text mb-1">
                        Live Chat
                      </h4>
                      <p className="text-[hsl(0,0%,60%)]">
                        Need instant help? Our live chat is available Mon-Fri,
                        9AM-6PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-[hsl(30,25%,95%)] p-8 rounded-2xl shadow-lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary-color rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-primary-text mb-2 text-3xl">
                      Message Sent!
                    </h3>
                    <p className="text-[hsl(0,0%,60%)]">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 text-primary-text"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-primary-text mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(20,5.9%,90%)] focus:border-[hsl(25,85%,65%)] outline-none transition-colors bg-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-primary-text mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(20,5.9%,90%)] focus:border-[hsl(25,85%,65%)] outline-none transition-colors bg-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-primary-text mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(20,5.9%,90%)] focus:border-[hsl(25,85%,65%)] outline-none transition-colors bg-white text-primary-text"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="recipe">Recipe Question</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="feedback">Feedback</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[hsl(0,0%,40%)] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(20,5.9%,90%)] focus:border-[hsl(25,85%,65%)] outline-none transition-colors bg-white resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[hsl(25,85%,65%)] hover:bg-[hsl(25,85%,60%)] text-white py-3 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-[hsl(30,25%,95%)]">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className=" text-4xl font-semibold text-[hsl(0,0%,40%)] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[hsl(0,0%,50%)]">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-[hsl(0,0%,40%)] mb-2">
                  How do I submit my own recipe?
                </h4>
                <p className="text-[hsl(0,0%,60%)]">
                  Create an account and navigate to the "Submit Recipe" page.
                  Fill out the form with your recipe details, photos, and
                  instructions. Our team will review and publish it.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-[hsl(0,0%,40%)] mb-2">
                  Can I suggest a recipe for you to create?
                </h4>
                <p className="text-[hsl(0,0%,60%)]">
                  Absolutely! Use the contact form above with "Recipe Question"
                  as the subject and tell us what you'd like to see. We love
                  hearing from our community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-[hsl(0,0%,40%)] mb-2">
                  Are your recipes free to use?
                </h4>
                <p className="text-[hsl(0,0%,60%)]">
                  Yes! All recipes on Cooking Art are completely free to view,
                  save, and use for personal purposes. Share the love of cooking
                  with everyone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-[hsl(0,0%,40%)] mb-2">
                  How do I report a problem with a recipe?
                </h4>
                <p className="text-[hsl(0,0%,60%)]">
                  Use the contact form or email us directly at
                  hello@cookingart.com with the recipe name and details about
                  the issue. We'll investigate and fix it promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className=" text-4xl font-semibold text-[hsl(0,0%,40%)] mb-4">
                Our Location
              </h2>
              <p className="text-[hsl(0,0%,50%)]">
                Visit our test kitchen and studio
              </p>
            </div>
            <div className="bg-[hsl(30,25%,95%)] h-96 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[hsl(25,85%,65%)] mx-auto mb-4" />
                <p className="text-[hsl(0,0%,50%)]">
                  Map integration would go here
                </p>
                <p className="text-[hsl(0,0%,60%)]">
                  123 Culinary Lane, Food City, FC 12345
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
