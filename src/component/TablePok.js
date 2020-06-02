import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

class TablePok extends Component {
    render() {
        return (
            <div>
                <Table responsive variant="dark" size="sm" style={{ fontSize: '12px' }}>
                    <thead>
                        <tr>
                            {this.props.title !== "Egg" ? (<th>{this.props.title}</th>) : ""}
                            <th>Move</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Power</th>
                            <th>Accuracy</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.tableInfo.map((item, key) => {
                        return (
                            <tr>
                                {this.props.title !== "Egg" ? (<th>{item[this.props.title]}</th>) : ""}
                                <td>{item.Move}</td>
                                <td><img src={process.env.REACT_APP_IMAGE_TYPE + item.Type.toLowerCase() + ".gif"} alt="type" /></td>
                                <td><img src ={item.Category} alt="category" /></td>
                                <td>{item.Power}</td>
                                <td>{item.Accuracy}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TablePok