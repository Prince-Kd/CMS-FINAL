import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import ViewModal from './viewModal';


import "../../styles/Ss.css";

const ViewMember = () => {
    const [id, setId] = useState();
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [members, setMembers] = useState([]);
    const [member, setMember] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);
    const [option, setOption] = useState('');
    const [key, setKey] = useState();
    const [tithe, setTithe] = useState();
    const [welfare, setWelfare] = useState();
    const [AllTithe, setAllTithe] = useState([]);
    const [AllWelfare, setAllWelfare] = useState([]);
    const [showOne, setShowOne] = useState();
    const [ShowAll, setShowAll] = useState();


    const onChangeId = (e) => {
        const id = e.target.value;
        setId(id);
    };
    const close = () => {
        setModalShow(false);
    }

    const handler = (e) => {
        e.preventDefault()
        let request = {
            ID: id
        }

        axios.all([
            axios.post("http://localhost:5000/api/search_member", request),
            axios.post("http://localhost:5000/api/search_tithe", request),
            axios.post("http://localhost:5000/api/search_welfare", request)
        ])
            .then(axios.spread((res1, res2, res3) => {
                setLoading(true);
                let data1 = res1.data.message;
                setMember(data1);
                setShowOne(true);
                setShowAll(false)

                let data2 = res2.data.message
                setTithe(data2)

                let data3 = res3.data.message
                setWelfare(data3)
                setLoading(false);
            }))
            .catch(error => {
                setLoading(false)
                swal(error);
            })
    }

    const view = () => {
        axios.all([
            axios.get("http://localhost:5000/api/view_members"),
            axios.get("http://localhost:5000/api/getAllTithe"),
            axios.get("http://localhost:5000/api/getAllWelfare")
        ])
            .then(axios.spread((data1, data2, data3) => {
                setLoading1(true);
                data1.data.message.forEach(item => {
                    setMembers(members => members.concat(item));
                })
                setShowAll(true);
                setShowOne(false);
                data2.data.message.forEach(item => {
                    setAllTithe(AllTithe => AllTithe.concat(item));
                })
                data3.data.message.forEach(item => {
                    setAllWelfare(AllWelfare => AllWelfare.concat(item));
                })
                
            }))
            .catch(error => {
                setLoading1(false)
                swal(error);
            })
    }



    const desc = []
    members.forEach((member, i) => {
        desc.push(
            <div key={i} className="show" >
                <div className="id">{member.ID}</div>
                <div className="identity">{`${member.Surname} ${member.Othernames}`}</div>
                <input style={{ marginRight: 10 }}
                    type="submit"
                    onClick={() => {
                        setModalShow(true)
                        setOption('View')
                        setKey(i)
                    }}
                    value="View" className="btn3" id="btn3" />
                <input style={{ marginLeft: 10, marginRight: 10 }}
                    type="submit"
                    name={member.ID}
                    onClick={() => {
                        setModalShow(true)
                        setOption('Tithe')
                        setKey(i)
                    }}
                    value="Tithe" className="btn3" id="btn3" />
                <input style={{ marginRight: 10 }}
                    type="submit"
                    name={member.ID}
                    onClick={() => {
                        setModalShow(true)
                        setOption('Welfare')
                        setKey(i)
                    }}
                    value="Welfare" className="btn3" id="btn3" />
            </div>
        )
    })
    const showAll = (ShowAll) => {
        if (ShowAll === true) {
            return (
                <div className="box">
                    {desc}
                </div>
            )
        }

    }

    const showMember = (showOne) => {
        if (showOne === true) {
            return (
                <div className="box">
                    <div className="show" >
                        <div className="id">{member.ID}</div>
                        <div className="identity">{`${member.Surname} ${member.Othernames}`}</div>
                        <input style={{ marginRight: 10 }}
                            type="submit"
                            onClick={() => {
                                setModalShow(true)
                                setOption('View')
                            }}
                            value="View" className="btn3" id="btn3" />
                        <input style={{ marginLeft: 10, marginRight: 10 }}
                            type="submit"
                            name={member.ID}
                            onClick={() => {
                                setModalShow(true)
                                setOption('Tithe')
                            }}
                            value="Tithe" className="btn3" id="btn3" />
                        <input style={{ marginRight: 10 }}
                            type="submit"
                            name={member.ID}
                            onClick={() => {
                                setModalShow(true)
                                setOption('Welfare')
                            }}
                            value="Welfare" className="btn3" id="btn3" />
                    </div>
                </div>
            )
            
        }

    }



    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                <div>
                    <form onSubmit={e => handler(e)} >
                        <div style={{ display: "flex" }}>
                            <input type="search" name="id" className="name" placeholder="Enter ID" value={id} onChange={onChangeId} />&emsp;
                            <input type="submit" value={loading ? 'loading...' : 'Search'}  className="btn2" />
                        </div>
                    </form>
                </div>
                <div>
                    <input type="submit" value={loading1 ? 'loading...' : 'View All Members'} disabled={loading1} onClick={view} id="btn3" className="btn2" />
                </div>
            </div>
            {showMember(showOne)}
            {showAll(ShowAll)}
            <ViewModal
                show={modalShow}
                onHide={close}
                button={option}
                info={members}
                step={key}
                Tithe={tithe}
                AllTithe={AllTithe}
                Welfare={welfare}
                AllWelfare={AllWelfare}
                Member={member}
                check1={showOne}
                check2={ShowAll}
            />
        </div>
    )
}

export default ViewMember;