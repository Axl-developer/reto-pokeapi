import './styles.scss'
import { useEffect, useState } from 'react';

interface params {
    current: number;
    pageSize: number;
}

interface PaginationProps {
    total: number;
    pageSize: number;
    current: number;
    handlePagination: (param: params) => void;
    params: params;
}

export const Pagination = ({total, pageSize, current, handlePagination, params}:PaginationProps) => {

    const [pages, setPages] = useState<(number|string)[]>([])
    const calcTotal = Math.ceil(total / pageSize)

    const getPages = () => {
        if (calcTotal <= 7) {
            const arr = [...Array(calcTotal).keys()].map( i => i + 1)
            setPages(arr)
        }

        if( current <= 4 ) {
            setPages([1,2,3,4, '...', calcTotal])
        }

        if( current >= 4 && current < calcTotal - 3 ) {
            setPages([1, '...', current - 1, current, current + 1, '...', calcTotal])
        }

        if( current > calcTotal - 4 ) {
            setPages([1, '...', calcTotal - 4, calcTotal - 3, calcTotal - 2, calcTotal - 1, calcTotal])
        }
    }

    useEffect(() => {
        getPages()
    }, [current,calcTotal])
    

  return (
    <div className='pagination'>
        {
            pages.map( page => (
                <div key={page} className={`pagination__page ${current === page && 'is-active'}` } onClick={ () => handlePagination( {...params, current: Number(page)})}>{ page }</div>
            ))
        }
    </div>
  )
}
