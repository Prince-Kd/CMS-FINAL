import React from 'react'
import swal from 'sweetalert'
import axios from 'axios';

const handler = (e, request, setError, setLoading) => {

    e.preventDefault()
    setError(null);
    setLoading(true);

  axios.post("http://localhost:5000/api/members/add_member", request)
  .then(response => {
    setLoading(true);
    swal(`Member Added!! ID: ${response.data.message}`)   
  }).catch(err => {
    setLoading(false)
    if(err.response.status === 400){
      swal(err.response.data.message);
    } 
    else {
      swal(err.response.data.message);
    }
  });
}

export default handler;