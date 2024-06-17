import './App.css'

function App() {

  return (
    <>
      <Header />
    </>
  );
}
//#region 
// const r = ['A','b','c'];
// const r2 = ['e','f','f'];
// let r3 =[...r,...r2] ;
// console.log(r3)
//#endregion
// let STR="ahmad feras saleh abuabdo "
// function myparam(...myparameters){
//   let c= 0;
//   myparameters.map((m) => {
//     c += m; 
//   });
//   return c
// }
//  const  removeDuplicates =(arr)=>[...new Set(arr)]  ;
//  const mapp = new Map([
//   [10, "number"],
//   ["10", "String"]
// ]);

// const myobj ={
//   a:"Ahmad",
//   b:"Osama"
// }
const arrays=[1,2,3,4,5]
// let m = [1,2,3,4,4,4]
function mw (m,i){
  <p key={i}>My key: {i} and my value: {m}</p>
}

function Header() {
  return ( 
  <> 
 <div>
{arrays.filter(el => el > 2)}

      {/* {arrays.map((m, i) => (
        <p key={i}>My key: {i} and my value: {m}</p>
      ))}
 {arrays.map(mw)}
 */}
      {/* {Object.entries(myobj).map(([key, value]) => (
        <p key={key}>Value of {key}: {value}</p>
      ))} */}
    
  

    {/* {mapp.get(10)}
    {mapp.has(100)?"sd":"sssssd"}
  { removeDuplicates(m)}\n
  {myparam(1,2,3,4)} 
  { STR.includes('ahmad')?"true":"False"}
  {STR.repeat(2)} */}
   </div> 
  </>
  )
}

export default App  ;
