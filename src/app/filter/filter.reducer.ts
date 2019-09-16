

import * as fromFiltros from './filter.actions';

const estadoInicial: fromFiltros.filtrosValidos = 'todos';


export function filtroReducer(state = estadoInicial, action: fromFiltros.actions): fromFiltros.filtrosValidos {
    switch (action.type) {
        case fromFiltros.SET_FILTRO:
            return action.filtro;
        default:
            return state;
    }
}
