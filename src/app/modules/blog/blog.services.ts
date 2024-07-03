import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

// creating a new blog
const createBlogService = async (payload: TBlog) => {
  const result = await BlogModel.create(payload);
  return result;
};

// retreiving all blogs
const getAllBlogsService = async () => {
  const result = await BlogModel.find();
  return result;
};

// getting a single blog
const getSingleBlogService = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

// updating single blog
const updateBlogService = async (id: string, payload: Partial<TBlog>) => {
  const result = await BlogModel.findByIdAndUpdate(id, payload);
  return result;
};

// deleting a single blog
const deleteBlogService = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogService,
  getAllBlogsService,
  getSingleBlogService,
  updateBlogService,
  deleteBlogService,
};
