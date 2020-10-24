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
        else if (props.search.department === 'marketing') {
            return (
                <h1>Test</h1>
            )


        }
        else if (props.search.department === 'logistics') {
            return (
                <h1>Test</h1>
            )

        }
        else {
            return (
                <h1>Test</h1>
            )

        }
    }
}
