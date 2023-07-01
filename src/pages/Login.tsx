import React, {useState} from "react"

export default function Login(){
    const defaultData = {
        email: "",
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
        // If login is successful direct to different page
        //if login not successful direct to registeration page or something?
      };

    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label>
            <input value={formData.email} type="text" id="email" onChange={onChange} />

            <button type="submit"> Sign In </button>
        </form>
      </div>
    );
  };
