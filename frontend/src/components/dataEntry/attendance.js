import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import swal from 'sweetalert'

import "../../styles/Ss.css";

const Attendance = () => {
    let sum = 0;
    const d = new Date();
    const [attendance, setAttendance] = useState({
        data: {
            men: 0,
            women: 0,
            children: 0,
        },
        date: d.toDateString()
    })


    let number = Object.values(attendance.data);
    number.forEach(item => {
        sum += Number(item)
    })



    const onChange = (e) => {
        const { name, value } = e.target
        setAttendance((prev) => ({
            ...prev,
            data: {
                ...prev.data,
                [name]: value
            }
        }
        ))
    }

    const handler = (e) => {
        e.preventDefault()
        let request = {
            data: {
                men: attendance.data.men,
                women: attendance.data.women,
                children: attendance.data.children,
                total: sum
            },
            date: attendance.date
        }
        if (d.getDay() === 0) {
            axios.post('http://localhost:5000/api/attendance', request)
                .then(response => {
                    let data = response.data.message
                    swal(data)
                })
                .catch(err => {
                    swal(err.response.data.message)
                })
        } else {
            swal('Today is not a Sunday')
        }

    }

    let date = d.toDateString();


    return (
        <div className="cover">
            <form onSubmit={e => handler(e)} >
                <center><h3>ATTENDANCE</h3></center><br />
                <center>Date: {date} </center><br />
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
                            <td><input type="number" name="men" value={attendance.data.men} onChange={onChange} className="number" /></td>
                        </tr>
                        <tr>
                            <td>WOMEN</td>
                            <td><input type="number" name="women" value={attendance.data.women} onChange={onChange} className="number" /></td>
                        </tr>
                        <tr>
                            <td>CHILDREN</td>
                            <td><input type="number" name="children" value={attendance.data.children} onChange={onChange} className="number" /></td>
                        </tr>
                        <tr>
                            <td>TOTAL</td>
                            <td><input type="number" name="total" value={sum} readOnly className="number" /></td>
                        </tr>
                    </tbody>
                </Table>
                <center style={{ marginTop: 20 }}><input type="submit" value="save" className="btn2" /></center>
            </form>
        </div>
    )
}

export default Attendance;