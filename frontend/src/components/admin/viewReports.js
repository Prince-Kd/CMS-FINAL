import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import ReportModal from './reportModal';

const ViewReports = () => {
    const [reports, setReports] = useState([])
    const [attendance, setAttendance] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [option, setOption] = useState('');
    const [key, setKey] = useState();
    const [disabled, setDisabled] = useState(false);

    const close = () => {
        setModalShow(false);
    }


    const handler = (e) => {
        e.preventDefault()
        axios.all([
            axios.get("http://localhost:5000/api/getReports"),
            axios.get("http://localhost:5000/api/getAttendance")
        ])
        .then(axios.spread((data1, data2) => {
           data1.data.message.forEach(item => {
               setReports(reports => reports.concat(item))
           })
           data2.data.message.forEach(item => {
            setAttendance(attendance => attendance.concat(item))
            })
            setDisabled(true)
        }))
        .catch(error => {
            swal("Something Went Wrong!")
        })
    }
    console.log(reports)
    console.log(attendance)

    const allReports = []
    const allAttendance = []

    reports.forEach((item, i) => {
        allReports.push(
            <button key={i} 
            className="accounts" 
            onClick={() => {
                setModalShow(true)
                setOption('acc')
                setKey(i)
            }} >
                <div><h4>ACCOUNTS REPORT</h4></div>
                <div style={{marginLeft: 80}}>Date: {item.date}</div>
            </button>
        )
    })
    attendance.forEach((item, i) => {
        allAttendance.push(
            <button key={i}
            className="accounts"
            onClick={() => {
                setModalShow(true)
                setOption('att')
                setKey(i)
            }} >
                <div><h4>ATTENDANCE</h4></div>
                <div style={{marginLeft: 80}}>Date: {item.date}</div>
            </button>
        )
    })

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                    <form onSubmit={e => handler(e)} >
                        <div style={{ display: "flex" }}>
                            <input type="submit" value={'View Reports'} disabled={disabled} className="btn3" />
                        </div>
                    </form>
            </div>
            <div className="box">
                <center><h3 style={{marginTop: 10}}>ACCOUNTS</h3><hr/></center>
                {allReports}
                <center><h3 style={{marginTop: 20}}>ATTENDANCE</h3><hr/></center>
                {allAttendance}    
            </div>
            <ReportModal
            show={modalShow}
            onHide={close}
            reports={reports}
            attend={attendance}
            tab={option}
            step={key}
            />
        </div>
    )
}

export default ViewReports;