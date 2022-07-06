import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@material-ui/core';

export default function Student() {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [students, setStudents] = React.useState([]);
    const paperStyle = { margin: '20px auto', padding: '50px 20px', width: 600 };

    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, address };
        fetch('http://localhost:8080/student/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
            }
            )

    }
    React.useEffect(() => {
        fetch('http://localhost:8080/student/getAll')
            .then(res => res.json())
            .then(data => {
                setStudents(data);
            }
            )});

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },

            }}
            noValidate
            autoComplete="off">

            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: 'GrayText' }}><u>Student Add</u></h1>
                <TextField id="outlined-basic" label="Student Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                <TextField label="Student Adress" variant="filled" fullWidth
                    value={address} onChange={(e) => setAddress(e.target.value)} />
                <Button variant="contained" color="primary" onClick={handleClick}>Add Student</Button>
            </Paper>

           { students.length>0 && <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: 'GrayText' }}><u>Student List</u></h1>
                <ul style={{ listStyleType: 'none' }}>
                    {students.map(student => (
                        <Paper elevation={6} style={{ margin: 10, padding: 15, textAlign: 'left' }} key={student.id}>
                            Id: {student.id} <br />
                            Name:   {student.name} <br />
                            Address: {student.address}
                        </Paper>
                    ))}
                </ul>
            </Paper>}
        </Box>
    );
}
