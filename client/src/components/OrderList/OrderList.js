import moment from "moment";

function OrdersList({ orderList, user }) {
  return (
    <div>
      <h2 className="usertitle">Orders List</h2>
      <table className="tbadmin table table-bodered ">
        <thead>
          <tr>
            <th>Orders ID</th>
            {/* <th>Emails</th> */}
            {/* <th>Users ID</th> */}
            <th>Amount</th>
            <th>Date</th>
            {/* <th>Delivered</th> */}
            <th>Transactions ID</th>
          </tr>
        </thead>

        <tbody>
          {orderList.map((order) => {
            console.log(order.isDelivered);
            return (
              <tr>
                <td>{order._id}</td>
                 {/* <td>{order.email}</td> */}
                {/* <td>{order.userid}</td> */}
                <td>{order.orderAmount} TND</td>
                <td>{moment(order.createdAt).format("MMM Do YYYY")}</td>
                {/* <td>{order.isDelivered}</td> */}
                <td>{order.transactionId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
