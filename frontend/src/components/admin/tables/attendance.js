import React from 'react';
import Table from 'react-bootstrap/Table';

export default function AttendanceTable(props) {
    let Data = props.data
    return(
        <div className="cover">
            <center><h3>ATTENDANCE</h3></center><br />
                <center>Date: {Data.date} </center><br />
                <Table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MEN</td>
                            <td>{Data.data.men}</td>
                        </tr>
                        <tr>
                            <td>WOMEN</td>
                            <td>{Data.data.women}</td>
                        </tr>
                        <tr>
                            <td>CHILDREN</td>
                            <td>{Data.data.children}</td>
                        </tr>
                        <tr>
                            <td>TOTAL</td>
                            <td>{Data.data.total}</td>
                        </tr>
                    </tbody>
                </Table>
        </div>
    )
}