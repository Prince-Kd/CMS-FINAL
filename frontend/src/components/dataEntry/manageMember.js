import React, { useState } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

import "../../styles/Ss.css"

import swal from 'sweetalert';
import axios from 'axios';


export default function Manage() {
  const [id, setId] = useState()
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    ID: '',
    Surname: '',
    Othernames: '',
    DOB: '',
    Gender: '',
    Postal_address: '',
    HouseNumber: '',
    Residence: '',
    Hometown: '',
    Telephone1: '',
    Telephone2: '',
    Profession: '',
    Previous_Congregation: '',
    Former_Church: '',
    Baptized: '',
    Communicant: '',
    Baptism_Date: '',
    Baptism_Place: '',
    Baptism_Pastor: '',
    Confirmation_Date: '',
    Confirmation_Place: '',
    Confirmation_Pastor: '',
    Marital_Status: '',
    Marriage_Type: '',
    Spouse_Name: '',
    Spouse_Church: '',
    Father: '',
    Mother: '',
    Gift: ''
  })
  const [first, setFirst] = useState({
    name: '', gender: '', dob: ''
  })
  const [Second, setSecond] = useState({
    name: '', gender: '', dob: ''
  })
  const [Third, setThird] = useState({
    name: '', gender: '', dob: ''
  })
  const [Fourth, setFourth] = useState({
    name: '', gender: '', dob: ''
  })
  const [Fifth, setFifth] = useState({
    name: '', gender: '', dob: ''
  })
  const [kin, setKin] = useState({
    name: '', relation: ''
  })

  const [visible, setVisible] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setInfo(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }
  const onChangeKin = (e) => {
    const { name, value } = e.target
    setKin(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const onChangeId = (e) => {
    const id = e.target.value;
    setId(id);
  };

  const handleChange = (val) => {
    setInfo(
      (prev) => ({
        ...prev,
        Gender: val
      })
    )
  }
  const onChange1 = (e) => {
    const { name, value } = e.target
    setFirst(
      (prev) => ({
        ...prev,
        [name]: value

      })
    )
  }
  const onChange2 = (e) => {
    const { name, value } = e.target
    setSecond(
      (prev) => ({
        ...prev,
        [name]: value

      })
    )
  }
  const onChange3 = (e) => {
    const { name, value } = e.target
    setThird(
      (prev) => ({
        ...prev,
        [name]: value

      })
    )
  }
  const onChange4 = (e) => {
    const { name, value } = e.target
    setFourth(
      (prev) => ({
        ...prev,
        [name]: value

      })
    )
  }
  const onChange5 = (e) => {
    const { name, value } = e.target
    setFifth(
      (prev) => ({
        ...prev,
        [name]: value

      })
    )
  }
  const handleChange1 = (val) => {
    setFirst(
      (prev) => ({
        ...prev,
        gender: val

      })
    )
  }
  const handleChange2 = (val) => {
    setSecond(
      (prev) => ({
        ...prev,
        gender: val
      })
    )
  }
  const handleChange3 = (val) => {
    setThird(
      (prev) => ({
        ...prev,
        gender: val
      })
    )
  }
  const handleChange4 = (val) => {
    setFourth(
      (prev) => ({
        ...prev,
        gender: val
      })
    )
  }
  const handleChange5 = (val) => {
    setFifth(
      (prev) => ({
        ...prev,
        gender: val
      })
    )
  }
  const handleBaptized = (val) => {
    setInfo((prev) => ({
      ...prev,
      Baptized: val
    })
    )
  }
  const handleComm = (val) => {
    setInfo((prev) => ({
      ...prev,
      Communicant: val
    })
    )
  }
  const handleMarital = (val) => {
    setInfo((prev) => ({
      ...prev,
      Marital_Status: val
    })
    )
  }


  const handler = (e) => {
    e.preventDefault()
    setLoading(true);

    let request = {
      ID: id
    }
    axios.post("http://localhost:5000/api/search_member", request)
      .then(response => {
        setLoading(true);
        let data = response.data.message;
        setInfo(data);
        console.log(info)
        setVisible(true)
        setLoading(false)
      }).catch(error => {
        setLoading(false)
        swal(error.response.data.message);
      });
  }

  const Update = (e) => {
    e.preventDefault()

    let request = {
      ID: info.ID,
      Surname: info.Surname,
      Othernames: info.Othernames,
      DOB: info.DOB,
      Gender: info.Gender,
      Postal_address: info.Postal_address,
      HouseNumber: info.HouseNumber,
      Residence: info.Residence,
      Hometown: info.Hometown,
      Telephone1: info.Telephone1,
      Telephone2: info.Telephone2,
      Profession: info.Profession,
      Previous_Congregation: info.Previous_Congregation,
      Former_Church: info.Former_Church,
      Baptized: info.Baptized,
      Communicant: info.Communicant,
      Baptism_Date: info.Baptism_Date,
      Baptism_Place: info.Baptism_Place,
      Baptism_Pastor: info.Baptism_Pastor,
      Confirmation_Date: info.Confirmation_Date,
      Confirmation_Place: info.Confirmation_Place,
      Confirmation_Pastor: info.Confirmation_Pastor,
      Marital_Status: info.Marital_Status,
      Marriage_Type: info.Marriage_Type,
      Spouse_Name: info.Spouse_Name,
      Spouse_Church: info.Spouse_Church,
      Father: info.Father,
      Mother: info.Mother,
      children: [
          { name: first.name, dob: first.dob, gender: first.gender },
          { name: Second.name, dob: Second.dob, gender: Second.gender },
          { name: Third.name, dob: Third.dob, gender: Third.gender },
          { name: Fourth.name, dob: Fourth.dob, gender: Fourth.gender },
          { name: Fifth.name, dob: Fifth.dob, gender: Fifth.gender }
        ],
      Gift: info.Gift,
      Next_Of_Kin: [
          {
            name: kin.name,
            relation: kin.relation
          }
        ]
    }
    let user = JSON.parse(sessionStorage.getItem('userData'))

    if (user.role === 2) {
      axios.post("http://localhost:5000/api/update_member", request)
        .then(response => {
          swal(response.data.message)
        })
        .catch(err => {
          if (err.response.status === 400) {
            swal(err.response.data.message);
          }
          else {
            swal(err.response.data.message);
          }
        })
    } else {
      swal("Not Authorized")
    }
  }

  const Delete = (e) => {
    e.preventDefault()
    let user = JSON.parse(sessionStorage.getItem('userData'))
    if (user.role === 2) {
      axios.delete("http://localhost:5000/api/delete_member", { ID: info.ID })
        .then(response => {
          swal(response.data.message)
        })
        .catch(err => {
          if (err.response.status === 400) {
            swal(err.response.data.message);
          }
          else {
            swal(err.response.data.message);
          }
        })
    } else {
      swal("Not Authorized")
    }
  }

  const Visible = (visible) => {
    if (visible === true) {
      return (
        <div>
          <p></p>
          <div className="mregister">
            <center><h2>Membership Form</h2><hr /></center>
            <form onSubmit={e => handler(e)} id="mregister">
              <div style={{ display: "flex", textAlign: "center" }}>
                ID:<input type="text" value={info.ID} name='ID' className="number" placeholder="ID" />
              </div><br />
              <div style={{ display: "flex" }}>
                Surname: <input type="text" onChange={onChange} value={info.Surname} name='Surname' className="name" placeholder="Surname" />&emsp;
                            Other Names: <input type="text" onChange={onChange} value={info.Othernames} name='Othernames' className="long" placeholder="Other names" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Date of Birth: <input type="date" onChange={onChange} value={info.DOB} name="DOB" className="number" /> &emsp;
                            <RadioGroup onChange={handleChange} name="Gender" selectedValue={info.Gender} style={{ display: "flex" }}>
                  Gender: &emsp;
                                Male<Radio value="Male" className="rbutton" /> &emsp;
                                Female<Radio value="Female" className="rbutton" />
                </RadioGroup>
              </div><br />
              <div style={{ display: "flex" }}>
                Postal Address: <input type="text" onChange={onChange} value={info.Postal_address} name='Postal_address' className="pa" placeholder="Postal Address" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                House Number: <input type="text" onChange={onChange} value={info.HouseNumber} name='HouseNumber' className="number" placeholder="House number" />&emsp;&emsp;
                            Residence: <input type="text" onChange={onChange} value={info.Residence} name='Residence' className="long" placeholder="Residence" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                HomeTown: <input type="text" onChange={onChange} value={info.Hometown} name='Hometown' className="name" placeholder="Hometown" />&emsp;&emsp;
                            Telephone Number(s):<input type="text" onChange={onChange} value={info.Telephone1} name='Telephone1' className="number" placeholder="Telephone number(1)" />&emsp;
                            <input type="text" onChange={onChange} value={info.Telephone2} name='Telephone2' className="number" placeholder="Telephone number(2)" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Profession: <input type="text" onChange={onChange} value={info.Profession} name='Profession' className="name" placeholder="Profession" />&emsp;&emsp;
                            Previous GEC Congregation: <input type="text" onChange={onChange} value={info.Previous_Congregation} name='Previous_Congregation' placeholder="Previous GES" className="name" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Former Church If Different from GEC: <input type="text" onChange={onChange} value={info.Former_Church} name='Former_Church' placeholder="Previous Church" className="long" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                <RadioGroup onChange={handleBaptized} name="Baptized" selectedValue={info.Baptized} style={{ display: "flex" }}>
                  Are you Baptized?: Yes<Radio value="Yes" className="rbutton" />&emsp;
                                No<Radio value="No" className="rbutton" />
                </RadioGroup>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <RadioGroup onChange={handleComm} name='Communicant' selectedValue={info.Communicant} style={{ display: "flex" }}>
                  Are you a Communicant?: Yes<Radio value="Yes" className="rbutton" />&emsp;
                                No<Radio value="No" className="rbutton" /><br /><br />
                </RadioGroup>
              </div><br />
              <div style={{ display: "flex" }}>
                Date of Baptism: <input type="date" onChange={onChange} value={info.Baptism_Date} name='Baptism_Date' className="number" />&emsp;
                            Place: <input type="text" onChange={onChange} value={info.Baptism_Place} name='Baptism_Place' className="name" />&emsp;
                            Pastor: <input type="text" onChange={onChange} value={info.Baptism_Pastor} name='Baptism_Pastor' className="name" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Confirmation Date: <input type="date" onChange={onChange} value={info.Confirmation_Date} name='Confirmation_Date' className="number" />&emsp;
                            Place: <input type="text" onChange={onChange} value={info.Confirmation_Place} name='Confirmation_Place' className="name" />&emsp;
                            Pastor: <input type="text" onChange={onChange} value={info.Confirmation_Pastor} name='Confirmation_Pastor' className="name" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Marital Status: &emsp;
                            <RadioGroup onChange={handleMarital} name="Marital_Status" selectedValue={info.Marital_Status} style={{ display: "flex" }}>
                  Married<Radio value="Married" className="rbutton" />&emsp;
                                Single<Radio value="Single" className="rbutton" />&emsp;
                                Widowed<Radio value="Widowed" className="rbutton" />&emsp;<br /><br />
                </RadioGroup>
              </div><br />
              <div style={{ display: "flex" }}>
                Type of Marriage: <input type="text" onChange={onChange} value={info.Marriage_Type} name='Marriage_Type' className="long" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Name of Spouse: <input type="text" onChange={onChange} value={info.Spouse_Name} name='Spouse_Name' className="name" />&emsp;
                            Name of Spouse's Church: <input type="text" onChange={onChange} value={info.Spouse_Church} name='Spouse_Church' className="name" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Name of Father: <input type="text" onChange={onChange} value={info.Father} name='Father' className="name" />&emsp;
                            Name of Mother: <input type="text" onChange={onChange} value={info.Mother} name='Mother' className="name" /><br /><br /><br />
              </div><br />
              <center><h3>Children Under 18</h3><br /><hr /><br /></center>
              <h4>First Child</h4>
              <div style={{ display: "flex" }}>
                Name: <input type="text" onChange={onChange1} value={first.name} name='name' className="name" />&emsp;
                            Date Of Birth: <input type="date" value={first.dob} name='dob' onChange={onChange1} className="number" />&emsp;
                            <RadioGroup selectedValue={first.gender} name='gender' onChange={handleChange1} style={{ display: "flex" }}>
                  Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" /><br /><br />
                </RadioGroup>
              </div><br />
              <h4>Second Child</h4>
              <div style={{ display: "flex" }}>
                Name: <input type="text" name='name' value={Second.name} onChange={onChange2} className="name" />&emsp;
                            Date Of Birth: <input type="date" name='dob' value={Second.dob} onChange={onChange2} className="number" />&emsp;
                            <RadioGroup selectedValue={Second.gender} name='gender' onChange={handleChange2} style={{ display: "flex" }}>
                  Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" />
                </RadioGroup>
              </div><br />
              <h4>Third Child</h4>
              <div style={{ display: "flex" }}>
                Name: <input type="text" name='name' value={Third.name} onChange={onChange3} className="name" />&emsp;
                            Date Of Birth: <input type="date" name='dob' value={Third.dob} onChange={onChange3} className="number" />&emsp;
                            <RadioGroup selectedValue={Third.gender} name='gender' onChange={handleChange3} style={{ display: "flex" }}>
                  Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" /><br /><br />
                </RadioGroup>
              </div><br />
              <h4>Fourth Child</h4>
              <div style={{ display: "flex" }}>
                Name: <input type="text" name='name' value={Fourth.name} onChange={onChange4} className="name" />&emsp;
                            Date Of Birth: <input type="date" name='dob' value={Fourth.dob} onChange={onChange4} className="number" />&emsp;
                            <RadioGroup selectedValue={Fourth.gender} name='gender' onChange={handleChange4} style={{ display: "flex" }}>
                  Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" /><br /><br />
                </RadioGroup>

              </div><br />
              <h4>Fifth Child</h4>
              <div style={{ display: "flex" }}>
                Name: <input type="text" name='name' value={Fifth.name} onChange={onChange5} className="name" />&emsp;
                            Date Of Birth: <input type="date" name='dob' value={Fifth.dob} onChange={onChange5} className="number" />&emsp;
                            <RadioGroup selectedValue={Fifth.gender} name='gender' onChange={handleChange5} style={{ display: "flex" }}>
                  Gender:&emsp;Male<Radio value="Male" className="rbutton" />&emsp;
                                Female<Radio value="Female" className="rbutton" /><br /><br />
                </RadioGroup>
              </div><br />
              <div style={{ display: "flex" }}>
                Ministry Gift or Interest: <input type="text" name='Gift' onChange={onChange} value={info.Gift} className="long" /><br /><br />
              </div><br />
              <div style={{ display: "flex" }}>
                Next of Kin: <input type="type" name='name' onChange={onChangeKin} value={kin.name} className="long" />&emsp;&emsp;
                            Relation: <input type="type" name='relation' onChange={onChangeKin} value={kin.relation} className="name" /><br /><br />
              </div><br />
              <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 400, marginRight: 400 }}>
                <input type="submit" class="btn" value="Update" onClick={Update} />
                <input type="submit" class="btn" id="del" value="Delete" onClick={Delete} />
              </div>
            </form>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={e => handler(e)}>
          <div style={{ display: "flex", marginTop: 10, marginBottom: 10, justifyContent: "center" }}>
            <input
              type="search"
              name="id"
              className="name"
              placeholder="Enter ID"
              value={id}
              onChange={onChangeId}
            />&emsp;
              <input type="submit" value={loading ? 'loading...' : 'Search'} class="btn" />
          </div>
        </form>
        {Visible(visible)}
      </div>
    </div>
  )
}