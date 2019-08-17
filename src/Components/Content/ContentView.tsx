import React from 'react';
import styles from './ContentView.module.css';
import { ToDoItem } from './ToDoItem';
import { createClassName } from '../Utilities/UtilityFunctions';
import { NewToDo } from './NewToDo';
import { observer } from 'mobx-react';
import { ToDoStore } from '../../Stores/ToDoStore';
import cakeIcon from './Icons/cake_icon.svg';

interface IProps {
    store: ToDoStore;
}

@observer
export class ContentView extends React.Component<IProps> {
    public render() {
        return (
            <div className={styles.container}>
                {this.props.store.getTodoList().length > 0
                    ? this.renderTodoList()
                    : this.renderEmptyList()
                }

                <div className={createClassName([styles.newItemContainer, styles.contentWidth])}>
                    <NewToDo store={this.props.store}/>
                </div>
            </div>
        );
    }

    private renderTodoList() {
        return (
            <div className={createClassName([styles.listContainer, styles.contentWidth])}>
                {this.props.store.getTodoList().map((i, key) => 
                    <React.Fragment key={key}>
                        <ToDoItem value={i} store={this.props.store}/>
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