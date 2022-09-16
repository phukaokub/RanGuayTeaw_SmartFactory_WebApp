import "./HomeStyles.css";
import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Grid, TextField, Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function About(){
    const [order,setOrder] = useState([]);
    const handleGet = event =>{
        event.preventDefault();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("/user", requestOptions)
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log(result)
                setOrder(result)
            })
            .catch(error => console.log('error', error));
        }
    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "user": user,
        "purple": purple,
        "green": green,
        "red": red,
        "blue": blue,
        "yellow": yellow,
        "status": "waiting"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("/user",requestOptions)
        .then(response => response.json())
        .then(result =>{
            alert(result['lastInsertRowid'])
            if (result['changes'] === 1){
                window.location.href='/about'
            }
        })
        .catch(error => console.log('error', error));
    }
    const [user,setUser] = useState('');
    const [green,setGreen] = useState('');
    const [blue,setBlue] = useState('');
    const [yellow,setYellow] = useState('');
    const [red,setRed] = useState('');
    const [purple,setPurple] = useState('');
    return(  
        <div className="z-0">
            <h1 class='sectionitems'>Section 1 : noodlesorting </h1>
            <img src={process.env.PUBLIC_URL+"images/factory.png"} alt="Factory" class="responsive factoryimg"></img>
            <React.Fragment>
                <CssBaseline />
                <Container sx={{pt:21}}>
                <span className="box boxfont text-center">
                    <p1 className="text-xs xs:text-xl">Add-Order</p1>
                    </span>
                </Container>
                <Container sx={{pt:7}}>
                    <form onSubmit={handleSubmit}>
                        <Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="user" label="User Name" variant="outlined" 
                                fullWidth required
                                onChange={(e) => setUser(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing ={2} sx={{pt:2}}>
                            <Grid item xs={12} sm={6}>
                                <TextField id="green" label="หมี่หยก" variant="outlined" 
                                fullWidth required
                                onChange={(e) => setGreen(Number(e.target.value))}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                    <TextField id="blue" label="เส้นเล็ก" variant="outlined" 
                                    fullWidth required
                                    onChange={(e) => setBlue(Number(e.target.value))}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing ={2} sx={{pt:2}}>
                            <Grid item xs={12} sm={6}>
                                    <TextField id="yellow" label="บะหมี่" variant="outlined" 
                                    fullWidth required
                                    onChange={(e) => setYellow(Number(e.target.value))}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                    <TextField id="red" label= "วุ้นเส้น" variant="outlined" 
                                    fullWidth required
                                    onChange={(e) => setRed(Number(e.target.value))}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing ={2} sx={{pt:2}}>
                            <Grid item xs={12} sm={6}>
                                    <TextField id="purple" label="ก๋วยจั้บ" variant="outlined" 
                                    fullWidth required
                                    onChange={(e) => setPurple(Number(e.target.value))}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button type="submit" label="submit" variant='contained' fullWidth required>Apply</Button>
                            </Grid>
                        </Grid>
                    </form>
                    <form onSubmit={handleGet}>
                        <Grid container sx={{pt:2}}>
                            <Button type="submit" label="submit" variant='contained' fullWidth required> Get </Button>
                        </Grid>
                    </form>
                    <Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="Order Table">
                            <TableHead>
                            <TableRow>
                                <TableCell>User</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">purple</TableCell>
                                <TableCell align="right">green</TableCell>
                                <TableCell align="right">red</TableCell>
                                <TableCell align="right">blue</TableCell>
                                <TableCell align="right">yellow</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {order.map(order => (
                                <TableRow
                                key={order.user}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {order.user}
                                </TableCell>
                                <TableCell align="right">{order.time}</TableCell>
                                <TableCell align="right">{order.purple}</TableCell>
                                <TableCell align="right">{order.green}</TableCell>
                                <TableCell align="right">{order.red}</TableCell>
                                <TableCell align="right">{order.blue}</TableCell>
                                <TableCell align="right">{order.yellow}</TableCell>
                                <TableCell align="right">{order.status}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Grid>
                    
                </Container>
            </React.Fragment>
        </div>
        
    )
}

export default About