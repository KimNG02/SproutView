import React from "react";
import "./styles/AboutUs.css";

// Define a list of team members
const teamMembers = [
  {
    name: "Fatima",
    role: "Product Owner",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/024/822/642/original/cute-cartoon-sunflower-isolated-on-transparent-background-ai-generated-digital-illustration-png.png",
    linkedIn: "https://www.linkedin.com/in/fatima-mohammad-ali-5215542bb/"
  },
  {
    name: "Theodor",
    role: "Scrum Master",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/022/948/153/non_2x/cute-happy-blackberry-character-ai-generated-free-png.png",
    linkedIn: "https://www.linkedin.com/in/theodor-bj%C3%B6rkman-2784721b4/"
  },
  {
    name: "Ruth",
    role: "Developer",
    imageUrl:
      "https://i.imgur.com/7Fjaphg.png",
    linkedIn: "http://linkedin.com/in/ruth-shewa-61b4912a3"
  },
  {
    name: "Oscar",
    role: "Developer",
    imageUrl:
      "https://i.pinimg.com/originals/70/5d/ee/705dee71a624137356a93efa53267977.png",
    linkedIn: "https://www.linkedin.com/in/oscar-caddeo-a368562b7/"
  },
  {
    name: "Kim",
    role: "Developer",
    imageUrl:
      "https://www.creativefabrica.com/wp-content/uploads/2020/09/28/cute-flower-kawaii-illustrations-Graphics-5731329-1-1-580x387.png",
    linkedIn: "https://www.linkedin.com/in/kim-nguyen-287473215/"
  },
  {
    name: "Saina",
    role: "Developer",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/026/793/223/original/cute-watermelon-watercolor-ai-generative-png.png",
    linkedIn: "https://www.linkedin.com/in/saina-shamshirdar-058310159/"
  },
  {
    name: "Emil",
    role: "Developer",
    imageUrl: "https://png.pngtree.com/png-clipart/20230914/original/pngtree-cute-lime-character-vector-illustration-illustration-id-png-image_11087484.png",
    linkedIn: "https://www.linkedin.com/in/emil-karim-5729b4235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Isac",
    role: "Developer",
    imageUrl:
      "https://i.imgur.com/kLmf8lh.png",
    linkedIn: "https://www.linkedin.com/in/isac-ljungberg-193406309/"
  },
  // Add more team members as needed
];

const AboutUs = ({ setTimelinePage }) => {
  setTimelinePage("");
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="profile-picture"
            />
            <h2 className="about-h2">{member.name}</h2>
            <p className="about-p">{member.role}</p>
            <a href={member.linkedIn}>
              <img
                className="linked-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png"
                alt="Linked in Logo"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="gulsparv-cta-container">
        <a className="gulsparv-cta" href="https://www.gulsparv.site">Meet Team Gulsparv!</a>
      </div>
    </div>
  );
};

export default AboutUs;
