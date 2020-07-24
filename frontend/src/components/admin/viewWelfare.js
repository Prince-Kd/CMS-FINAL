import React from 'react';
import Table from 'react-bootstrap/Table';
import "../../styles/Tithe.css"
import "../../styles/Ss.css";

const ViewWelfare = (props) => {
    let One = {}

    const Switch = (props) => {
        if (props.check1 === true) {
            One = props.data22
        }
        if (props.check2 === true) {
            One = props.data2
        }
    }
    Switch(props)
    return (
        <div>
            <h1>Tithe</h1>
            <div style={{ marginLeft: 167, width: 1010, background: 'white', fontWeight: 'bold', marginBottom: 10, padding: 6 }}>
                <span>ID: {One.ID}</span><br />
                <span>Name: {One.name} </span>
            </div>
            <Table hover bordered>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Amount(Ghc)</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> January</td>
                        <td>{One.January.amount}</td>
                        <td>{One.January.date}</td>
                    </tr>
                    <tr>
                        <td> Feburay</td>
                        <td>{One.Feburary.amount}</td>
                        <td>{One.Feburary.date}</td>
                    </tr>
                    <tr>
                        <td> March</td>
                        <td>{One.March.amount}</td>
                        <td>{One.March.date}</td>
                    </tr>
                    <tr>
                        <td> April</td>
                        <td>{One.April.amount}</td>
                        <td>{One.April.date}</td>
                    </tr>
                    <tr>
                        <td> May</td>
                        <td>{One.May.amount}</td>
                        <td>{One.May.date}</td>
                    </tr>
                    <tr>
                        <td> June</td>
                        <td>{One.June.amount}</td>
                        <td>{One.June.date}</td>
                    </tr>
                    <tr>
                        <td> July</td>
                        <td>{One.July.amount}</td>
                        <td>{One.July.date}</td>
                    </tr>
                    <tr>
                        <td> August</td>
                        <td>{One.August.amount}</td>
                        <td>{One.August.date}</td>
                    </tr>
                    <tr>
                        <td> September</td>
                        <td>{One.September.amount}</td>
                        <td>{One.September.date}</td>
                    </tr>
                    <tr>
                        <td> October</td>
                        <td>{One.October.amount}</td>
                        <td>{One.October.date}</td>
                    </tr>
                    <tr>
                        <td> November</td>
                        <td>{One.November.amount}</td>
                        <td>{One.November.date}</td>
                    </tr>
                    <tr>
                        <td> December</td>
                        <td>{One.December.amount}</td>
                        <td>{One.December.date}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ViewWelfare;