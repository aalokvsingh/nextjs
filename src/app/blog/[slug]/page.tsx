interface PageProps {
  params: {
    slug: string
  }
}
export default function BlogPostPage({ params }: PageProps) {
    return (
        <div>
            <h1>Blog Post: {params.slug}</h1>
        </div>
    );
}
