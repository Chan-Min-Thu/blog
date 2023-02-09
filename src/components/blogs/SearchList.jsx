import React from "react";
import { Link } from "react-router-dom";
const SearchList = ({filteredBlogs, setFilteredBlogs }) => {
  return (
    <div>
      <Link to={`/Blogs/${filteredBlogs.id}`} onClick={()=>setFilteredBlogs([])}>
        <table className="text-xs w-full text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="flex justify-between bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="w- px-2 py-2 font-normal text-gray-900 whitespace-nowrap dark:text-white"
              >
                {filteredBlogs.title}
              </th>
              <td className="px-2 py-4">
                <img
                  src={filteredBlogs.image}
                  className="w-[50px] rounded-sm h-[40px]"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
};

export default SearchList;
