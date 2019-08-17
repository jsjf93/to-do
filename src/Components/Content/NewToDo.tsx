import React from 'react';
import styles from './ToDoItem.module.css';
import addIcon from './Icons/add_icon.svg';
import ReactTooltip from 'react-tooltip';
import { createClassName } from '../Utilities/UtilityFunctions';
import { ToDoStore } from '../../Stores/ToDoStore';
import { observer } from 'mobx-react';

interface IProps {
    store: ToDoStore;
}

@observer
export class NewToDo extends React.Component<IProps> {
    private input: any;

    constructor(props: IProps) {
        super(props);
        this.input = React.createRef();
    }

    private handleAdd = () => {
        const text = this.input.current.textContent;
        this.props.store.addTodoItem(text);
        this.input.current.textContent = '';
    }

    public render() {
        return (
            <div className={styles.container}>
                {this.renderToDoField()}
                {this.renderAddButton()}
            </div>
        );
    }

    private renderToDoField() {
        return (
            <div 
                className={createClassName([styles.input, styles.newItemInput])}
                ref={this.input}
                contentEditable={true}
                suppressContentEditableWarning={true}
                placeholder={'Your todo goes here'}
            />
        );
    }

    private renderAddButton() {
        const id = 'add';

        return (
            <>
                <img 
                    className={styles.icon} 
                    src={addIcon} 
                    alt="To Do Add Icon"
                    data-tip
                    data-for={id}
                    onClick={this.handleAdd}
                />
                <ReactTooltip id={id} place="top" effect="solid" delayShow={2000}>Add a new todo</ReactTooltip>
            </>
        );
    }
}