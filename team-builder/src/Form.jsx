import React from "react";

function Form(props) {
  const { values, onInputChange, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <h2>Add a Team Member</h2>
        </div>

        <div>
          <h4>General information</h4>
          {/* userName input */}
          <label>
            Username:&nbsp;
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={onInputChange}
              maxLength="20"
            />
          </label>
          {/* email input */}
          <label htmlFor="emailInput">
            Email:&nbsp;
            <input
              id="emailInput"
              type="email"
              name="email"
              value={values.email}
              onChange={onInputChange}
            />
          </label>

          <label>
            Role:&nbsp;
            {/* drop down menu */}
            <select name="role" value={values.role} onChange={onInputChange}>
              <option value="">-- Select a Role --</option>
              <option value="front_end">Front End</option>
              <option value="back_end">Back End</option>
              <option value="Team Lead">TL</option>
            </select>
          </label>
          {/* submit button */}
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
