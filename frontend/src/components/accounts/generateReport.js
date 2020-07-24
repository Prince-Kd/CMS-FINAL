import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';

import "../../styles/Ss.css";

const GenerateReport = () => {
    
    let titheSum = 0;
    let welfareSum = 0;
    let sum = 0;
    let d = new Date();
    let today = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;

    const [Tithes, setTithes] = useState([]);
    const [Welfare, setWelfare] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [report, setReport] = useState({
        data: {
            offertory: 0,
            thanksgiving: 0,
            covenant: 0,
            other: 0,
        },
        date: d.toDateString()
    })

    const handler = () => {
        axios.all([
            axios.get("http://localhost:5000/api/getAllTithe"),
            axios.get("http://localhost:5000/api/getAllWelfare")
        ])
            .then(axios.spread((data1, data2) => {
                data1.data.message.forEach(element => {
                    setTithes(Tithes => Tithes.concat(element))
                });
                data2.data.message.forEach(element => {
                    setWelfare(Welfare => Welfare.concat(element))
                });
                setDisabled(true)
            }))
            .catch(error => {
                swal(error);
            })
    }

    // console.log(report.data.total)
    Tithes.forEach(item => {
        let months = Object.values(item)

        months.forEach(detail => {
            if (detail.date === today) {
                titheSum += detail.amount;
            }
        })
    })
    Welfare.forEach(item => {
        let months = Object.values(item)

        months.forEach(detail => {
            if (detail.date === today) {
                welfareSum += detail.amount;
            }
        })
    })

    let number = Object.values(report.data);
    number.forEach(item => {
        sum += Number(item)
    })


    const onChange = (e) => {
        const { name, value } = e.target
        setReport((prev) => ({
            ...prev,
            data: {
                ...prev.data,
                [name]: value
            }
        }
        ))
    }


    const Send = (e) => {
        e.preventDefault()
        let request = {
            data: {
                tithe: titheSum,
                welfare: welfareSum,
                offertory: report.data.offertory,
                thanksgiving: report.data.thanksgiving,
                covenant: report.data.covenant,
                other: report.data.other,
                total: sum + titheSum + welfareSum
            },
            date: report.date
        }
        axios.post("http://localhost:5000/api/SaveReport", request)
            .then(response => {
                swal(response.data.message)
            })
            .catch(error => {
                swal(error.response.data.message)
            })

    }
    let date = d.toDateString();

    return (
        <div className="cover">
            <form onSubmit={e => Send(e)} >
                <center><h3>ACCOUNTS REPORT</h3></center><br />
                <center>Date: {date} </center><br />
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
                            <td>
                                <div style={{ display: "flex"}}>
                                    <input type="number" id="tithe" value={titheSum}   readOnly className="number" />
                                    <input type="button" value="Get Tithe and Welfare" disabled={disabled} id="get" onClick={handler} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>WELFARE</td>

                            <td>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <input type="number" id="welfare" value={welfareSum}  readOnly className="number" />
                                    {/* <input type="button" value="Get value" name="January" id="date" onClick={handler} /> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>OFFERTORY</td>
                            <td>
                                <input type="number" name="offertory" value={report.data.offertory} onChange={onChange} className="number" />
                            </td>
                        </tr>
                        <tr>
                            <td>THANKSGIVING</td>
                            <td><input type="number" name="thanksgiving" value={report.data.thanksgiving} onChange={onChange} className="number" /></td>
                        </tr>
                        <tr>
                            <td>COVENANT</td>
                            <td><input type="number" name="covenant" value={report.data.covenant} onChange={onChange} className="number" /></td>
                        </tr>
                        <tr>
                            <td>OTHER</td>
                            <td><input type="number" name="other" value={report.data.other} onChange={onChange} className="number" /></td>
                        </tr>
                        <tr>
                            <td>TOTAL</td>
                            <td><input type="number" id="total" value={sum + welfareSum + titheSum} readOnly className="number" /></td>
                        </tr>
                    </tbody>
                </Table>
                <center style={{ marginTop: 20 }}><input type="submit" value="Save" className="btn2" /></center>
            </form>
        </div>
    )
}

export default GenerateReport;