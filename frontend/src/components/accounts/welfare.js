import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import "../../styles/Tithe.css"
import "../../styles/Ss.css";

import Table from 'react-bootstrap/Table';

const Welfare = () => {
    const [ids, setId] = useState("");
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [names, setName] = useState("")
    const [ID, setID] = useState("")
    const [info, setInfo] = useState({
        ID: ID,
        name: names,
        January: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        Feburary: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        March: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        April: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        May: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        June: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        July: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        August: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        September: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        October: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        November: {
            amount: 0,
            status: "not paid",
            date: ""
        },
        December: {
            amount: 0,
            status: "not paid",
            date: ""
        },

    })

    const onChange = (e) => {
        const { name, id, value } = e.target
        setInfo(
            (prev) => ({
                ...prev,
                [name]: {
                    ...prev[name],
                    [id]: value
                }
            })
        )
    }
    const onChangeId = (e) => {
        const id = e.target.value;
        setId(id);

    };

    const reset = (e) => {
        const { name, id } = e.target
        setInfo(
            (prev) => ({
                ...prev,
                [name]: {
                    ...prev[name],
                    [id]: ""
                }
            })
        )
    }


    const handler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/payWelfare", info)
            .then(response => {
                setLoading1(true);
                let data = response.data.message;
                swal(data)
                setLoading1(false);
            })
            .catch(error => {
                setLoading1(false)
                if (error.response.status === 400) {
                    swal(error.response.data.message);
                }
                else {
                    swal(error.response.data.message);
                }
            })
    }
    const search = (e) => {
        e.preventDefault()
        let request = {
            ID: ids
        }

        axios.post("http://localhost:5000/api/search_welfare", request)
            .then(response => {
                setLoading(true);
                let data = response.data.message;
                setID(data.ID)
                setName(data.name)
                setInfo(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false)
                if (error.response.status === 400) {
                    swal(error.response.data.message);
                }
                else {
                    swal(error.response.data.message);
                }
            })
    }

    return (
        <div>
            <div>
                <form onSubmit={e => search(e)} >
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: 20 }}>
                        <input type="search" name="id" className="name" placeholder="Enter ID" value={ids} onChange={onChangeId} />&emsp;
                        <input type="submit" value={loading ? 'loading...' : 'Search'} disabled={loading} className="btn2" />
                    </div>
                </form>
            </div>
            <h1>WELFARE</h1>
            <div style={{ marginLeft: 167, width: 1010, background: 'white', fontWeight: 'bold', marginBottom: 10, padding: 6 }}>
                <span>ID: {ID}</span><br />
                <span>Name: {names} </span>
            </div>
            <div>
                <form onSubmit={e => handler(e)} id="tithe">
                    <Table hover bordered>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Amount(Ghc)</th>
                                {/* <th>Status</th> */}
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> January</td>
                                <td><input type="number" id="amount" name="January" value={info.January.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="January" value={info.January.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="January" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Feburay</td>
                                <td><input type="number" id="amount" name="Feburary" value={info.Feburary.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="Feburary" value={info.Feburary.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="Feburary" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> March</td>
                                <td><input type="number" id="amount" name="March" value={info.March.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="March" value={info.March.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="March" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> April</td>
                                <td><input type="number" id="amount" name="April" value={info.April.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="April" value={info.April.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="April" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> May</td>
                                <td><input type="number" id="amount" name="May" value={info.May.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="May" value={info.May.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="May" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> June</td>
                                <td><input type="number" id="amount" name="June" value={info.June.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="June" value={info.June.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="June" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> July</td>
                                <td><input type="number" id="amount" name="July" value={info.July.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="July" value={info.July.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="July" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> August</td>
                                <td><input type="number" id="amount" name="August" value={info.August.amount} onChange={onChange} placeholder="Enter Amount" /></td>
                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="August" value={info.August.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="August" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> September</td>
                                <td><input type="number" id="amount" name="September" value={info.September.amount} onChange={onChange} placeholder="Enter Amount" /></td>

                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="September" value={info.September.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="September" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> October</td>
                                <td><input type="number" id="amount" name="October" value={info.October.amount} onChange={onChange} placeholder="Enter Amount" /></td>

                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="October" value={info.October.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="October" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> November</td>
                                <td><input type="number" id="amount" name="November" value={info.November.amount} onChange={onChange} placeholder="Enter Amount" /></td>

                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="November" value={info.November.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="November" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> December</td>
                                <td><input type="number" id="amount" name="December" value={info.December.amount} onChange={onChange} placeholder="Enter Amount" />
                                </td>

                                <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                                        <input type="date" id="date" name="December" value={info.December.date} onChange={onChange} />
                                        <input type="button" value="Reset Date" name="December" id="date" onClick={reset} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div style={{ marginBottom: 20, marginTop: 10 }}>
                        <center><input type="submit" value={loading1 ? 'loading...' : 'Save'} disabled={loading1} id="btn2" /></center>
                    </div>
                </form>
                <br /><br />
            </div>

        </div>
    )
}

export default Welfare;