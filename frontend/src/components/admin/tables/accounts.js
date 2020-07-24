import React from 'react';
import Table from 'react-bootstrap/Table';

export default function AccountsTable(props) {
    let Data = props.data
    return (
        <div className="cover">
            <center><h3>ACCOUNTS REPORT</h3></center><br />
            <center>Date: {Data.date} </center><br />
            <Table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount (Ghc)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TITHE</td>
                        <td>{Data.data.tithe}</td>
                    </tr>
                    <tr>
                        <td>WELFARE</td>

                        <td>{Data.data.welfare}</td>
                    </tr>
                    <tr>
                        <td>OFFERTORY</td>
                        <td>{Data.data.offertory}</td>
                    </tr>
                    <tr>
                        <td>THANKSGIVING</td>
                        <td>{Data.data.thanksgiving}</td>
                    </tr>
                    <tr>
                        <td>COVENANT</td>
                        <td>{Data.data.covenant}</td>
                    </tr>
                    <tr>
                        <td>OTHER</td>
                        <td>{Data.data.other}</td>
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