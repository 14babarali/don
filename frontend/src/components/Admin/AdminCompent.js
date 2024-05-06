import React from "react";

export default function AdminCompent({ children, userType }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 sidebar">
                    {/* Sidebar content */}
                    {/* Render different sidebar content based on userType */}
                    {userType === "patient" && <PatientSidebar />}
                    {userType === "pharmacy" && <PharmacySidebar />}
                    {userType === "admin" && <AdminSidebar />}
                </div>
                <div className="col-sm-10 main-content">
                    {/* Main content */}
                    {children}
                </div>
            </div>
        </div>
    );
}
