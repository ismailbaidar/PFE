import "../../styles/single-order-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Status from "./Status";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserOrders } from "../../features/orderSlice";
export default function SingleOrderDetails({ setDetailsVisible }) {
    const { id } = useParams();
    const orders = useSelector((state) => state.orderReducer.orders);
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOrders());
    }, []);
    useEffect(() => {
        setProducts(orders.find((o) => o.id == id).products);

        setOrder(orders.find((o) => o.id == id));
        console.log(orders);
    }, [orders]);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(order);
    return (
        <div className="single-order-details">
            <img className="bg-bill" src="../../images/bill3.png" alt="" />
            <div className="details-modal printable-content">
                <div className="details">
                    <div className="info-part">
                        <div className="account-details">
                            <div>
                                FullName: <span>{user.name}</span>
                            </div>
                            <div>
                                Account ID: <span>{user.id}</span>
                            </div>
                        </div>
                        <div className="order-details">
                            <div>
                                Bill ID: <span>{order.id}</span>
                            </div>
                            <div>
                                Shipping to:{" "}
                                <span>
                                    {
                                        orders.find((o) => o.id == id).shipping
                                            .shipping_adress
                                    }
                                </span>
                            </div>
                            <div>
                                {" "}
                                Payment Status :{" "}
                                <span>
                                    <Status word="pending" type="success" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="products-part">
                        <table border="1">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Qte</th>
                                <th>Discount</th>
                                <th>Subtotal</th>
                            </tr>
                            {products.map((p) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{p.id}</td>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>{p.pivot.qte}</td>
                                            <td>{p.discount}</td>
                                            <td>{p.pivot.qte * p.price}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="print-button" onClick={() => window.print()}>
                    print
                </button>
            </div>
        </div>
    );
}
