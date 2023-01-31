import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export function Post() {
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/20803958?v=4" />
          <div className={styles.authorInfo}>
            <strong>Matheus</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>
        <time title="11 de Setembro às 11:11" dateTime="2022-05-11 11:11:00">Publicado há 1hr</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius consequuntur dolorum sunt. Delectus, id hic aspernatur, saepe porro fuga esse quibusdam facere accusamus assumenda blanditiis temporibus laboriosam autem iure cum?</p>
        <p>
          <a href="">meuSite.com</a>
        </p>
        <p><a href="">#novoProjeto #nlw</a></p>
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}