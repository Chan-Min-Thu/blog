import React from "react";
import { Link } from "react-router-dom";
import {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
} from "../../services/blogsApi";

const BlogList = ({ setOpen, open }) => {
  const { data: blogs, isFetching } = useGetBlogsQuery();
 
  return (
    <div>
      {isFetching ? (
        <h1>This is Loading...</h1>
      ) : (
        blogs.map((blog, index) => (
          <div key={index} onClick={()=>setOpen(!open)}>
            <Link to={`/Blogs/${blog.id}`}>
              <table className="text-xs w-full text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="flex justify-between bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="w- px-2 py-2 font-normal text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {blog.title}
                    </th>
                    <td className="px-2 py-4">
                      <img
                        src={blog.image}
                        className="w-[50px] rounded-sm h-[40px]"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
