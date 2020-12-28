import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles/FilterByStatus.css';

const filterByStatusAction = ( statusSelected ) => {
    console.log(statusSelected);
    return {
        type: 'FILTER_BY_STATUS',
        payload: { statusSelected },
    }
}

export const FilterByStatus = () => {
    const dispatch = useDispatch();
    const filterByStatus = useSelector((state) => state.filterByStatus);

    const onStatusChange = ( e ) => {
        const value = e.target.value;

        dispatch(filterByStatusAction(value));
    }

    return (
        <select className="FilterByStatus-select" onChange={ onStatusChange } value={ filterByStatus } >
            <option value="">Filter by status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
    )
}