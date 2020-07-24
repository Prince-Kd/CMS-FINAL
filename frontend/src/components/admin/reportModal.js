import React from 'react';
import { Overlay } from 'react-portal-overlay';

import AccountsTable from './tables/accounts';
import AttendanceTable from './tables/attendance';

export default function ReportModal(props) {
    const Tabs = (props) => {
        if (props.tab === 'acc') {
            return (
                <AccountsTable
                    data={props.reports[props.step]}
                />
            )
        }
        if (props.tab === 'att') {
            return (
                <AttendanceTable
                    data={props.attend[props.step]}
                />
            )
        }
    }

    return (
        <Overlay
            open={props.show}
            onClose={props.onHide}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div className="mod">
                <div>
                    {Tabs(props)}
                </div>
                <div>
                    <center><button className="btn2" onClick={props.onHide}>Close</button></center>
                </div>
            </div>
        </Overlay>

    )
}