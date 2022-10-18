import React, {Component} from "react";
import './customPopover.css'
import {Button, Modal} from "react-bootstrap";
import {Ellipsis} from "react-bootstrap/PageItem";
import DetailsDialog from "./StaticBackDrop";

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            DataIsLoaded: false,
            show: false
        };
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});


    componentDidMount() {
        fetch("http://localhost:8083/tasks/")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    tasks: json,
                    DataIsLoaded: true
                });
            })
    }

     handleDelete = (task) => {
        const tasks = this.state.tasks.filter(t => t.taskId !== task.taskId)
        this.setState({tasks})
    }

    handleRowColor = (task) => {
       let status = task.taskStatus.toString()

        if (status === "OPEN") {
            return "table-primary"
        }

        if (status === "IN_TREATMENT") {
            return "table-warning"
        }

        if (status === "CLOSE") {
            return "table-success"
        }
    }


    render() {
        let counter = 1;
        let {DataIsLoaded, tasks} = this.state;


        if (!DataIsLoaded) {

            return (

                <div>
                    <h1>
                        Please wait some time...
                    </h1>
                </div>
            )
        }

        return (


            <div >
                <table className="table table-hover">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        {/*<th scope="col">User ID</th>*/}
                        <th scope="col">Created By</th>
                        <th scope="col">Task</th>
                        {/*<th scope="col">Task ID</th>*/}
                        <th scope="col">Priority</th>
                        <th scope="col">Status</th>
                        <th scope="col">Days To Complete</th>
                        <th scope="col">Details</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody className={"table-hover"}>
                    {
                        tasks.map(task => {
                            let className = this.handleRowColor(task);

                            return (
                            <tr className={className} key={task.taskId}>
                                <td>{counter++}</td>
                                {/*<td>{task.userId}</td>*/}
                                <td>{task.userFullName}</td>
                                <td>{task.taskName}</td>
                                {/*<td>{task.taskId}</td>*/}
                                <td>{task.taskPriority}</td>
                                <td>{task.taskStatus}</td>
                                <td>{task.daysToCompleteTask}</td>


                                <td>
                                    <DetailsDialog title={"Description"} task={task}/>
                                </td>
                                <td>
                                    <button className={"btn btn-danger btn-sm"} onClick={() => this.handleDelete(task)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            )
                        })
                    }


                    </tbody>
                </table>
            </div>
        )
    }
}