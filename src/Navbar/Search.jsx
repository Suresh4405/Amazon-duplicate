// import React, { useState } from 'react';

// const data = [
//   { 
//     id: 1,
//     name: 'suresh', 
//     description: 'Good developer in the world' 
//     },
//   { 
//     id: 2, 
//     name: 'Tony',
//     description: 'save the earth ' 
//   },
//   { 
//     id: 3, 
//     name: ' Natasha',
//     description: 'died for time stone' 
//   },
  
    
// ];

// const Search = () => {
//   const [item, setItem] = useState(null);

//   const handleItemClick = (index) => {
//     setItem(index);
//   };

//   return (
//     <div>
//       <h1>Data List</h1>
//       {data.map((item, index) => (
//         <div key={item.id} onClick={() => handleItemClick(index)}>
//           <p>{item.name}</p>
//         </div>
//       ))}
//       <h2>Selected Item Description</h2>
//       {item !== null ? (
//         <p>{data[item].description}</p>
//       ) : (
//         <p>No item selected</p>
//       )}
//     </div>
//   );
// };

// export default Search;