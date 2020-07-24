import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { RadioGroup, Radio } from 'react-radio-group';

import '../../styles/Ss.css';


export default function AddMember() {
    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState('');
    const [gender1, setGender1] = useState('');
    const [gender2, setGender2] = useState('');
    const [gender3, setGender3] = useState('');
    const [gender4, setGender4] = useState('');
    const [gender5, setGender5] = useState('');
    const [Baptized, setBaptized] = useState('');
    const [Communicant, setCommunicant] = useState('');
    const [Marital_Status, setMarital_Status] = useState('');

    const handleChange = (val) => {
        setGender(val)
    }
    const handleChange1 = (val) => {
        setGender1(val)
    }
    const handleChange2 = (val) => {
        setGender2(val)
    }
    const handleChange3 = (val) => {
        setGender3(val)
    }
    const handleChange4 = (val) => {
        setGender4(val)
    }
    const handleChange5 = (val) => {
        setGender5(val)
    }
    const handleBaptized = (val) => {
        setBaptized(val)
    }
    const handleComm = (val) => {
        setCommunicant(val)
    }
    const handleMarital = (val) => {
        setMarital_Status(val)
    }


    const handler = (e) => {

        let name1 = document.getElementById("name1").value
        let dob1 = document.getElementById("dob1").value
        let name2 = document.getElementById("name2").value
        let dob2 = document.getElementById("dob2").value
        let name3 = document.getElementById("name3").value
        let dob3 = document.getElementById("dob3").value
        let name4 = document.getElementById("name4").value
        let dob4 = document.getElementById("dob4").value
        let name5 = document.getElementById("name5").value
        let dob5 = document.getElementById("dob5").value
        let name = document.getElementById("name").value
        let relation = document.getElementById("relation").value


        let request = {
            ID: document.getElementById("ID").value,
            Surname: document.getElementById("Surname").value,
            Othernames: document.getElementById("Othernames").value,
            DOB: document.getElementById("DOB").value,
            Gender: gender,
            Postal_address: document.getElementById("Postal_address").value,
            HouseNumber: document.getElementById("HouseNumber").value,
            Residence: document.getElementById("Residence").value,
            Hometown: document.getElementById("Hometown").value,
            Telephone1: document.getElementById("Telephone1").value,
            Telephone2: document.getElementById("Telephone2").value,
            Profession: document.getElementById("Profession").value,
            Previous_Congregation: document.getElementById("Previous_Congregation").value,
            Former_Church: document.getElementById("Former_Church").value,
            Baptized: Baptized,
            Communicant: Communicant,
            Baptism_Date: document.getElementById("Baptism_Date").value,
            Baptism_Place: document.getElementById("Baptism_Place").value,
            Baptism_Pastor: document.getElementById("Baptism_Pastor").value,
            Confirmation_Date: document.getElementById("Confirmation_Date").value,
            Confirmation_Place: document.getElementById("Confirmation_Place").value,
            Confirmation_Pastor: document.getElementById("Confirmation_Pastor").value,
            Marital_Status: Marital_Status,
            Marriage_Type: document.getElementById("Marriage_Type").value,
            Spouse_Name: document.getElementById("Spouse_Name").value,
            Spouse_Church: document.getElementById("Spouse_Church").value,
            Father: document.getElementById("Father").value,
            Mother: document.getElementById("Mother").value,
            children: [
                { name: name1, dob: dob1, gender: gender1 },
                { name: name2, dob: dob2, gender: gender2 },
                { name: name3, dob: dob3, gender: gender3 },
                { name: name4, dob: dob4, gender: gender4 },
                { name: name5, dob: dob5, gender: gender5 }
            ],
            Gift: document.getElementById("Gift").value,
            Next_Of_Kin: [
                { name, relation }
            ]
        }

        e.preventDefault()
        setLoading(true);

        axios.post("http://localhost:5000/api/add_member", request)
            .then(response => {
                setLoading(true);
                swal(`Member Added!! ID: ${response.data.message}`)
            }).catch(err => {
                setLoading(false)
                if (err.response.status === 400) {
                    swal('Failed!! Check Fields and Try Again');
                }
                else {
                    swal(err.response.data.message);
                }
            });
    }



    return (
        <div>
            <p></p>
            <div className="mregister">
                <center><h2>Membership Form</h2><hr /></center>
                <form onSubmit={e => handler(e)} id="mregister">
                    <div style={{ display: "flex", textAlign: "center" }}>
                        <center></center>ID:<input type="text" id="ID" className="number" placeholder="ID" />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Surname: <input type="text" id="Surname" className="name" placeholder="Surname" />&emsp;
                            Other Names: <input type="text" id="Othernames" className="long" placeholder="Other names" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Date of Birth: <input type="date" id="DOB" className="number" /> &emsp;
                            <RadioGroup selectedValue={gender} onChange={handleChange} style={{ display: "flex" }}>
                            Gender: &emsp;
                                Male<Radio  value="Male" className="rbutton" /> &emsp;
                                Female<Radio  value="Female" className="rbutton" />
                        </RadioGroup>
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Postal Address: <input type="text" id="Postal_address" className="pa" placeholder="Postal Address" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        House Number: <input type="text" id="HouseNumber" className="number" placeholder="House number" />&emsp;&emsp;
                            Residence: <input type="text" id="Residence" className="long" placeholder="Residence" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        HomeTown: <input type="text" id="Hometown" className="name" placeholder="Hometown" />&emsp;&emsp;
                            Telephone Number(s):<input type="text" id="Telephone1" className="number" placeholder="Telephone number(1)" />&emsp;
                            <input type="text" id="Telephone2" className="number" placeholder="Telephone number(2)" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Profession: <input type="text" id="Profession" className="name" placeholder="Profession" />&emsp;&emsp;
                            Previous GEC Congregation: <input type="text" id="Previous_Congregation" placeholder="Previous GES" className="name" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Former Church If Different from GEC: <input type="text" id="Former_Church" placeholder="Previous Church" className="long" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        <RadioGroup selectedValue={Baptized} onChange={handleBaptized} style={{ display: "flex" }}>
                            Are you Baptized?: Yes<Radio value="Yes" className="rbutton" />&emsp;
                                No<Radio value="No" className="rbutton" />
                        </RadioGroup>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <RadioGroup selectedValue={Communicant} onChange={handleComm} style={{ display: "flex" }}>
                            Are you a Communicant?: Yes<Radio  value="Yes" className="rbutton" />&emsp;
                                No<Radio  value="No" className="rbutton" /><br /><br />
                        </RadioGroup>
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Date of Baptism: <input type="date" id="Baptism_Date" className="number" />&emsp;
                            Place: <input type="text" id="Baptism_Place" className="name" />&emsp;
                            Pastor: <input type="text" id="Baptism_Pastor" className="name" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Confirmation Date: <input type="date" id="Confirmation_Date" className="number" />&emsp;
                            Place: <input type="text" id="Confirmation_Place" className="name" />&emsp;
                            Pastor: <input type="text" id="Confirmation_Pastor" className="name" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Marital Status: &emsp;
                            <RadioGroup selectedValue={Marital_Status} onChange={handleMarital} style={{ display: "flex" }}>
                            Married<Radio  value="Married" className="rbutton" />&emsp;
                                Single<Radio  value="Single" className="rbutton" />&emsp;
                                Widowed<Radio  value="Widowed" className="rbutton" />&emsp;<br /><br />
                        </RadioGroup>
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Type of Marriage: <input type="text" id="Marriage_Type" className="long" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Name of Spouse: <input type="text" id="Spouse_Name" className="name" />&emsp;
                            Name of Spouse's Church: <input type="text" id="Spouse_Church" className="name" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Name of Father: <input type="text" id="Father" className="name" />&emsp;
                            Name of Mother: <input type="text" id="Mother" className="name" /><br /><br /><br />
                    </div><br />
                    <center><h3>Children Under 18</h3><br /><hr /><br /></center>
                    <h4>First Child</h4>
                    <div style={{ display: "flex" }}>
                        Name: <input type="text" id="name1" className="name" />&emsp;
                            Date Of Birth: <input type="date" id="dob1" className="number" />&emsp;
                            <RadioGroup selectedValue={gender1} onChange={handleChange1} style={{ display: "flex" }}>
                            Gender:&emsp;Male<Radio  value="Male" className="rbutton" />&emsp;
                                Female<Radio  value="Female" className="rbutton" /><br /><br />
                        </RadioGroup>
                    </div><br />
                    <h4>Second Child</h4>
                    <div style={{ display: "flex" }}>
                        Name: <input type="text" id="name2" className="name" />&emsp;
                            Date Of Birth: <input type="date" id="dob2" className="number" />&emsp;
                            <RadioGroup selectedValue={gender2} onChange={handleChange2} style={{ display: "flex" }}>
                            Gender:&emsp;Male<Radio  value="Male" className="rbutton" />&emsp;
                                Female<Radio  value="Female" className="rbutton" />
                        </RadioGroup>
                    </div><br />
                    <h4>Third Child</h4>
                    <div style={{ display: "flex" }}>
                        Name: <input type="text" id="name3" className="name" />&emsp;
                            Date Of Birth: <input type="date" id="dob3" className="number" />&emsp;
                            <RadioGroup selectedValue={gender3} onChange={handleChange3} style={{ display: "flex" }}>
                            Gender:&emsp;Male<Radio  value="Male" className="rbutton" />&emsp;
                                Female<Radio  value="Female" className="rbutton" /><br /><br />
                        </RadioGroup>
                    </div><br />
                    <h4>Fourth Child</h4>
                    <div style={{ display: "flex" }}>
                        Name: <input type="text" id="name4" className="name" />&emsp;
                            Date Of Birth: <input type="date" id="dob4" className="number" />&emsp;
                            <RadioGroup selectedValue={gender4} onChange={handleChange4} style={{ display: "flex" }}>
                            Gender:&emsp;Male<Radio  value="Male" className="rbutton" />&emsp;
                                Female<Radio  value="Female" className="rbutton" /><br /><br />
                        </RadioGroup>

                    </div><br />
                    <h4>Fifth Child</h4>
                    <div style={{ display: "flex" }}>
                        Name: <input type="text" id="name5" className="name" />&emsp;
                            Date Of Birth: <input type="date" id="dob5" className="number" />&emsp;
                            <RadioGroup selectedValue={gender5} onChange={handleChange5} style={{ display: "flex" }}>
                            Gender:&emsp;Male<Radio  value="Male" className="rbutton" />&emsp;
                                Female<Radio  value="Female" className="rbutton" /><br /><br />
                        </RadioGroup>
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Ministry Gift or Interest: <input type="text" id="Gift" className="long" /><br /><br />
                    </div><br />
                    <div style={{ display: "flex" }}>
                        Next of Kin: <input type="type" id="name" className="long" />&emsp;&emsp;
                            Relation: <input type="type" id="relation" className="name" /><br /><br />
                    </div><br />
                    <center><input type="submit" className="btn" value={loading ? 'loading...' : 'Submit'} disabled={loading} /></center>
                </form>
            </div>
        </div>
    )
}