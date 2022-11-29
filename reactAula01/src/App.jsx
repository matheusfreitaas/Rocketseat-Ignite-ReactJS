import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="matheus"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Odio itaque, assumenda deleniti nihil laboriosam distinctio illo voluptates nostrum dolor, 
            adipisci provident enim quas ea perspiciatis! Aliquid voluptatibus harum non incidunt?"
          />
        </main>
      </div>
    </div>
  )
}


