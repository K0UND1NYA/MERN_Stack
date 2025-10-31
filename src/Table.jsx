import React from 'react'
const rowStyle1={
    backgroundColor:"red",
    color:"yellow",
};
const cellStyle1={
  backgroundColor:"blue",
  padding:"10px",
  border:"2px solid black"
}
const cellStyle2={
  backgroundColor:"#ef04a1ff",
  padding:"10px",
  border:"2px solid black"
}
function Table() {
  return (
    <>
    <tr style={rowStyle1}>
        <td style={cellStyle1}>Shrinidhi S Koundinya</td>
        <td style={cellStyle1}>B.E Final Year Student </td>
    </tr>
    <tr style={rowStyle1}>
        <td style={cellStyle2}>Shreya S Koundinya</td>
        <td style={cellStyle2}>10th Student</td>
    </tr>
    </>
  )
}

export default Table