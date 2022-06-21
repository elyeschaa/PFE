import React from "react";
import { Link, Switch, Route } from "react-router-dom";
// import UsersList from "../UsersList/UsersList";
// import ProductsList from "../ProductsList/ProductsList";
// import AddNewProduct from "../AddNewProduct/AddNewProduct";
// import OrdersList from "../OrdersList/OrdersList";
import "./Admin.css";
// import EditProduct from "../EditProduct/EditProduct";

function Admin() {
  return (
    <div>
      <div className="row">
        <div className="col-md-10">
          <ul className="admin">
            <li>
              <Link to="/admin/usersList" style={{ color: "white" }}>
                Liste des utilisateurs
              </Link>
            </li>
            <li>
              <Link to="/admin/productsList" style={{ color: "white" }}>
                {" "}
                Liste des produits{" "}
              </Link>
            </li>
            <li>
              <Link to="/admin/addNewProduct" style={{ color: "white" }}>
                {" "}
                Ajouter un livre{" "}
              </Link>
            </li>
            <li>
              <Link to="/admin/ordersList" style={{ color: "white" }}>
                {" "}
                Liste des commandes{" "}
              </Link>
            </li>
          </ul>

          <Switch>
            {/* <Route path="/admin/userslist" component={UsersList}/>
                        <Route path="/admin/productslist" component={ProductsList}/>
                        <Route path="/admin/addnewproduct" component={AddNewProduct}/>
                        <Route path="/admin/orderslist" component={OrdersList}/>
                        <Route path="/admin/editproduct/:productid" component={EditProduct}/> */}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Admin;
