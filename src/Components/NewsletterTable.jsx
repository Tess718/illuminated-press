import React, { useState } from "react";
import { Search, ListOrdered, Settings2 } from "lucide-react";

const NewsletterTable = ({ data = [] }) => {
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [page, setPage] = useState(1);

  const filtered = data.filter((item) =>
    item.template.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E9] p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-medium text-[18px] text-[#161924]">Newsletters</h5>

        <div className="flex gap-3 items-center">
          <div className="relative w-fit">
            <input
              type="search"
              placeholder="Search data"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="shadow-sm border border-[#E8E8E9] rounded-md h-10 px-3 pl-8 text-[#737373] font-medium text-sm w-[300px]"
            />
            <Search
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-[#737373]"
            />
          </div>

          <button className="flex items-center gap-2 border border-[#E8E8E9] rounded-lg px-3 py-2 text-sm shadow-sm">
            <ListOrdered size={18} />
            Sort by <i className="bi bi-chevron-down"></i>
          </button>

          <button className="flex items-center gap-2 border border-[#E8E8E9] rounded-lg px-3 py-2 text-sm shadow-sm">
            <Settings2 size={18} />
            Filter
          </button>

          <button className="border border-[#E8E8E9] rounded-lg w-10 h-10 grid place-content-center shadow-sm">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F9F9FA]">
              <th className="text-left text-[#5A5C66] font-medium text-sm border-b border-[#E8E8E9] py-3 px-4">
                <input type="checkbox" className="mr-2" />
                Template
              </th>
              <th className="text-left text-[#5A5C66] font-medium text-sm border-b border-[#E8E8E9] py-3 px-4">
                Preview snippet
              </th>
              <th className="text-left text-[#5A5C66] font-medium text-sm border-b border-[#E8E8E9] py-3 px-4">
                Generated date
              </th>
              <th className="text-left text-[#5A5C66] font-medium text-sm border-b border-[#E8E8E9] py-3 px-4">
                Topic
              </th>
              <th className="text-left text-[#5A5C66] font-medium text-sm border-b border-[#E8E8E9] py-3 px-4">
                Linked Character
              </th>
              <th className="border-b border-[#E8E8E9]"></th>
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? (
              paginated.map((item, i) => (
                <tr key={i} className="border-b border-[#E8E8E9] hover:bg-[#FAFAFB]">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <input type="checkbox" />
                    <img
                      src={item.image}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-[#161924]">{item.template}</p>
                      <p className="text-sm text-[#737373]">{item.edition}</p>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-[#5A5C66] text-sm">
                    {item.preview}
                  </td>

                  <td className="py-3 px-4 text-[#5A5C66] text-sm">{item.date}</td>

                  <td className="py-3 px-4">
                    <span className="text-[#864DC0] text-xs font-medium rounded-md border border-[#E6D4F8] bg-[#F7F3FC] px-3 py-1">
                      {item.topic}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      {item.characters.map((char, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <img
                            src={char.image}
                            alt=""
                            className="w-7 h-7 rounded-full object-cover"
                          />
                          <span className="text-sm text-[#161924]">{char.name}</span>
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <i className="bi bi-three-dots"></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-[#5A5C66] py-6">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-[#5A5C66] text-sm">
          <span>Show items</span>
          <select
            className="border border-[#E8E8E9] rounded-md px-3 py-1.5"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="border border-[#E8E8E9] rounded-md px-2 py-1 text-[#5A5C66] hover:bg-[#F9F9FA] disabled:opacity-50"
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1.5 text-sm ${
                page === i + 1 ? "bg-[#F9F9FA] font-semibold" : "hover:bg-[#F9F9FA]"
              } border border-[#E8E8E9]`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="border border-[#E8E8E9] rounded-md px-2 py-1 text-[#5A5C66] hover:bg-[#F9F9FA] disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterTable;
