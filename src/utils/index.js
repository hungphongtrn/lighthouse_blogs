import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const getGivenNumberOfBlogs = (blogs, numberOfBlogs) => {
  if (blogs.length < numberOfBlogs) {
    // duplicate the last blog until we have the required number of blogs
    const lastBlog = blogs[blogs.length - 1];
    const remainingBlogs = Array(numberOfBlogs - blogs.length).fill(lastBlog);
    return blogs.concat(remainingBlogs);
  }
}
