import styles from './Tags.module.scss'

const Tags = ({ text, tag }) => {
  // if ((tag = 'tech')) {
  //   return <p className={styles.tag}>{text}</p>
  // }
  return <p className={styles.tag}>{text}</p>
}

export default Tags
