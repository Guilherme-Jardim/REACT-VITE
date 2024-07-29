import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://media.licdn.com/dms/image/D5603AQGP3x3bHeu8Mg/profile-displayphoto-shrink_200_200/0/1719245738671?e=1727913600&v=beta&t=n0eKHa4yMlKGwbWovnDVkSoMjotReE_gLOp6soK_O_E" 
          />
          <div
            className={styles.authorInfo}
          >
            <strong>Guilherme Jardim</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='29 de Julho às 13:40h' dateTime='2024-07-29 13:40:00'></time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifólio.</p>
        <p>teste 1<a href="#">teste 1</a></p>
        <p>teste 2<a href="#">teste 2</a></p>
      </div>

      <form 
        className={styles.commentForm}
      >
        <strong>
          Deixe seu feedback
        </strong>
        <textarea 
          placeholder='Deixe seu comentário'
        />
        <footer>
          <button type='submit'>
            Publicar
          </button>
        </footer>
      </form>

    </article>
  )
}