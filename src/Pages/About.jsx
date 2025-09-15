import React from "react";
import { Cpu, Globe, Lightbulb, Users } from "lucide-react";

const teamMembers = [
  { name: "Alex Rivera", role: "Founder & Editor" , img :"/assets/06.jpg"},
  { name: "Jamie Chen", role: "Tech Analyst" , img :"/assets/07.jpg"},
  { name: "Sam Washington", role: "UX Specialist" , img :"/assets/08.jpg"},
  { name: "Taylor Kim", role: "AI Researcher" , img :"/assets/09.jpg"},
];

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white text-gray-900">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold sm:text-5xl mb-4 text-gray-900">About Tech Innovators</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Demystifying technology and digital innovation for everyone.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
          <p className="mb-4 text-gray-700">
            Tech Innovators was born in 2020 when a group of tech enthusiasts realized there was a gap between cutting-edge
            technology and public understanding...
          </p>
          <p className="mb-4 text-gray-700">
            What started as casual conversations about simplifying complex tech concepts quickly evolved into a mission...
          </p>
          <p className="text-gray-700">
            Today, our team of writers, developers, and industry experts work together to bring you insights...
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Team"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Mission</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Lightbulb className="h-10 w-10 mb-4 text-teal-400" />,
              title: "Illuminate",
              desc: "We shed light on complex technologies, making them understandable to everyone.",
            },
            {
              icon: <Cpu className="h-10 w-10 mb-4 text-teal-400" />,
              title: "Educate",
              desc: "We provide in-depth but approachable content to build confidence in digital tech.",
            },
            {
              icon: <Globe className="h-10 w-10 mb-4 text-teal-400" />,
              title: "Connect",
              desc: "We bridge the gap between innovators and users, building a tech-curious community.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-teal-500/20 transition">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Bring to Our Readers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Clarity in Complexity</h3>
            <p className="mb-6 text-gray-700">
              We break down complex concepts into digestible pieces using plain language and real examples.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Timely Insights</h3>
            <p className="mb-6 text-gray-700">
              We keep you informed on the latest developments and trends without overwhelming you.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Practical Applications</h3>
            <p className="mb-6 text-gray-700">
              Learn how to apply new tech tools and ideas through our tutorials, guides, and use cases.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Community Perspective</h3>
            <p className="mb-6 text-gray-700">
              We spotlight diverse voices to tell the human stories behind the technology we use.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          A diverse group of technologists and communicators passionate about making tech accessible.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto flex items-center justify-center text-sm font-medium mb-3">
                <img src={member.img} alt="member-image" className="rounded-full"/>
              </div>
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-teal-100 p-8 rounded-lg">
        <Users className="h-10 w-10 text-teal-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Join Our Community</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-700">
          We're more than a blog—we're a community of curious minds. Stay in the loop with our newsletter.
        </p>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
          Subscribe to Our Newsletter
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
