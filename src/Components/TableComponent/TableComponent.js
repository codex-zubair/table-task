import React from 'react';
import table from '../table.css';

const TableComponent = ({ data }) => {
    console.log(data)
    return (
        <table id="table">
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Email Address</th>
                <th>Joining Date</th>
                <th>Role</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
            </tr>
            0
        </table>
    );
};

export default TableComponent;