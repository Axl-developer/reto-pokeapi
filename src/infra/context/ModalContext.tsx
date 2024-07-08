import { createContext, useCallback, useMemo, useState } from "react";
export interface contextModal{
  modal: {isOpen: boolean, name: string, isError: boolean};
  setterValue:<T>(value:T)=>void
}
const INITIAL_VALUE = {
  isOpen: false,
  name: '',
  isError: false
}

export const ContextModal = createContext<contextModal>({
  modal:INITIAL_VALUE,
  setterValue:()=>{}
});



export const ProviderModal = ({children}:{children:React.ReactNode}) => {
  const [modalPoke,setModalPoke] = useState(INITIAL_VALUE);

  const setterValue = useCallback(
     <T,>(value:T) => {
    setModalPoke({
      ...modalPoke,
      ...value
    })
  },
    [modalPoke],
  )
  
  const dataMemo=useMemo(() => ({
    modal: modalPoke,
    setterValue
  }), [modalPoke,setterValue])
  return <ContextModal.Provider value={{
    ...dataMemo
  }}>
    {children}
  </ContextModal.Provider>
  
}