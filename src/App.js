// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const Toolbar = ({ handleImageSelection, handleDragStart }) => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//       <div
//         draggable
//         onDragStart={(e) => handleDragStart(e, 'text')}
//         style={{ cursor: 'move', padding: '5px', border: '1px dashed #ccc', borderRadius: '5px' }}
//       >
//         Text Box
//       </div>
//       <div>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => handleImageSelection(e.target.files)}
//         />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [elements, setElements] = useState([]);

//   const handleDragStart = (e, type) => {
//     e.dataTransfer.setData('type', type);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const type = e.dataTransfer.getData('type');
//     const offsetX = e.clientX - e.target.getBoundingClientRect().left;
//     const offsetY = e.clientY - e.target.getBoundingClientRect().top;
  
//     if (type === 'text') {
//       // Create a new input element
//       const newInput = (
//         <input
//           key={elements.length}
//           type="text"
//           style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
//           draggable
//           onDragStart={(e) => handleDragStart(e, 'text')}
//         />
//       );
//       setElements([...elements, newInput]);
//     } else if (type === 'image') {
//       const imageURL = e.dataTransfer.getData('text/plain');
//       // Create a new image element
//       const newImage = (
//         <img
//           key={elements.length}
//           src={imageURL}
//           alt="Selected"
//           style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
//           draggable
//           onDragStart={(e) => handleDragStart(e, 'image')}
//         />
//       );
//       setElements([...elements, newImage]);
//     } else if (type === 'element') {
//       // Dragging an existing element within the drop area
//       const index = e.dataTransfer.getData('index');
//       const updatedElements = [...elements];
//       // Update the position of the dragged element
//       updatedElements[index] = React.cloneElement(updatedElements[index], {
//         style: {
//           ...updatedElements[index].props.style,
//           left: offsetX,
//           top: offsetY,
//         },
//       });
//       setElements(updatedElements);
//     }
//   };
  
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleImageSelection = (files) => {
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const imageURL = URL.createObjectURL(file);

//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');

//         const maxWidth = 200; // Adjust this value as needed
//         const maxHeight = 200; // Adjust this value as needed
//         let width = img.width;
//         let height = img.height;

//         if (width > height) {
//           if (width > maxWidth) {
//             height *= maxWidth / width;
//             width = maxWidth;
//           }
//         } else {
//           if (height > maxHeight) {
//             width *= maxHeight / height;
//             height = maxHeight;
//           }
//         }

//         canvas.width = width;
//         canvas.height = height;

//         ctx.drawImage(img, 0, 0, width, height);

//         const resizedImageURL = canvas.toDataURL('image/jpeg');

//         setElements([...elements, <img key={elements.length} src={resizedImageURL} alt="Selected" />]);
//       };

//       img.src = imageURL;
//     }
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }

//     const updatedElements = [...elements];
//     const [removed] = updatedElements.splice(result.source.index, 1);
//     updatedElements.splice(result.destination.index, 0, removed);

//     setElements(updatedElements);
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <div>
//         <Toolbar handleImageSelection={handleImageSelection} handleDragStart={handleDragStart} />
//         <Droppable droppableId="droppable">
//           {(provided, snapshot) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               onDrop={handleDrop}
//               onDragOver={handleDragOver}
//               style={{ border: '1px solid black', minHeight: '600px', position: 'relative' }}
//             >
//               {elements.map((element, index) => (
//                 <Draggable key={index} draggableId={`item-${index}`} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={{
//                         ...provided.draggableProps.style,
//                         position: 'absolute',
//                         left: element.props.style ? element.props.style.left : 0,
//                         top: element.props.style ? element.props.style.top : 0,
//                       }}
//                     >
//                       {element}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//     </DragDropContext>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const Toolbar = ({ handleImageSelection, handleDragStart }) => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//       <div
//         draggable
//         onDragStart={(e) => handleDragStart(e, 'text')}
//         style={{ cursor: 'move', padding: '5px', border: '1px dashed #ccc', borderRadius: '5px' }}
//       >
//         Text Box
//       </div>
//       <div>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => handleImageSelection(e.target.files)}
//         />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [elements, setElements] = useState([]);

//   const handleDragStart = (e, type) => {
//     e.dataTransfer.setData('type', type);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const type = e.dataTransfer.getData('type');
//     const offsetX = e.clientX - e.target.getBoundingClientRect().left;
//     const offsetY = e.clientY - e.target.getBoundingClientRect().top;
  
//     if (type === 'text') {
//       // Create a new input element
//       const newInput = (
//         <input
//           key={elements.length}
//           type="text"
//           style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
//           draggable
//           onDragStart={(e) => handleDragStart(e, 'text')}
//         />
//       );
//       setElements([...elements, newInput]);
//     } else if (type === 'image') {
//       const imageURL = e.dataTransfer.getData('text/plain');
//       // Create a new image element
//       const newImage = (
//         <img
//           key={elements.length}
//           src={imageURL}
//           alt="Selected"
//           style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
//           draggable
//           onDragStart={(e) => handleDragStart(e, 'image')}
//         />
//       );
//       setElements([...elements, newImage]);
//     } else if (type === 'element') {
//       // Dragging an existing element within the drop area
//       const index = e.dataTransfer.getData('index');
//       const updatedElements = [...elements];
//       // Update the position of the dragged element
//       updatedElements[index] = React.cloneElement(updatedElements[index], {
//         style: {
//           ...updatedElements[index].props.style,
//           left: offsetX,
//           top: offsetY,
//         },
//       });
//       setElements(updatedElements);
//     }
//   };
  
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleImageSelection = (files) => {
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const imageURL = URL.createObjectURL(file);

//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');

//         const maxWidth = 200; // Adjust this value as needed
//         const maxHeight = 200; // Adjust this value as needed
//         let width = img.width;
//         let height = img.height;

//         if (width > height) {
//           if (width > maxWidth) {
//             height *= maxWidth / width;
//             width = maxWidth;
//           }
//         } else {
//           if (height > maxHeight) {
//             width *= maxHeight / height;
//             height = maxHeight;
//           }
//         }

//         canvas.width = width;
//         canvas.height = height;

//         ctx.drawImage(img, 0, 0, width, height);

//         const resizedImageURL = canvas.toDataURL('image/jpeg');

//         setElements([...elements, <img key={elements.length} src={resizedImageURL} alt="Selected" />]);
//       };

//       img.src = imageURL;
//     }
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }

//     const updatedElements = [...elements];
//     const [removed] = updatedElements.splice(result.source.index, 1);
//     updatedElements.splice(result.destination.index, 0, removed);

//     setElements(updatedElements);
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <div>
//         <Toolbar handleImageSelection={handleImageSelection} handleDragStart={handleDragStart} />
//         <Droppable droppableId="droppable">
//           {(provided, snapshot) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               onDrop={handleDrop}
//               onDragOver={handleDragOver}
//               style={{ border: '1px solid black', minHeight: '600px', position: 'relative' }}
//             >
//               {elements.map((element, index) => (
//                 <Draggable key={index} draggableId={`item-${index}`} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={{
//                         ...provided.draggableProps.style,
//                         position: 'absolute',
//                         left: element.props.style ? element.props.style.left : 0,
//                         top: element.props.style ? element.props.style.top : 0,
//                       }}
//                     >
//                       {element}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//     </DragDropContext>
//   );
// };

// export default App;


// import React, { useState } from 'react';

// const Toolbar = ({ handleImageSelection }) => {
//     const handleDragStart = (e, type) => {
//       e.dataTransfer.setData('type', type);
//     };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//     <div
//       draggable
//       onDragStart={(e) => handleDragStart(e, 'text')}
//       style={{ cursor: 'move', padding: '5px', border: '1px dashed #ccc', borderRadius: '5px' }}
//     >
//       Text Box
//       </div>
//       <div>
//         <input       
//         type="file"
//         accept="image/*"
//         onChange={(e) => handleImageSelection(e.target.files)}
//         />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [elements, setElements] = useState([]);

//   const handleDrop = (e) => {
//   e.preventDefault();
//   const type = e.dataTransfer.getData('type');
//   const offsetX = e.clientX - e.target.getBoundingClientRect().left;
//   const offsetY = e.clientY - e.target.getBoundingClientRect().top;


//   if (type === 'text') {
//     // Create a new input element
//     const newInput = (
//       <input
//         key={elements.length}
//         type="text"
//         style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
//         draggable
//         onDragStart={(e) => handleDragStart(e, 'text')}
//       />
//     );
//     setElements([...elements, newInput]);
//   } else if (type === 'image') {
//     const imageURL = e.dataTransfer.getData('text/plain');
//     // Create a new image element
//     const newImage = (
//       <img
//         key={elements.length}
//         src={imageURL}
//         alt="Selected"
//         style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
//         draggable
//         onDragStart={(e) => handleDragStart(e, 'image')}
//       />
//     );
//     setElements([...elements, newImage]);
//   } else if (type === 'element') {
//     // Dragging an existing element within the drop area
//     const index = e.dataTransfer.getData('index');
//     const updatedElements = [...elements];
//     // Update the position of the dragged element
//     updatedElements[index] = React.cloneElement(updatedElements[index], {
//       style: {
//         ...updatedElements[index].props.style,
//         left: offsetX,
//         top: offsetY,
//       },
//     });
//     setElements(updatedElements);
//   }
//   };

//       const handleDragOver = (e) => {
//       e.preventDefault();
//       };

//       const handleImageSelection = (files) => {
//           for (let i = 0; i < files.length; i++) {
//           const file = files[i];
//           const imageURL = URL.createObjectURL(file);


//           const img = new Image();
//           img.onload = () => {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');
      
//             // Set the canvas dimensions to the desired resized dimensions
//             const maxWidth = 200; // Adjust this value as needed
//             const maxHeight = 200; // Adjust this value as needed
//             let width = img.width;
//             let height = img.height;
      
//             if (width > height) {
//               if (width > maxWidth) {
//                 height *= maxWidth / width;
//                 width = maxWidth;
//               }
//             } else {
//               if (height > maxHeight) {
//                 width *= maxHeight / height;
//                 height = maxHeight;
//               }
//             }
      
//             canvas.width = width;
//             canvas.height = height;
      
//             // Draw the image onto the canvas with the resized dimensions
//             ctx.drawImage(img, 0, 0, width, height);
      
//             // Get the data URL of the resized image from the canvas
//             const resizedImageURL = canvas.toDataURL('image/jpeg');
      
//             // Add the resized image to the elements array
//             setElements([...elements, <img key={elements.length} src={resizedImageURL} alt="Selected" />]);
//           };
      
//           img.src = imageURL;
//        }
//      };

//     const handleDragStart = (e, type, index) => {
//       e.dataTransfer.setData('type', type);
//       if (index !== undefined) {
//       e.dataTransfer.setData('index', index.toString());
//       }
//     };

//   return (
//     <div>
//         <Toolbar handleImageSelection={handleImageSelection} />
//         <div
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//             style={{ border: '1px solid black', minHeight: '700px', position: 'relative' }}
//           >
//           {elements.map((element, index) => (
//           <div
//             key={index}
//             draggable
//             onDragStart={(e) => handleDragStart(e, 'element', index)}
//             style={{
//             position: 'absolute',
//             left: element.props.style ? element.props.style.left : 0,
//             top: element.props.style ? element.props.style.top : 0,
//             }}
//           >
//             {element}
//           </div>
//           ))}
//         </div>

//     </div>
//   );
// };
// export default App;




import React, { useState } from 'react';



const Toolbar = ({ handleImageSelection }) => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('type', type);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, 'text')}
        style={{ cursor: 'move', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
      >
        Text Box
      </div>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageSelection(e.target.files)}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [elements, setElements] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;
    console.log(offsetX)
    console.log(offsetY)
  
    if (type === 'text') {
      // Create a new input element
      const newInput = (
        <input
          key={elements.length}
          type="text"
          style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
          draggable
          onDragStart={(e) => handleDragStart(e, 'text')}
        />
      );
      setElements([...elements, newInput]);
    } else if (type === 'image') {
      const imageURL = e.dataTransfer.getData('text/plain');
      // Create a new image element
      const newImage = (
        <img
          key={elements.length}
          src={imageURL}
          alt="Selected"
          style={{ position: 'absolute', left: offsetX, top: offsetY, cursor: 'move' }}
          draggable
          onDragStart={(e) => handleDragStart(e, 'image')}
        />
      );
      setElements([...elements, newImage]);
    } else if (type === 'element') {
      // Dragging an existing element within the drop area
      const index = e.dataTransfer.getData('index');
      const updatedElements = [...elements];
      // Update the position of the dragged element
      updatedElements[index] = React.cloneElement(updatedElements[index], {
        style: {
          ...updatedElements[index].props.style,
          left: offsetX,
          top: offsetY,
        },
      });
      setElements(updatedElements);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleImageSelection = (files) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageURL = URL.createObjectURL(file);
    
      const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
        
              // Set the canvas dimensions to the desired resized dimensions
              const maxWidth = 200; // Adjust this value as needed
              const maxHeight = 200; // Adjust this value as needed
              let width = img.width;
              let height = img.height;
        
              if (width > height) {
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              } else {
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              }
        
              canvas.width = width;
              canvas.height = height;
        
              // Draw the image onto the canvas with the resized dimensions
              ctx.drawImage(img, 0, 0, width, height);
        
              // Get the data URL of the resized image from the canvas
              const resizedImageURL = canvas.toDataURL('image/jpeg');
        
              // Add the resized image to the elements array
              setElements([...elements, <img key={elements.length} src={resizedImageURL} alt="Selected" />]);
            };
        
            img.src = imageURL;
    }
  };

  const handleDragStart = (e, type, index) => {
    e.dataTransfer.setData('type', type);
    if (index !== undefined) {
      e.dataTransfer.setData('index', index.toString());
    }
  };
  
  
  return (
    <div>
    <Toolbar handleImageSelection={handleImageSelection} />
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ border: '1px solid black', minHeight: '600px', position: 'relative' }}
    >
      {elements.map((element, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, 'element', index)}
          style={{
            position: 'absolute',
            left: element.props.style ? element.props.style.left : 0 ,
            top: element.props.style ? element.props.style.top : 0,
          }}
        >
          {element}
        </div>
      ))}
    </div>
  </div>
  );
};

export default App;

