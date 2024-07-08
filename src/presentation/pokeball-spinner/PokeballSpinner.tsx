import './styles.scss'

export const PokeballSpinner = ({isAnimated = false}: { isAnimated?: boolean }) => {
  return (
    <div className={`ball ${isAnimated  ?'is-animated' :''}`}></div>
  )
}
