import styles from './Tags.module.scss'

const Tags = ({ text, tag }) => {
  return <p className={tag}>{text}</p>
}

export default Tags
