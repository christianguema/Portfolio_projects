import { Link } from "react-router";
import { blogPosts } from "../data/blogPosts";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import TextType from "@/components/ui/TextType";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <RevealOnScroll>
        <TextType
          className="font-mono text-accent-1 text-sm mb-4"
          text={["$ ls blog/"]}
          typingSpeed={200}
          pauseDuration={1600}
          showCursor
          cursorCharacter="█"
          textColors={"#64FF5C"}
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />
        <h1 className="font-display text-3xl text-text mb-12">Blog</h1>
      </RevealOnScroll>

      {blogPosts.length === 0 ? (
        <p className="font-body text-text/60">
          Aucun article publié pour le moment.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.slug} delay={index * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="block border border-accent-2/30 rounded-2xl p-8 hover:border-accent-2 transition-colors duration-200"
              >
                <p className="font-mono text-xs text-accent-1 mb-3">
                  {formatDate(post.date)}
                </p>
                <h2 className="font-display text-xl text-text mb-3">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-text/70 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-accent-2 bg-accent-2/10 border border-accent-2/30 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </section>
  );
}