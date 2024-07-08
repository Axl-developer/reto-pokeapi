

export const NotFound = ({text}:{text: string}) => {
  return (
    <div className="not-found">
        <figure>
            <img src='/assets/Psyduck.webp' alt="psyduck" width={200}/>
        </figure>
        {text}
    </div>
  )
}
