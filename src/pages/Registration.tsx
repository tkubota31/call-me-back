import React, {useState} from "react"
import {FDA} from "../api"

export type User = {
  email: string;
  phoneNumber: string;
  typesPref: string[];
}

export default function Registration(){
    const defaultData: User = {
        email: "",
        phoneNumber: "",
        typesPref: []
    }

    const[formData, setFormData] = useState(defaultData)

    async function register(data: any){
      FDA.register(data)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const selectedPreferences: string[] = [];
      const checkboxes = document.querySelectorAll('input[name="typesPref"]:checked') as NodeListOf<HTMLInputElement>;


      for (const checkbox of checkboxes) {
        selectedPreferences.push(checkbox.value)
      }

      setFormData((formData: User) =>({
          ...formData,
          [e.target.name]: e.target.value,
          typesPref: [...selectedPreferences]
      }));

    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(formData)
        setFormData(defaultData);

      };

    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label>
            <input value={formData.email} name="email" type="text" id="email" onChange={onChange} />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input value={formData.phoneNumber} name= "phoneNumber" type="text" id="phoneNumber" onChange={onChange} />

            <label htmlFor ="typesPref">Food</label>
            <input value="food" name = "typesPref" type ="checkbox" id="food" onChange={onChange}></input>

            <label htmlFor ="typesPref">Drug</label>
            <input value="drug" name= "typesPref" type ="checkbox" id="drug" onChange={onChange}></input>

            <label htmlFor ="typesPref">No Preference</label>
            <input value="no-preference" name= "typesPref" type ="checkbox" id="no-preference" onChange={onChange}></input>

            <button type="submit"> Subscribe! </button>
        </form>
      </div>
    );
  };
