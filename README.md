
# 1. The Template

```markdown
---
title: 
description: 
image: 
publishedAt: 
updatedAt: 
author: 
isPublished: 
tags: 
    - ...   
    - ...
    - ...
---
... Here goes the content of the blog post ...
```

# Images, Videos, and Other Assets

Store all images, videos, and other assets in the `public` directory. When referencing these assets in your content, use relative paths starting from the `public` directory. For example, if you have an image named `my-image.jpg` in the `public/images` directory, you can reference it in your content as `../../public/images/my-image.jpg`.

# Frontmatter Fields

- `title` (required): The title of the blog post.
- `description` (required): A brief description of the blog post.
- `image` (required): The path to the image that represents the blog post. This image will be displayed as a thumbnail in the blog list and as a header image in the blog post.
- `publishedAt` (required): The date when the blog post was published. Use the format `YYYY-MM-DD`.
- `updatedAt` (required): The date when the blog post was last updated. Use the format `YYYY-MM-DD`.
- `author` (required): The author of the blog post.
- `isPublished` (required): Set this to `true` to publish the blog post. Set it to `false` to keep the blog post as a draft.
- `tags` (required): A list of tags that categorize the blog post.
