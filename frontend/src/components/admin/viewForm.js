import React from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import { getRole } from '../../services/auth.service';

import "../../styles/Ss.css"
import swal from 'sweetalert';


export default function Manage(props) {
    let One = {}


    const Switch = (props) => {
        if(props.check1 === true){
            One = props.Data
        }
        if(props.check2 === true){
            One = props.data
        }
    }
    Switch(props)

        return (
            <div>
                <p></p>
                <div class="mregister">
                    <center><h2>Membership Form</h2><hr /></center>
                    <form id="mregister">
                        <div style={{ display: "flex", textAlign: "center" }}>
                            ID:<input type="text" value={One.ID} className="number" placeholder="ID" />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Surname: <input type="text" value={One.Surname} className="name" placeholder="Surname" />&emsp;
                            Other Names: <input type="text" value={One.Othernames} className="long" placeholder="Other names" /><br /><br />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Date of Birth: <input type="date" value={One.DOB} className="number" /> &emsp;
                                <RadioGroup selectedValue={One.Gender} style={{ display: "flex" }}>
                                Gender: &emsp;
                                    Male<Radio value="Male" className="rbutton" /> &emsp;
                                    Female<Radio value="Female" className="rbutton" />
                            </RadioGroup>
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Postal Address: <input type="text" value={One.Postal_address} className="pa" placeholder="Postal Address" /><br /><br />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            House Number: <input type="text" value={One.HouseNumber} className="number" placeholder="House number" />&emsp;&emsp;
                                Residence: <input type="text" value={One.Residence} className="long" placeholder="Residence" /><br /><br />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            HomeTown: <input type="text" value={One.Hometown} className="name" placeholder="Hometown" />&emsp;&emsp;
                                Telephone Number(s):<input type="text" value={One.Telephone1} className="number" placeholder="Telephone number(1)" />&emsp;
                                <input type="text" value={One.Telephone2} className="number" placeholder="Telephone number(2)" /><br /><br />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Profession: <input type="text" value={One.Profession} className="name" placeholder="Profession" />&emsp;&emsp;
                                Previous GEC Congregation: <input type="text" value={One.Previous_Congregation} placeholder="Previous GES" className="name" /><br /><br />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Former Church If Different from GEC: <input type="text" value={One.Former_Church} placeholder="Previous Church" className="long" /><br /><br />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            <RadioGroup selectedValue={One.Baptized} style={{ display: "flex" }}>
                                Are you Baptized?: Yes<Radio value="Yes" className="rbutton" />&emsp;
                                    No<Radio value="No" className="rbutton" />
                            </RadioGroup>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                <RadioGroup selectedValue={One.Communicant} style={{ display: "flex" }}>
                                Are you a Communicant?: Yes<Radio value="Yes" className="rbutton" />&emsp;
                                    No<Radio value="No" className="rbutton" />
                            </RadioGroup>
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Date of Baptism: <input type="date" value={One.Baptism_Date} className="number" />&emsp;
                                Place: <input type="text" value={One.Baptism_Place} className="name" />&emsp;
                                Pastor: <input type="text" value={One.Baptism_Pastor} className="name" />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Confirmation Date: <input type="date" value={One.Confirmation_Date} className="number" />&emsp;
                                Place: <input type="text" value={One.Confirmation_Place} className="name" />&emsp;
                                Pastor: <input type="text" value={One.Confirmation_Pastor} className="name" />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Marital Status: &emsp;
                                <RadioGroup selectedValue={One.Marital_Status} style={{ display: "flex" }}>
                                Married<Radio value="Married" className="rbutton" />&emsp;
                                    Single<Radio value="Single" className="rbutton" />&emsp;
                                    Widowed<Radio value="Widowed" className="rbutton" />&emsp;
                            </RadioGroup>
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Type of Marriage: <input type="text" value={One.Marriage_Type} className="long" />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Name of Spouse: <input type="text" value={One.Spouse_Name} className="name" />&emsp;
                            Name of Spouse's Church: <input type="text" value={One.Spouse_Church} className="name" />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Name of Father: <input type="text" value={One.Father} className="name" />&emsp;
                            Name of Mother: <input type="text" value={One.Mother} className="name" />
                        </div><br />
                        <center><h3>Children Under 18</h3><br /><hr /><br /></center>
                        <h4>First Child</h4>
                        <div style={{ display: "flex" }}>
                            Name: <input type="text" value={One.children[0].name1} className="name" />&emsp;
                            Date Of Birth: <input type="date" value={One.children[0].dob1} className="number" />&emsp;
                            <RadioGroup selectedValue={One.children[0].gender1} style={{ display: "flex" }}>
                                Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" /><br /><br />
                            </RadioGroup>
                        </div><br />
                        <h4>Second Child</h4>
                        <div style={{ display: "flex" }}>
                            Name: <input type="text" value={One.children[1].name2} className="name" />&emsp;
                            Date Of Birth: <input type="date" value={One.children[1].dob2} className="number" />&emsp;
                            <RadioGroup selectedValue={One.children[1].gender2} style={{ display: "flex" }}>
                                Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" />
                            </RadioGroup>
                        </div><br />
                        <h4>Third Child</h4>
                        <div style={{ display: "flex" }}>
                            Name: <input type="text" value={One.children[2].name3} className="name" />&emsp;
                            Date Of Birth: <input type="date" value={One.children[2].dob3} className="number" />&emsp;
                            <RadioGroup selectedValue={One.children[2].gender3} style={{ display: "flex" }}>
                                Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" />
                            </RadioGroup>
                        </div><br />
                        <h4>Fourth Child</h4>
                        <div style={{ display: "flex" }}>
                            Name: <input type="text" value={One.children[3].name4} className="name" />&emsp;
                            Date Of Birth: <input type="date" value={One.children[3].dob4} className="number" />&emsp;
                            <RadioGroup selectedValue={One.children[3].gender4} style={{ display: "flex" }}>
                                Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" />
                            </RadioGroup>
    
                        </div><br />
                        <h4>Fifth Child</h4>
                        <div style={{ display: "flex" }}>
                            Name: <input type="text" value={One.children[4].name5} className="name" />&emsp;
                            Date Of Birth: <input type="date" value={One.children[4].dob5} className="number" />&emsp;
                            <RadioGroup selectedValue={One.children[4].gender5} style={{ display: "flex" }}>
                                Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" />
                            </RadioGroup>
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Ministry Gift or Interest: <input type="text" value={One.Gift} className="long" />
                        </div><br />
                        <div style={{ display: "flex" }}>
                            Next of Kin: <input type="type" value={One.name} className="long" />&emsp;&emsp;
                            Relation: <input type="type" value={One.relation} className="name" />
                        </div><br />
                        <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 400, marginRight: 400 }}>
                            <button class="btn" onClick={(e) => {
                                e.preventDefault()
                                getRole(1, () => {
                                    swal("Authorized")
                                })
                            }
                            }>Update</button>
                            <button class="btn" id="del" onClick={(e) => {
                                e.preventDefault()
                                getRole(2, () => {
                                    swal("Authorized")
                                })
                            }
                            }>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        )    
}