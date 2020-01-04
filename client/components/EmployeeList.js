import React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Employees } from "../../imports/collections/employees";

const EmployeeList = () => {
  return (
    <div>
      <div className="employee-list">Employee List</div>
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe("employees");
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
