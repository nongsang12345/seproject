import React from "react";
import "./Sidebar.css"

function Sidebar() {
  return (
    <section id="sidebar">
    <div className="sidebar">
      <a href="#0" className="item">
        <div className="icon">
        <img
        src="https://firebasestorage.googleapis.com/v0/b/seproject-8d5aa.appspot.com/o/image%2063.png?alt=media&token=bfc8773c-b82c-47ab-8c54-2ef1078bcf0c"
        alt="schedule"
        style={{ width: "60px", height: "60px" }}
      />
        </div>
        <div className="text">SCHEDULE</div>
      </a>
      <a href="#1" className="item">
        <div className="icon">
        <img
        src="https://firebasestorage.googleapis.com/v0/b/seproject-8d5aa.appspot.com/o/image%2073.png?alt=media&token=274beb4d-0b29-4f61-bbfc-a3cf27b7b00f"
        alt="name-list"
        style={{ width: "60px", height: "60px" }}
      />
        </div>
        <div className="text">Name List</div>
      </a>
      <a href="#2" className="item">
        <div className="icon">
        <img
        src="https://firebasestorage.googleapis.com/v0/b/seproject-8d5aa.appspot.com/o/image%2076.png?alt=media&token=4db5db48-8091-4785-855d-14f64f6c4408"
        alt="edit"
        style={{ width: "60px", height: "60px" }}
      />
        </div>
        <div className="text">EDIT</div>
      </a>
      <a href="#3" className="item">
        <div className="icon">
        <img
        src="https://firebasestorage.googleapis.com/v0/b/seproject-8d5aa.appspot.com/o/image%2075.png?alt=media&token=d58c0239-ee73-412a-bb96-2f62b3bf4e97"
        alt="news"
        style={{ width: "60px", height: "60px" }}
      />
        </div>
        <div className="text">NEWS</div>
      </a>
    </div>
    </section>
  );
}

export default Sidebar;
