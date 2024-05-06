import React from 'react'
import './Admin.css'
export default function AdminPages() {
    return (
        <><div className="main" style={{ margin: '0', padding: '0' }}>
            <div className="topbar">
                <div className="toggle">
                    <ion-icon name="menu-outline" />
                </div>
                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <ion-icon name="search-outline" />
                    </label>
                </div>
                <div className="user">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                </div>
            </div>
            {/* ======================= Cards ================== */}
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Daily Views</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="eye-outline" />
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Sales</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="cart-outline" />
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Comments</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="chatbubbles-outline" />
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Earning</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="cash-outline" />
                    </div>
                </div>
            </div>
            {/* ================ Order Details List ================= */}
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" className="btn">
                            View All
                        </a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td>
                                    <span className="status delivered">Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td>
                                    <span className="status return">Return</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td>
                                    <span className="status inProgress">In Progress</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td>
                                    <span className="status delivered">Delivered</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td>
                                    <span className="status return">Return</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td>
                                    <span className="status inProgress">In Progress</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* ================= New Customers ================ */}
                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer02.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        David <br /> <span>Italy</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer01.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        Amit <br /> <span>India</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer02.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        David <br /> <span>Italy</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer01.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        Amit <br /> <span>India</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer02.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        David <br /> <span>Italy</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer01.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        Amit <br /> <span>India</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer01.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        David <br /> <span>Italy</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx">
                                        <img src="assets/imgs/customer02.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                        Amit <br /> <span>India</span>
                                    </h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
