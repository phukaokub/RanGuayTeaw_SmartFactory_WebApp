import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Grid, TextField, Button} from '@mui/material';
import "./HomeStyles.css";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart, 
  Pie, Cell, } from 'recharts';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


var Product = 0, Sorted = 0, Unsorted = 0;
var Unsorted_Green = 0, Unsorted_Blue = 0, Unsorted_Purple = 0, Unsorted_Red = 0, Unsorted_Yellow = 0;
var Sorted_Green = 0, Sorted_Blue = 0, Sorted_Purple = 0, Sorted_Red = 0, Sorted_Yellow = 0;

export default function Home(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    
      const [age, setAge] = React.useState('');
    
      const handleChange = (event) => {
        setAge(event.target.value);
      };
    
      
    
    
        const [order,setOrder] = useState([]);
        const handleGet = event =>{
          event.preventDefault();
          Sorted = 0;
          Unsorted = 0;
          Product = 0;
          Sorted_Blue = 0;
          Sorted_Green = 0;
          Sorted_Purple = 0;
          Sorted_Red = 0;
          Sorted_Yellow = 0;
          Unsorted_Blue = 0;
          Unsorted_Green = 0;
          Unsorted_Purple = 0;
          Unsorted_Red = 0;
          Unsorted_Yellow = 0;
          var requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };
    
        fetch('/sorting-system', requestOptions)
            .then(response => {
                return response.json()
    
            })
            .then(result => {
                
                for(var key in result){
                  var status = result[key]["status"]
                  var color = result[key]["color"]
                  if  (status == "Unsorted" ){
                     Unsorted = Unsorted + 1;
                     if ( color == "GREEN"){
                      Unsorted_Green = Unsorted_Green + 1;
                     }
                     else if ( color == "BLUE"){
                      Unsorted_Blue = Unsorted_Blue + 1;
                     }
                     else if ( color == "YELLOW"){
                      Unsorted_Yellow = Unsorted_Yellow + 1;
                     }
                     else if ( color == "RED"){
                      Unsorted_Red = Unsorted_Red + 1;
                     }
                     else if ( color == "PURPLE"){
                      Unsorted_Purple = Unsorted_Purple + 1;
                     }
                  }
                  else if (status == "Sorted"){
                     Sorted = Sorted + 1;
                      if ( color == "GREEN"){
                       Sorted_Green = Sorted_Green + 1;
                      }
                      else if ( color == "BLUE"){
                       Sorted_Blue = Sorted_Blue + 1;
                      }
                      else if ( color == "YELLOW"){
                       Sorted_Yellow = Sorted_Yellow + 1;
                      }
                      else if ( color == "RED"){
                       Sorted_Red = Sorted_Red + 1;
                      }
                      else if ( color == "PURPLE"){
                       Sorted_Purple = Sorted_Purple + 1;
                      }
                  }
                  Product = Unsorted + Sorted;
    
    
                }
                
                setOrder(result)
                
    
    
    
    
            })
            .catch(error => console.log('error', error));
        }
        
        const handleSubmit = event => {
          event.preventDefault();
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
    
          var raw = JSON.stringify({
          "rowid": rowid,
          "year": year,
          "month": month,
          "day": day,
          "hour": hour,
          "min": min,
          "sec": sec,
          "section": section,
          "color": color,
          "status": state,
          });
    
          
    
          var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
          };
    
          fetch('/sorting-system',requestOptions)
          .then(response => response.json())
          .then(result =>{
              alert(result['lastInsertRowid'])
              if (result['changes'] === 1){
                  window.location.href='/about'
              }
          })
          .catch(error => console.log('error', error));
      }
    
      const [rowid,set_rowid] = useState('');
      const [year,set_year] = useState('');
      const [month,set_month] = useState('');
      const [day,set_day] = useState('');
      const [hour,set_hour] = useState('');
      const [min,set_min] = useState('');
      const [sec,set_sec] = useState('');
      const [section,set_section] = useState('');
      const [color,set_color] = useState('');
      const [state,set_state] = useState('');
    
      const data = [
        {
          name: 'Green',
          Sorted: Sorted_Green,
          Unsorted: Unsorted_Green,
        },
        {
          name: 'Blue',
          Sorted: Sorted_Blue,
          Unsorted: Unsorted_Blue,
        },
        {
          name: 'Yellow',
          Sorted: Sorted_Yellow,
          Unsorted: Unsorted_Yellow,
        },
        {
          name: 'Red',
          Sorted: Sorted_Red,
          Unsorted: Unsorted_Red,
        },
        {
          name: 'Purple',
          Sorted: Sorted_Purple,
          Unsorted: Unsorted_Purple,
        },
    
      ];
    
      
      
    
          return (
            <div className='App'>
                <h1 class='sectionitems'>Section 1 : noodlesorting </h1>
            <img src={process.env.PUBLIC_URL+"images/factory.png"} alt="Factory" class="responsive factoryimg"></img>
              <Box sx={{ flexGrow: 1 , pt:20}}>
        <Grid  container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start">
        <Grid container spacing={3} 
          direction="row"
          justifyContent="space-between"
          alignItems="baseline">
          <Grid item xs={3}>
            <Item>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Section 1 : noodles sorting</MenuItem>
            </Select>
            </Item>
          </Grid>
        
          </Grid>
          <Grid item xs={5}>
            <Grid container
              direction="column"
              justifyContent="flex-end"
              alignItems="baseline"> 
            </Grid>
            <Grid>
            <Item>
            <h1>Section Status</h1>
            <ResponsiveContainer width={500} height={300}>
            <BarChart
              layout="vertical"
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band"/>
              <Tooltip />
              <Legend />
              <Bar dataKey="Sorted" stackId="a" fill="#8884d8" />
              <Bar dataKey="Unsorted" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
            </Item>
            </Grid>
          </Grid>
          <Grid item xs={7} 
              container
              direction="row"
              justifyContent="space-evenly "
              alignItems="center">
            <Grid item xs={2} >
              <Item>
              <h2>Product</h2>
              <h1>{Product}</h1>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
              <h2>Sorted</h2>
              <h1>{Sorted}</h1>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
              <h2>Unsorted</h2>
              <h1>{Unsorted}</h1>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    
    
    
            </div>
    
    
          );
}
