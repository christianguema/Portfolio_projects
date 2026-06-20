import { useParams, Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { blogPosts } from "../data/blogPosts";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="font-body text-text/70">Article introuvable.</p>
        <Link to="/blog" className="font-body text-accent-1 mt-4 inline-block">
          ← Retour au blog
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <Link
        to="/blog"
        className="flex items-center gap-2 font-body text-sm text-accent-1 hover:opacity-80 transition-opacity duration-200 mb-10"
      >
        <FiArrowLeft /> Retour au blog
      </Link>

      <p className="font-mono text-xs text-accent-1 mb-3">{formatDate(post.date)}</p>
      <h1 className="font-display text-3xl text-text mb-6">{post.title}</h1>

      <div className="flex gap-2 mb-10">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-accent-2 bg-accent-2/10 border border-accent-2/30 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="font-body text-text/80 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </section>
  );
}