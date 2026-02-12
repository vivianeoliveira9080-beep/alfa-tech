import { useState } from 'react';

export default function App(){const [cart,setCart]=useState([]);
const products=[{id:1,name:'Capinha Gamer',price:39.9},{id:2,name:'Película 3D',price:19.9},{id:3,name:'Mouse Gamer',price:89.9},{id:4,name:'Teclado Mecânico',price:199.9}];
const add=(p)=>setCart([...cart,p]);
return (<div className='p-6'><h1 className='text-3xl font-bold'>ALFA TECH</h1><p>Loja virtual de tecnologia</p><div className='grid grid-cols-2 gap-4 mt-4'>{products.map(p=>(<div key={p.id} className='p-4 shadow rounded'><b>{p.name}</b><br/>R${p.price.toFixed(2)}<button onClick={()=>add(p)} className='block mt-2 bg-blue-600 text-white px-2 py-1 rounded'>Adicionar</button></div>))}</div><h2 className='mt-6 font-bold'>Carrinho ({cart.length})</h2><ul>{cart.map((c,i)=>(<li key={i}>{c.name} - R${c.price.toFixed(2)}</li>))}</ul><button className='mt-4 bg-green-600 text-white px-4 py-2 rounded'>Pagar com Pix</button></div></div>); }
