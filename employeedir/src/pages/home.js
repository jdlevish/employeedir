import React, { useState } from 'react'
import Employeelist from '../components/employeelist'

export default function Home() {
    const [employees, setEmployees] = useState({
        employees: [
            {
                name: 'john',
                department: 'warehouse',
            },
            {
                name: 'Steve',
                department: 'logistics'
            },
            {
                name: 'wendy',
                department: 'warehouse'
            },
            {
                name: 'sal',
                department: 'sales'
            },
            {
                name: 'alice',
                department: 'marketing'
            },
            {
                name: 'mark',
                department: 'sales'
            },
            {
                name: 'albert',
                department: 'logistics'
            },
            {
                name: 'belinda',
                department: 'warehouse'
            }
        ]
    });
    const [searchState, setSearchState] = useState({ search: 'full' })
    return (
        <div>
            <h1>Employee List</h1>
            <h3>Click A Button Below To Filter Employees By Department</h3>
            <button type='submit' onClick={() => {
                setSearchState({
                    search: 'full',
                    department: 'all'

                })
            }}>Full List</button>
            <button type='submit' onClick={() => {
                setSearchState({
                    search: 'department',
                    department: 'warehouse'
                })
            }}>Warehouse</button>
            <button type='submit' onClick={() => {
                setSearchState({
                    search: 'department',
                    department: 'sales'
                })
            }}>Sales</button>
            <button type='submit' onClick={() => {
                setSearchState({
                    search: 'department',
                    department: 'marketing'
                })
            }}>Marketing</button>
            <button type='submit' onClick={() => {
                setSearchState({
                    search: 'department',
                    department: 'logistics'
                })
            }}>Logistics</button>
            <button type='submit' onClick={() => {
                setSearchState({
                    search: 'department',
                    department: 'alphabetic'
                })
            }}>sort a-z</button>



            <Employeelist employees={employees} search={searchState} />

        </div>
    )
}

