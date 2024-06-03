import React,{useState,useEffect} from 'react';
import './Chart.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios  from '../../componets/Api/index';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = () => {
    const [products, setProducts] = useState([]);
    const [count, setcount] = useState(0);
    const [pageCount, setPageCount] = useState(3);
    console.log(products);
 useEffect(() => {
        axios.get('/products',{
            params:{
                limit:pageCount,
                skip:pageCount * count,
               
            }
        })
       .then(res => setProducts(res.data.products))
       .catch(err => console.log(err))
    }, [count,pageCount])

 const data = {
        labels: products?.map(print =>print.title.slice(0,20)),
        datasets: [
          {
            label: '# of Votes',
            data: products?.map(print => print.stock),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className='box_alt container'>
            <div className="chat_item">
             <Pie data={data} />
             <select onChange={(e) =>setPageCount(e.target.value)} name="" id="">
             <option value="3">3</option>
             <option value="5">5</option>
             <option value="8">8</option>
             <option value="11">11</option>
             </select>
             <button onClick={() =>setcount(p => p - 1)}>prev</button>
             <button onClick={() =>setcount(p => p + 1)}>next</button>
            </div>
        </div>
    );
}

export default Chart;
