import React from 'react'
import { Component } from 'react';
import Modal from '../UI/Modal/Modal'
 
const withErrorHandler = (WrappedComponent, axios) => {
   return  (class extends Component{
    state = {
      error:null
    } 
    
    componentWillMount(){
      this.reqInterceptor = axios.interceptors.request.use(request=>{
        this.setState({error: null});
        return request;
      });
      this.resInterceptor = axios.interceptors.response.use(req=>req , error=>{
        this.setState({error: error});
      })
    } 
    
    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    
    errorConfirmedHandler = () =>{
      this.setState({error: null});
    }
    
     render(){
       return(
       <React.Fragment>
         <Modal 
         show={this.state.error}
         modalClosed={this.errorConfirmedHandler} >
           {this.state.error?this.state.error.message:null}
         </Modal>
         <WrappedComponent {...this.props}/>
       </React.Fragment>
       );
     }
    })
 }
 
 export default withErrorHandler
 