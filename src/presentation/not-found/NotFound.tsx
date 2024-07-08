import './styles.scss'

export const NotFound = ({text}:{text: string}) => {
  return (
    <div className="not-found">
        <figure>
            <img src={`${import.meta.env.BASE_URL}assets/Psyduck.webp`} alt="psyduck" width={200}/>
        </figure>
        {text}
    </div>
  )
}
