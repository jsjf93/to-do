import React from 'react';
import styles from './ToDoList.module.css';
import { ToDoItem } from './ToDoItem';
import { createClassName } from '../Utilities/UtilityFunctions';
import { NewToDo } from './NewToDo';
import { observer, inject } from 'mobx-react';
import { ToDoStore } from '../../Stores/ToDoStore';
import cakeIcon from './Icons/cake_icon.svg';

interface IProps {
    toDoStore: ToDoStore;
}

@inject('toDoStore')
@observer
export class ToDoList extends React.Component<IProps> {
    public render() {
        return (
            <div className={styles.container}>
                {this.props.toDoStore.getTodoList().length > 0
                    ? this.renderTodoList()
                    : this.renderEmptyList()
                }

                <div className={createClassName([styles.newItemContainer, styles.contentWidth])}>
                    <NewToDo store={this.props.toDoStore}/>
                </div>
            </div>
        );
    }

    private renderTodoList() {
        return (
            <div className={createClassName([styles.listContainer, styles.contentWidth, styles.scrollBar])}>
                {this.props.toDoStore.getTodoList().map((i, key) => 
                    <React.Fragment key={key}>
                        <ToDoItem value={i} store={this.props.toDoStore}/>
                        <hr />  
                    </React.Fragment>
                )}
            </div>
        );
    }

    private renderEmptyList() {
        return (
            <div className={createClassName([styles.listContainer, styles.contentWidth])}>
                <div className={styles.emptyList}>
                    Nothing to do!
                </div>

                <img className={styles.emptyList} src={cakeIcon} alt="Cake Icon"/>
            </div>
        );
    }
}