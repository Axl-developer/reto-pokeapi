import './styles.scss'

interface TagProps {
    text: string;
    type: string;
}

export const Tag = ({text, type}: TagProps) => {
  return (
    <div className={`tag is-${type}`} >{text}</div>
  )
}
