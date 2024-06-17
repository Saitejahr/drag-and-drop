// import React from 'react';

// const Toolbar = ({ handleImageSelection }) => {
//   const handleDragStart = async (e, type) => {
//     e.dataTransfer.setData('type', type);
//     if (type === 'image') {
//       const imageURL = await e.target.getAttribute('src');
//       if (imageURL) {
//         e.dataTransfer.setData('imageURL', imageURL);
//       } else {
//         e.dataTransfer.setData('imageURL', 'Selected');
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//       <div draggable onDragStart={(e) => handleDragStart(e, 'text')}>
//         Text Box
//       </div>
//       <div draggable onDragStart={(e) => handleDragStart(e, 'image')}>
//         Image Box
//         <input
//           id="image-input"
//           type="file"
//           accept="image/*"
//           style={{ display: 'none' }}
//           onChange={(e) => handleImageSelection(e.target.files)}
//         />
//         <img
//           id="image-placeholder"
//           src=""
//           alt="Selected"
//           style={{ display: 'none' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Toolbar;

// import React from 'react';

// const Toolbar = ({ handleImageSelection }) => {
//   const handleDragStart = async (e, type) => {
//     e.dataTransfer.setData('type', type);
//     if (type === 'image') {
//       const imageURL = await e.target.getAttribute('src');
//       if (imageURL) {
//         e.dataTransfer.setData('imageURL', imageURL);
//       } else {
//         e.dataTransfer.setData('imageURL', 'Selected');
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//       <div style={{padding:"5px",textAlign:'center',border: '1px solid black'}} draggable onDragStart={(e) => handleDragStart(e, 'text')}>
//         Text Box
//       </div>
//       <div style={{padding:"5px",textAlign:'center',border: '1px solid black'}} draggable onDragStart={(e) => handleDragStart(e, 'image')}>
//         Image Box
//         <input
//           id="image-input"
//           type="file"
//           accept="image/*"
//           style={{ display: 'none' }}
//           onChange={(e) => handleImageSelection(e.target.files)}
//         />
//         <img
//           id="image-placeholder"
//           src=""
//           alt="Selected"
//           style={{ display: 'none' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Toolbar;


// import React from 'react';

// const Toolbar = () => {


//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//       <div style={{padding:"5px",textAlign:'center',border: '1px solid black'}}>
//         Text Box
//       </div>
//       <div style={{padding:"5px",textAlign:'center',border: '1px solid black'}} >
//         Image Box
        
//       </div>
//     </div>
//   );
// };

// export default Toolbar;


// import React from 'react';

// const Toolbar = ({ onTextDragStart, onImageDragStart }) => {
//   const handleImageClick = () => {
//     document.getElementById('image-input').click();
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//       <div
//         draggable
//         onDragStart={onTextDragStart}
//         style={{ padding: '5px', textAlign: 'center', border: '1px solid black', cursor: 'move' }}
//       >
//         Text Box
//       </div>
//       <div
//         onClick={handleImageClick}
//         style={{ padding: '5px', textAlign: 'center', border: '1px solid black', cursor: 'pointer' }}
//       >
//         Image Box
//         <input
//           id="image-input"
//           type="file"
//           accept="image/*"
//           style={{ display: 'none' }}
//           onChange={onImageDragStart}
//         />
//       </div>
//     </div>
//   );
// };

// export default Toolbar;


import React from 'react';

const Toolbar = ({ onTextDragStart, onImageDragStart }) => {
  const handleImageClick = () => {
    document.getElementById('image-input').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      onImageDragStart(imageURL);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
      <div
        draggable
        onDragStart={onTextDragStart}
        style={{ padding: '5px', textAlign: 'center', border: '1px solid black', cursor: 'move' }}
      >
        Text Box
      </div>
      <div
        onClick={handleImageClick}
        draggable
        onDragStart={(e) => e.preventDefault()} // Prevent default drag event for image box
        style={{ padding: '5px', textAlign: 'center', border: '1px solid black', cursor: 'move' }}
      >
        Image Box
        <input
          id="image-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Toolbar;
