import { useState } from "react";
import { dynamicactive, validate} from "../index";


const FormA = () => {
//   const [showNextCard, setShowNextCard] = useState(false);
  const [showLastCard, setShowLastCard] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const NextForm = (e) => {
    e.preventDefault();
    setShowLastCard(true);
  };

  return (
    <div className="card col-5 p-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-bottom">
          <h3 className="card-title mb-4">User Identification</h3>
          <span onChange={() => dynamicactive(0)}>Previous</span>
        </div>
        <p className="card-text mb-3">
          Kindly fill out the following fields for whom you are vouching for.
        </p>

        <form id="formA">
          <div className="input-field my-3">
            <label>Name</label>
            <input
              id="username"
              className="form-control form-control-md"
              type="text"
              placeholder="Enter a name"
              aria-label="Name"
              name="username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validate(e, "username");
              }}
            />
            <span
              role="alert"
              id="usernameError"
              className="error"
              aria-hidden="true"
            >
              Name cannot be empty
            </span>
          </div>

          <div className="input-field my-3">
            <label>Gender</label>
            <select
              id="usergender"
              className="form-control form-control-md form-select"
              aria-label="gender"
              name="usergender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                validate(e, "usergender");
              }}
            >
              <option selected>Select a gender</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
          </div>

          <div className="input-field my-3">
            <label>Nationality</label>
            <select
              className="selectpicker form-control form-control-md form-select"
              data-dropup-auto="false"
              data-live-search="true"
              id="countrySelect"
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
                validate(e, "countrySelect");
              }}
            ></select>
          </div>

          <div className="input-field my-3">
            <label>Date of Birth</label>
            <input
              id="userdob"
              className="form-control form-control-md"
              type="datetime"
              placeholder="DD/MM/YY"
              aria-label="dob"
              name="userdob"
              value={dateOfBirth}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
                validate(e, "userdob");
              }}
            />
            <span
              role="alert"
              id="userdobError"
              className="error"
              aria-hidden="true"
            >
              DOB cannot be empty
            </span>
          </div>
          <input id="userrelationship" value="" hidden />
        </form>
        <button
          type="submit"
          form="formA"
          className="btn btn-lg btn-dark btn-block col-12 mt-5"
          onClick={NextForm}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormA
