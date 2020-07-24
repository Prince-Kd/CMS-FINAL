import React from 'react';
import { Overlay } from 'react-portal-overlay';

import ViewForm from './viewForm';
import ViewTithe from './viewTithe';
import ViewWelfare from './viewWelfare';

export default function ViewModal(props) {
    console.log(props.button)
    const Switch = (props) => {
        if (props.button === 'Tithe') {
            return <ViewTithe 
                    data1={props.AllTithe[props.step]} 
                    data11={props.Tithe} 
                    check1={props.check1} 
                    check2={props.check2} 
                    />
        } else if (props.button === 'Welfare') {
            return <ViewWelfare 
                    data2={props.AllWelfare[props.step]} 
                    data22={props.Welfare} 
                    check1={props.check1} 
                    check2={props.check2} 
                    />
        } else if (props.button === 'View') {
            return <ViewForm 
                    data={props.info[props.step]} 
                    Data={props.Member} 
                    check1={props.check1} 
                    check2={props.check2} 
                    />
        }
    };

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
                    {Switch(props)}
                </div>
                <div>
                    <center><button className="btn2" onClick={props.onHide}>Close</button></center>
                </div>
            </div>
        </Overlay>
    );
}
