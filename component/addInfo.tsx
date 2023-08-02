import { useState } from "react";
// import FormA from "./forma";
// import FormB from "./FormB";
import { validate } from "../index"
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/adress";

export default function AddContact(){
  const [addContact, setAddContact] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [voucherName, setVoucherName] = useState("");
  const [voucherGender, setVoucherGender] = useState("");
  const [voucherNationality, setVoucherNationality] = useState("");
  const [voucherDateOfBirth, setVoucherDateOfBirth] = useState("");
  const [voucherRelationship, setVoucherRelationship] = useState("");
  const [address, setAddress] = useState("");
  const [Form, setForm] = useState(false);
  const [showNextCard, setShowNextCard] = useState(false);
  const [showLastCard, setShowLastCard] = useState(false);

  const SubmitForm = (e) => {
    e.preventDefault();
    setForm(true);
  };

  function resetForm() {
    setName("");
    setGender("");
    setNationality("");
    setDateOfBirth("");
    setVoucherName("");
    setVoucherGender("");
    setVoucherNationality("");
    setVoucherDateOfBirth("");
    setVoucherRelationship("");
  }

  //  const [showNextCard, setShowNextCard] = useState(false);
  //  {!showNextCard ? (
  //  )}
  function changebg() {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  } // Handle form submission here (if needed)

  const handleSubmit = () => {
    // event.preventDefault();
    // Handle form submission here (if needed)
  };

  const NextForm = (e) => {
    e.preventDefault();
    setShowNextCard(true);
  };

  return (
    <div className="">
      {!addContact ? (
        <button
          className="btn btn-lg btn-dark btn-block col-12 mt-5"
          onClick={() => {
            setAddContact(true);
            changebg();
          }}
        >
          Next
        </button>
      ) : !showNextCard ? (
        <center className="formcontainer" id="dyna">
          <div className="card col-5 p-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-bottom">
                <h3 className="card-title mb-4">User Identification</h3>
                <span onChange={() => setAddContact(true)}>Previous</span>
              </div>
              <p className="card-text mb-3">
                Kindly fill out the following fields for whom you are vouching
                for.
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
        </center>
      ) : (
        <center className="formcontainer" id="dyna">
          <div>
            {!setForm ? (
              <div className="card col-5 p-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-bottom">
                    <h3 className="card-title mb-4">User Identification</h3>
                    <span onChange={() => setAddContact(true)}>Previous</span>
                  </div>
                  <p className="card-text mb-3">
                    Kindly fill out the following fields for whom you are
                    vouching for.
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
                        value={voucherName}
                        onChange={(e) => setVoucherName(e.target.value)}
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
                        value={voucherGender}
                        onChange={(e) => setVoucherGender(e.target.value)}
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
                        value={voucherNationality}
                        onChange={(e) => setVoucherNationality(e.target.value)}
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
                        value={voucherDateOfBirth}
                        onChange={(e) => {
                          setVoucherDateOfBirth(e.target.value);
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

                    <div className="input-field my-3">
                      <label>Relationship with individual</label>
                      <select
                        className="form-control form-control-md form-select"
                        id="relationship"
                        aria-label="relationship"
                        name="relationship"
                        value={voucherRelationship}
                        onChange={(e) => setVoucherRelationship(e.target.value)}
                      >
                        <option selected>Select the relationship type</option>
                        <option value="spouse">Spouse</option>
                        <option value="parent">Parent</option>
                        <option value="child">Child</option>
                        <option value="sibling">Sibling</option>
                        <option value="friend">Friend</option>
                        <option value="colleague">Colleague</option>
                        <option value="relative">Relative</option>
                        <option value="partner">Partner</option>
                      </select>
                    </div>
                  </form>
                  <Web3Button
                    className="btn btn-lg btn-dark btn-block col-12 mt-5"
                    contractAddress={CONTRACT_ADDRESS}
                    action={(contract) =>
                      contract.call("infostore", [name, address])
                    }
                    onSuccess={() => {
                      resetForm();
                      setForm(true);
                    }}
                  >
                    Next
                  </Web3Button>
                </div>
              </div>
            ) : (
              <div className="card col-4 pb-5 px-3">
                <div className="card-body">
                  <div className="col-12 close-button">
                    <span
                      className="submit"
                      onClick={() => setAddContact(false)}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="sa col-2">
                      <div className="sa-success ">
                        <div className="sa-success-tip"></div>
                        <div className="sa-success-long"></div>
                        <div className="sa-success-placeholder"></div>
                        <div className="sa-success-fix"></div>
                      </div>
                    </div>
                  </div>
                  <center>
                    <h4>Form Submitted!</h4>
                    <p>Thank you for vouching an identity</p>
                  </center>
                </div>
              </div>
            )}
          </div>
        </center>
      )}
    </div>
  );
}