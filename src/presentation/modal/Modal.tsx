import { useContext } from 'react';
import { contextModal, ContextModal } from '../../infra/context';
import './styles.scss'

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({children}: ModalProps) => {

  const { setterValue } = useContext<contextModal>(ContextModal)

  return (
    <div className="modal">
      <div className="modal__child">{children}</div>
      <div className="modal__background" onClick={() => setterValue({isOpen: false, name: ''})}></div>
    </div>
  )
}
