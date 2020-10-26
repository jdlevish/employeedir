import React from 'react'

export default function Employeelist(props) {
    console.log(props)
    // built logic using if else should probably use switch and return component
    // need to look up filter to return list based on chosen department
    // next must add a sort option , possibly by name (alphabetically)
    if (props.search.search === 'full') {
        return (
            <div>
                <ul>
                    {props.employees.employees.map(result => (
                        <li>
                            <h3>Employee Name: {result.name}</h3>
                            <h3>Employee Department: {result.department}</h3>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
    else if (props.search.search === 'department') {
        if (props.search.department === 'sales') {
            return (
                <div>
                    <ul>
                        {props.employees.employees.filter(employee => employee.department === 'sales').map(filteredEmployees => (
                            <li>
                                <h3>Employee Name: {filteredEmployees.name}</h3>
                                <h3>Employee Department: {filteredEmployees.department}</h3>
                            </li>
                        ))}
                    </ul>

                </div>
            )

        }
        else if (props.search.department === 'marketing') {
            return (
                <div>
                    <ul>
                        {props.employees.employees.filter(employee => employee.department === 'marketing').map(filteredEmployees => (
                            <li>
                                <h3>Employee Name: {filteredEmployees.name}</h3>
                                <h3>Employee Department: {filteredEmployees.department}</h3>
                            </li>
                        ))}
                    </ul>

                </div>
            )


        }
        else if (props.search.department === 'logistics') {
            return (
                <div>
                    <ul>
                        {props.employees.employees.filter(employee => employee.department === 'logistics').map(filteredEmployees => (
                            <li>
                                <h3>Employee Name: {filteredEmployees.name}</h3>
                                <h3>Employee Department: {filteredEmployees.department}</h3>
                            </li>
                        ))}
                    </ul>

                </div>
            )

        }
        else if (props.search.department === 'warehouse') {
            return (
                <div>
                    <ul>
                        {props.employees.employees.filter(employee => employee.department === 'warehouse').map(filteredEmployees => (
                            <li>
                                <h3>Employee Name: {filteredEmployees.name}</h3>
                                <h3>Employee Department: {filteredEmployees.department}</h3>
                            </li>
                        ))}
                    </ul>

                </div>
            )

        }
        else if (props.search.department === 'alphabetic') {
            var newArr = props.employees.employees
            return (
                <div>
                    <ul>
                        {newArr.sort(function (a, b) {
                            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                            return 0;
                        }).map(result => (
                            <li>
                                <h3>Employee Name: {result.name}</h3>
                                <h3>Employee Department: {result.department}</h3>
                            </li>
                        ))}

                    </ul>

                </div>

            )
        }
    }
}
