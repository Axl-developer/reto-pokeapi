import { useContext } from "react"
import { ListPokemonsName, ListType, Search, Modal, CardPokemon } from "./presentation"
import { ContextModal, contextModal } from "./infra/context"

function App() {  
  
  const { modal } = useContext<contextModal>(ContextModal)


  return (
    <div className="main">
      <div>
        <Search />
      </div>
      <div className="main__content">
        <ListType  />
        <div>
          <ListPokemonsName />
        </div>  
      </div>
        
        {
          modal.isOpen &&
          <Modal>
            <CardPokemon />
          </Modal>
        }
      </div>
  )
}

export default App
