# Next.js Layouts and Pages

Next.js uses **file-system based routing**, meaning you can use folders and files to define routes. This page will guide you through how to create layouts and pages, and link between them.

---

## 🚀 Creating a page

A **page** is UI that is rendered on a specific route. To create a page, add a page.tsx inside the `app` or `sub` directory in app and default export a React component. For example, to create an index page (`/`):

```jsx filename="app/page.js" switcher
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Next js Home Page
    </div>
  );
}
```

## Creating a layout

A layout is UI that is **shared** between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.

You can define a layout by default exporting a React component from a `layout.tsx` file. The component should accept a `children` prop which can be a page or another layout.

For example, to create a layout that accepts your index page as child, add a `layout` file inside the `app` directory:

![layout.js special file](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/layout-special-file.png)

```jsx filename="app/layout.js" switcher
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}
```

The layout above is called a [root layout](/docs/app/api-reference/file-conventions/layout.md#root-layout) because it's defined at the root of the `app` directory. The root layout is **required** and must contain `html` and `body` tags.

## Creating a nested route

A nested route is a route composed of multiple URL segments. For example, the `/blog/[slug]` route is composed of three segments:

* `/` (Root Segment)
* `blog` (Segment)
* `[slug]` (Leaf Segment)

In Next.js:

* **Folders** are used to define the route segments that map to URL segments.
* **Files** (like `page` and `layout`) are used to create UI that is shown for a segment.

To create nested routes, you can nest folders inside each other. For example, to add a route for `/blog`, create a folder called `blog` in the `app` directory. Then, to make `/blog` publicly accessible, add a `page.tsx` file:

![File hierarchy showing blog folder and a page.js file](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/blog-nested-route.png)

```tsx filename="app/blog/page.tsx" switcher
// Dummy imports
import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'

export default async function Page() {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}
```

```jsx filename="app/blog/[slug]/page.js" switcher
// Dummy imports
import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'

export default async function Page() {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}
```

You can continue nesting folders to create nested routes. For example, to create a route for a specific blog post, create a new `[slug]` folder inside `blog` and add a `page` file:

![File hierarchy showing blog folder with a nested slug folder and a page.js file](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/blog-post-nested-route.png)

```tsx filename="app/blog/[slug]/page.tsx" switcher
function generateStaticParams() {}

export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}
```

```jsx filename="app/blog/[slug]/page.js" switcher
function generateStaticParams() {}

export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}
```

Wrapping a folder name in square brackets (e.g. `[slug]`) creates a [dynamic route segment](/docs/app/api-reference/file-conventions/dynamic-routes.md) which is used to generate multiple pages from data. e.g. blog posts, product pages, etc.

## Nesting layouts

By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts via their `children` prop. You can nest layouts by adding `layout` inside specific route segments (folders).

For example, to create a layout for the `/blog` route, add a new `layout` file inside the `blog` folder.

![File hierarchy showing root layout wrapping the blog layout](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/nested-layouts.png)

```tsx filename="app/blog/layout.tsx" switcher
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
```

```jsx filename="app/blog/layout.js" switcher
export default function BlogLayout({ children }) {
  return <section>{children}</section>
}
```

If you were to combine the two layouts above, the root layout (`app/layout.js`) would wrap the blog layout (`app/blog/layout.js`), which would wrap the blog (`app/blog/page.js`) and blog post page (`app/blog/[slug]/page.js`).

## Creating a dynamic segment

[Dynamic segments](/docs/app/api-reference/file-conventions/dynamic-routes.md) allow you to create routes that are generated from data. For example, instead of manually creating a route for each individual blog post, you can create a dynamic segment to generate the routes based on blog post data.

To create a dynamic segment, wrap the segment (folder) name in square brackets: `[segmentName]`. For example, in the `app/blog/[slug]/page.tsx` route, the `[slug]` is the dynamic segment.

```tsx filename="app/blog/[slug]/page.tsx" switcher
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

```jsx filename="app/blog/[slug]/page.js" switcher
export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

Learn more about [Dynamic Segments](/docs/app/api-reference/file-conventions/dynamic-routes.md) and the [`params`](/docs/app/api-reference/file-conventions/page.md#params-optional) props.

Nested [layouts within Dynamic Segments](/docs/app/api-reference/file-conventions/layout.md#params-optional), can also access the `params` props.