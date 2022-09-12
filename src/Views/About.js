import "./HomeStyles.css";
import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Grid, TextField, Button} from '@mui/material';

function About(){
    const handleGet = event =>{
        event.preventDefault();
        alert("Your are clicking")
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        //   };
          
        //   fetch("http://localhost:8080/user", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
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
        "status": "Waiting"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/user",requestOptions)
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
            {/* <h1 class='sectionitems'>Section 1 : noodlesorting </h1>
            <img src={process.env.PUBLIC_URL+"images/factory.png"} alt="Factory" class="responsive factoryimg"></img>
            <span className="box boxfont text-center">
                <p1 className="text-xs xs:text-xl">Add-Order</p1>
            </span> */}
            <React.Fragment>
                <CssBaseline />
                <Container sx={{pt:30}}>
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
                </Container>
            </React.Fragment>
        </div>
        
    )
}

export default About