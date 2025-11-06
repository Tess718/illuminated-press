const templates = [
  {
    title: "Amazon Hacks",
    edition: "Edition 1",
    avatar: "/amazon.jpg",
    preview: "Cloud Infrastructure Migration for XYZ Inc",
    date: "Mon, 12 Jan 2025",
    topic: "AI Trends",
    characters: [
      { name: "Professor", img: "/prof.jpg" },
      { name: "Cartoon", img: "/cartoon.jpg" }
    ]
  },
  {
    title: "Climate & Energy Digest ",
    avatar: "/climate.jpg",
    preview: "Cloud Infrastructure Migration for XYZ Inc",
    date: "Mon, 12 Jan 2025",
    topic: "Climate Change",
    characters: [
      { name: "Cartoon", img: "/cartoon.jpg" }
    ]
  },
  {
    title: "how to increase Audience",
    avatar: "/c420465ad12401ac7529860de7e80524dd890075.jpg",
    preview: "Cloud Infrastructure Migration for XYZ Inc",
    date: "Mon, 12 Jan 2025",
    topic: "Sustainable Living ",
    characters: [
      { name: "Actor", img: "/e988e6ef720aa675113d122b1059a42df6b88463.jpg" },
    ]
  },
  {
    title: "Email Marketing",
    avatar: "/50b70111fb988884facb69843a69b27fd55e4411.jpg",
    preview: "Cloud Infrastructure Migration for XYZ Inc",
    date: "Mon, 12 Jan 2025",
    topic: "AI Trends & Research",
    characters: [
      { name: "Poet", img: "/9ccce8925601f1df022f6742aaf35fcd99d992d9.jpg" },
      { name: "Actor", img: "/e988e6ef720aa675113d122b1059a42df6b88463.jpg" },
    ]
  },
  {
    title: "Social Media",
    avatar: "/71ccf952da5b582016e7cf039a0826566ddf0212.jpg",
    preview: "Cloud Infrastructure Migration for XYZ Inc",
    date: "Mon, 12 Jan 2025",
    topic: "Tech Innovations",
    characters: [
      { name: "Cartoon", img: "/cartoon.jpg" }
    ]
  },
  
];

const truncate = (text, max = 36) => {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
};

export default function TemplatesTable() {
  return (
    <table className="min-w-[1200px] lg:min-w-full w-full border-y border-[#E8E8E9]">
      <thead>
        <tr className="bg-[#F9F9FA]">
          <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start flex items-center gap-2">
            <input type="checkbox" /> Template
          </th>
          <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
            Preview snippet
          </th>
          <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
            Generated date
          </th>
          <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
            Topic
          </th>
          <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start">
            Linked Character
          </th>
          <th className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] py-2.5 px-4 text-start"></th>
        </tr>
      </thead>

      <tbody>
        {templates.map((item, i) => (
          <tr key={i}>
            <td className="text-[#5A5C66] font-medium text-[14px] border border-[#E8E8E9] border-b-0 py-2.5 px-4 flex items-center gap-2">
              <input type="checkbox" />
              <img src={item.avatar} className="w-7 h-7 rounded-full" alt="" />
                <div className="flex flex-col">
                    <p>{truncate(item.title, 19)}</p>
                    {item.edition && <p>{item.edition}</p>}
                </div>
            </td>

            <td className="text-[#5A5C66] text-[12px] font-normal border border-[#E8E8E9] px-4">
              {truncate(item.preview, 36)}
            </td>

            <td className="text-[#5A5C66] text-[12px] font-normal border border-[#E8E8E9] py-2.5 px-4">
              {item.date}
            </td>

            <td className="border border-[#E8E8E9] text-center py-2.5 px-4">
              <div className="text-[#864DC0] text-[10px] font-medium rounded-sm border border-[#DEC2FA] bg-[#F3EBFA] py-2 px-4 w-fit">
                {item.topic}
              </div>
            </td>

            <td className="text-[#5A5C66] border font-normal border-[#E8E8E9] py-2.5 px-4">
              <div className="flex gap-3">
                {item.characters.map((char, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <img src={char.img} alt="" className="w-7 h-7 rounded-full" />
                    <small>{char.name}</small>
                  </div>
                ))}
              </div>
            </td>

            <td className="border border-[#E8E8E9] py-2.5 px-4">
              <i className="bi bi-three-dots"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

