import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const MyBooking = () => {
    const [booking, setBooking] = useState([]);
    const {user} = useAuth();

  useEffect( () => {
    fetch(`https://afternoon-wave-85746.herokuapp.com/myBooking?email=${user.email}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setBooking(data);
    })
  }, [user.email]);

  const handleDelete = id => {
    const deleteConfirmation = window.confirm('Are you sure to delete this booking');
    if(deleteConfirmation){
      const url = `https://afternoon-wave-85746.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Deleted Successfully');
          const remaining = booking.filter(booking => booking._id !== id);
          setBooking(remaining);
        }
       
      })
    }
   
  }

    return (
        <div>
        <h2>My booking</h2>
        <Table striped bordered hover variant="dark">
        <thead>
<tr>
  <th>SL No.</th>
  <th>Title</th>
  <th>User Name</th>
  <th>User Email</th>
  <th>Address</th>
  <th>Phone Number</th>
  <th>Price</th>
  <th>Action</th>
</tr>
</thead>

{booking.map((booking, index) => (
 <tbody>
 <tr>
   <td>{index+1}</td>
   <td>{booking.title}</td>
   <td>{booking.name}</td>
   <td>{booking.email}</td>
   <td>{booking.address}</td>
   <td>{booking.phoneNumber}</td>
   <td>{booking.price}</td>
   <button onClick={() => handleDelete(booking._id)}>Delete</button>
 </tr>
</tbody>
)

)}

</Table>
    </div>
    );
};

export default MyBooking;