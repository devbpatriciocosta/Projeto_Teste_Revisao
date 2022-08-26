import styles from './Button.module.scss'

export default function Button() {
  return (
    <div className={styles.button}>
      <label>Button Label</label>
      <button>Button Text</button>
    </div>
  )
}
