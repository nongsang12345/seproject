import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#02BC77', color: 'white', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://edureq.src.ku.ac.th/image/KU_SRC_Color_bg_white.jpg" alt="KU Logo" style={{ width: '100px', marginRight: '10px' }} />
        <div>
          <p style={{ margin: 0 }}>มหาวิทยาลัยเกษตรศาสตร์</p>
        </div>
      </div>
      <img src="https://firebasestorage.googleapis.com/v0/b/seproject-8d5aa.appspot.com/o/image%2073.png?alt=media&token=274beb4d-0b29-4f61-bbfc-a3cf27b7b00f" alt="New Image" style={{ width: '50px', height: '50px' }} />
    </header>
  );
};

export default Header;
