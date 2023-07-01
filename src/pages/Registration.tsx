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
      const checkboxes = document.querySelectorAll('input[name="preference"]:checked') as NodeListOf<HTMLInputElement>;
      console.log(checkboxes)

      for (const checkbox of checkboxes) {
        selectedPreferences.push(checkbox.value)

      }

        setFormData((formData: User) =>({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const selectedPreferences: string[] = [];
        // const checkboxes = document.querySelectorAll('input[name="preference"]:checked') as NodeListOf<HTMLInputElement>;
        // console.log(checkboxes)

        // for (const checkbox of checkboxes) {
        //   selectedPreferences.push(checkbox.value)

        // }

        // setFormData((formData: User) => ({
        //     ...formData,
        //     preference: [...selectedPreferences]
        // }))

        // console.log(formData)

        register(formData)
        setFormData(defaultData);
      };

    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label>
            <input value={formData.email} name="email" type="text" id="email" onChange={onChange} />

            <label htmlFor="phone">Phone Number:</label>
            <input value={formData.phoneNumber} name= "phone" type="text" id="phone" onChange={onChange} />

            <label htmlFor ="preference">Food</label>
            <input value="food" name = "preference" type ="checkbox" id="food" onChange={onChange}></input>

            <label htmlFor ="preference">Drug</label>
            <input value="drug" name= "preference" type ="checkbox" id="drug" onChange={onChange}></input>

            <label htmlFor ="preference">No Preference</label>
            <input value="no-preference" name= "preference" type ="checkbox" id="no-preference" onChange={onChange}></input>

            <button type="submit"> Subscribe! </button>
        </form>
      </div>
    );
  };
