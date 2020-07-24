import React from 'react';

export default function Form() {
    return(
        <div class="mregister">
            <form method="POST" id="mregister"  action="/api/add_member"> 
                <center><label>ID: </label>
                <input type="text" name="ID" id="number" placeholder="ID"/><br/><br/></center>
                <label>Surname: </label>
                <input type="text" name="Surname" id="name" placeholder="Surname"/>&emsp;
                <label>Other Names: </label>
                <input type="text" name="Othername" id="long" placeholder="Other names"/><br/><br/>
                <label>Date of Birth: </label>
                <input type="date" name="DOB" id="number"/> &emsp;
                <label>Gender: </label>&emsp;
                Male<input type="radio" name="Gender" value="Male"  id="rbutton"/>&emsp;
                Female<input type="radio" name="Gender" value="Female"  id="rbutton"/><br/><br/>
                <label>Postal Address: </label>
                <input type="text" name="Postal_address" id="pa" placeholder="Postal Address"/><br/><br/>
                <label>House Number: </label>
                <input type="text" name="HouseNumber" id="number" placeholder="House number"/>&emsp;&emsp;
                <label>Residence: </label>
                <input type="text" name="Residence" id="long" placeholder="Residence"/><br/><br/>
                <label>HomeTown: </label>
                <input type="text" name="Hometown" id="name" placeholder="Hometown"/>&emsp;&emsp;
                <label>Telephone Number(s):</label>
                <input type="text" name="Telephone1" id="number" placeholder="Telephone number(1)"/>&emsp;
                <input type="text" name="Telephone2" id="number" placeholder="Telephone number(2)"/><br/><br/>
                <label>Profession: </label>
                <input type="text" name="Profession" id="name" placeholder="Profession"/>&emsp;&emsp;
                <label>Previous GEC Congregation: </label>
                <input type="text" name="Previous_Congregation" placeholder="Previous GES" id="name"/><br/><br/>
                <label>Former Church If Different from GEC: </label>
                <input type="text" name="Former_Church" placeholder="Previous Church" id="long"/><br/><br/>
                <label>Are you Baptized?: </label>
                Yes<input type="radio" name="Baptized" value="Yes" id="rbutton" />&emsp;
                No<input type="radio" name="Baptized" value="No" id="rbutton"/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <label>Are you a Communicant?: </label>
                Yes<input type="radio" name="Communicant" value="Yes" id="rbutton"/>&emsp;
                No<input type="radio" name="Communicant" value="No" id="rbutton"/><br/><br/>
                <label>Date of Baptism: </label>
                <input type="date" name="Baptism_Date" id="number"/>&emsp;
                <label>Place: </label>
                <input type="text" name="Baptism_Place" id="name"/>&emsp;
                <label>Pastor: </label>
                <input type="text" name="Baptism_Pastor" id="name"/><br/><br/>
                <label>Confirmation Date: </label>
                <input type="date" name="Confirmation_Date" id="number"/>&emsp;
                <label>Place: </label>
                <input type="text" name="Confirmation_Place" id="name"/>&emsp;
                <label>Pastor: </label>
                <input type="text" name="Confirmation_Pastor" id="name"/><br/><br/>
                <label>Marital Status: &emsp;</label>
                Married<input type="radio" name="Marital_Status" value="Married"  id="rbutton"/>&emsp;
                Single<input type="radio" name="Marital_Status" value="Single" id="rbutton"/>&emsp;
                Widowed<input type="radio" name="Marital_Status" value="Windowed" id="rbutton"/>&emsp;<br/><br/>
                <label>Type of Marriage: </label>
                <input type="text" name="Marriage_Type" id="long"/><br/><br/>
                <label>Name of Spouse: </label>
                <input type="text" name="Spouse_Name" id="name"/>&emsp;
                <label>Name of Spouse's Church: </label>
                <input type="text" name="Spouse_Church" id="name"/><br/><br/>
                <label>Name of Father: </label>
                <input type="text" name="Father" id="name"/>&emsp;
                <label>Name of Mother: </label>
                <input type="text" name="Mother" id="name"/><br/><br/><br/>
                <center><h3>Children Under 18</h3><br/><hr/><br/></center>
                <h4>First Child</h4>
                Name: <input type="text" name="children" id="name"/>&emsp;
                Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                <h4>Second Child</h4>
                Name: <input type="text" name="children" id="name"/>&emsp;
                Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                <h4>Third Child</h4>
                Name: <input type="text" name="children" id="name"/>&emsp;
                Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                <h4>Fourth Child</h4>
                Name: <input type="text" name="children" id="name"/>&emsp;
                Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>&emsp;
                Female<input type="radio" name="children" value="Female"  id="rbutton"/><br/><br/>
                <h4>Fifth Child</h4>
                Name: <input type="text" name="children" id="name"/>&emsp;
                Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                <label>Ministry Gift or Interest: </label>
                <input type="text" name="Gift" id="long"/><br/><br/>
                <label>Next of Kin: </label>
                <input type="type" name="Next_of_Kin.name" id="long"/>&emsp;&emsp;
                <label>Relation:</label> <input type="type" name="Next_of_Kin.relation" id="name"/><br/><br/>
                <center><button id="btn">Submit</button></center>
            </form>
        </div>
    )

    
}

