import TeamMemberCard from "@/components/TeamMemberCard";

const teamData = {
  "Leadership Team": [
    {
      imageSrc: "/path/to/image1.jpg",
      name: "Team Member 1",
      designation: "CEO",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
        gmail: "team1@example.com",
      },
    },
    {
      imageSrc: "/path/to/image2.jpg",
      name: "Team Member 2",
      designation: "CTO",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
        gmail: "team2@example.com",
      },
    },
  ],
  "AI / ML Team": [
    {
      imageSrc: "/path/to/image3.jpg",
      name: "AI Specialist 1",
      designation: "AI Engineer",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
        gmail: "ai1@example.com",
      },
    },
    {
      imageSrc: "/path/to/image4.jpg",
      name: "AI Specialist 2",
      designation: "ML Engineer",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
        gmail: "ai2@example.com",
      },
    },
  ],
  "Web Development & Maintenance Team": [
    {
      imageSrc: "/path/to/image5.jpg",
      name: "Web Dev 1",
      designation: "Frontend Developer",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
        gmail: "webdev1@example.com",
      },
    },
    {
      imageSrc: "/path/to/image6.jpg",
      name: "Web Dev 2",
      designation: "Backend Developer",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
        gmail: "webdev2@example.com",
      },
    },
  ],
};

function TeamSection({ title, description, members }) {
  return (
    <div className="mb-10">
      <div className="flex text-4xl font-semibold items-center justify-center">
        {title}
      </div>
      <div className="mt-6">
        <p className="flex text-lg font-medium items-center justify-center text-gray-500 text-center">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap mx-2 mb-6 gap-5 justify-center">
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            designation={member.designation}
            links={member.links}
          />
        ))}
      </div>
    </div>
  );
}

export default function People() {
  return (
    <div className="mt-24">
      {Object.entries(teamData).map(([teamName, members], index) => (
        <TeamSection
          key={index}
          title={teamName}
          description={`"Our ${teamName.toLowerCase()} combines experience, passion, and fresh ideas to inspire, innovate, and drive our mission forward. Meet the amazing people behind our journey!"`}
          members={members}
        />
      ))}
    </div>
  );
}

