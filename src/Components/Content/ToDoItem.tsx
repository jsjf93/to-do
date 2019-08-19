import React from 'react'
import styles from './ToDoItem.module.css';
import completeIcon from './Icons/complete_icon.svg';
import ReactTooltip from 'react-tooltip';
import { createClassName } from '../Utilities/UtilityFunctions';
import { ITodo, ToDoStore } from '../../Stores/ToDoStore';

interface IProps {
    value: ITodo;
    store: ToDoStore;
}

export class ToDoItem extends React.PureComponent<IProps> {
    private input: any;

    constructor(props: IProps) {
        super(props);
        this.input = React.createRef();
    }

    private handleComplete = () => {
        const { store, value } = this.props;
        store.completeTodoItem(value.id);
    }


    private handleUpdate = () => {
        const { store, value } = this.props;
        value.name = this.input.current.textContent;
        store.updateTodoItem(value);
    }

    public render() {
        return (
            <div className={styles.container}>
                {this.renderCompleteButton()}
                {this.renderToDoContent()}
            </div>
        );
    }

    private renderCompleteButton() {
        const id = "complete";
        return (
            <>
                <img 
                    className={styles.icon} 
                    src={completeIcon} 
                    alt="To Do Complete Icon"
                    data-tip
                    data-for={id}
                    onClick={this.handleComplete}
                />
                <ReactTooltip id={id} place="top" effect="solid" delayShow={2000}>Complete the task</ReactTooltip>
            </>
        );
    }

    private renderToDoContent() {
        return (
            <div 
                className={createClassName([styles.input, styles.toDotem])}
                ref={this.input}
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={this.handleUpdate}
            >
                {this.props.value.name}
            </div>
        );
    }

}