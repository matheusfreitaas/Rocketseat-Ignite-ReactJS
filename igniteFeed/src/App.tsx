import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from "./App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/20803958?v=4',
      name: 'Matheus Freitas',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: "Fala galera" },
      { type: 'paragraph', content: "Lorem ipsum dlor sit, amet consectetur adipisicing elit. Eius consequuntur dolorum sunt. Delectus, id hic aspernatur, saepe porro fuga esse quibusdam facere accusamus assumenda blanditiis temporibus laboriosam autem iure cum?" },
      { type: 'link', content: 'meuSite.com' },
    ],
    publishedAt: new Date('2023-01-20 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/20803958?v=4',
      name: 'Kuro-Obi',
      role: 'Karate Teacher'
    },
    content: [
      { type: 'paragraph', content: "Fala galera" },
      { type: 'paragraph', content: "Lorem ipsum dlor sit, amet consectetur adipisicing elit. Eius consequuntur dolorum sunt. Delectus, id hic aspernatur, saepe porro fuga esse quibusdam facere accusamus assumenda blanditiis temporibus laboriosam autem iure cum?" },
      { type: 'link', content: 'meuSite.com' },
    ],
    publishedAt: new Date('2023-01-31 12:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


