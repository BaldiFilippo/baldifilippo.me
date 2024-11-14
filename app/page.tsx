import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`My name is Filippo, I’m 20 years old, and I’m an Italian student at the University
         of Trento. I’m currently studying Interfaces and Communication Technologies.
          Through this website, I’d like to showcase my projects and interesting work.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
