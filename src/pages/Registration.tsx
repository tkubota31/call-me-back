import React, {useState} from "react"

type User = {
  email: string;
  phone: string;
  preference: string[];
}

type RegistrationProps= {
  register: (user: string) => {};
}

export default function Registration({register}: RegistrationProps){
    const defaultData: User = {
        email: "",
        phone: "",
        preference: []

    }

    const[formData, setFormData] = useState(defaultData)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData((prevState) =>({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const selectedPreferences: string[] = [];
        const checkboxes = document.querySelectorAll('input[name="preference"]:checked');
        console.log(checkboxes)
        // checkboxes.forEach((checkbox) => {
        //     selectedPreferences.push(checkbox);
        // });

        setFormData((prevState: User) => ({
            ...prevState,
            preference: selectedPreferences
        }))

        register(formData)
        setFormData(defaultData);
      };

    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label>
            <input value={formData.email} type="text" id="email" onChange={onChange} />

            <label htmlFor="phone">Phone Number:</label>
            <input value={formData.phone} type="text" id="phone" onChange={onChange} />

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
