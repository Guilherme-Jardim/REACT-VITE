import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D5603AQGP3x3bHeu8Mg/profile-displayphoto-shrink_200_200/0/1719245738671?e=1727913600&v=beta&t=n0eKHa4yMlKGwbWovnDVkSoMjotReE_gLOp6soK_O_E',
      name: 'Guilherme Jardim',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.', },
    ],
    publishedAt: new Date('2024-07-30 08:44:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D5603AQGP3x3bHeu8Mg/profile-displayphoto-shrink_200_200/0/1719245738671?e=1727913600&v=beta&t=n0eKHa4yMlKGwbWovnDVkSoMjotReE_gLOp6soK_O_E',
      name: 'Chewbaca Azul',
      role: 'Salinmaleco'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae cumque omnis magni quisquam repudiandae, sapiente voluptatibus rem rerum iusto voluptate minus magnam aliquam iste officiis corporis illo non dolorum?.', },
    ],
    publishedAt: new Date('2024-07-30 08:44:00')
  }
]

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://media.licdn.com/dms/image/D5603AQGP3x3bHeu8Mg/profile-displayphoto-shrink_200_200/0/1719245738671?e=1727913600&v=beta&t=n0eKHa4yMlKGwbWovnDVkSoMjotReE_gLOp6soK_O_E"  
          />
          <div
            className={styles.authorInfo}
          >
            <strong>Guilherme Jardim</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='29 de Julho às 13:40h' dateTime='2024-07-29 13:40:00'>Publicado há 1h atrás</time>
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
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}