import requestHandler from "../../utils/requestHandler";
import responseHandler from "../../utils/responseHandler";
import { BlogServices } from "./blog.services";

const createBlogController = requestHandler(async (req, res) => {
  const result = await BlogServices.createBlogService(req.body);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Blog is Created Successfully",
    data: result,
  });
});

const getAllBlogsController = requestHandler(async (req, res) => {
  const result = await BlogServices.getAllBlogsService();
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Blogs retrieved successfully",
    data: result,
  });
});

const getSingleBlogController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await BlogServices.getSingleBlogService(id);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Blog is Retrieved Successfully",
    data: result,
  });
});

const updateBlogController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await BlogServices.updateBlogService(id, req.body);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Blog is Updated Successfully",
    data: result,
  });
});

const deleteBlogController = requestHandler(async (req, res) => {
  const id = req.params.id;
  const result = await BlogServices.deleteBlogService(id);
  responseHandler(res, {
    statusCode: 200,
    success: true,
    message: "Blog is Deleted Successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlogController,
  getAllBlogsController,
  getSingleBlogController,
  updateBlogController,
  deleteBlogController,
};
