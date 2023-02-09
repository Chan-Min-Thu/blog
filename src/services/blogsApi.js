import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogsApi = createApi({
                reducerPath:'blogsApi',
                baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000'}),
                tagTypes:['Blog'],
                endpoints:(builder)=>({
                    getBlogs:builder.query({
                                query:()=>"/Blogs",
                                providesTags:['Blog']
                    }),
                    getSingleBlog:builder.query({
                        query:(id)=>`/Blogs/${id}`,
                        providesTags:['Blog']
                    }),
                    AddBlog:builder.mutation({
                        query:(newBlog)=>({
                        url:'./Blogs',
                        method:"POST",
                        body:newBlog
                        }),
                        invalidatesTags:['Blog']
                    }),
                    DeleteBlog:builder.mutation({
                        query:(id)=>({
                            url:`/Blogs/${id}`,
                            method:"DELETE",
                            body:id
                        }),
                        invalidatesTags:['Blog']
                    }),
                    UpdateBlog:builder.mutation({
                        query:(newBlog)=>({
                            url:`/Blogs/${newBlog.id}`,
                            method:"PATCH",
                            body:newBlog
                        }),
                        invalidatesTags:['Blog']
                    })
                }),
})
export const { useGetBlogsQuery,useGetSingleBlogQuery,useAddBlogMutation,useDeleteBlogMutation,useUpdateBlogMutation } = blogsApi;