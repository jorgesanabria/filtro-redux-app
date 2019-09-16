import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { LimpiarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }
  cambiarFiltro(filtro: fromFiltro.filtrosValidos) {
    const action = new fromFiltro.SetFiltroAction(filtro);
    this.store.dispatch(action);
  }
  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(x => !x.completado).length;
  }
  limpiarCompletados() {
    const action = new LimpiarTodoAction(false);
    this.store.dispatch(action);
  }
}
