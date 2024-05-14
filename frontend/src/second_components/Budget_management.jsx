import React, { useState, useEffect } from 'react';
import './Budget_management.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, updateUser } from '../redux/action/authAction';
import { getProjects } from '../redux/action/actionProject';

function Budgetmanage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getProjects())
  }, [dispatch]);
  const user = useSelector(state => state.users.user);
  const projects = useSelector(state => state.projects.projects);

  const handleAddTransaction = () => {
    const name = document.getElementById('name').value;
    const numTransaction = parseFloat(document.getElementById('numTransaction').value);
    const amount = parseFloat(document.getElementById('amount').value);
    if (!name || isNaN(numTransaction) || isNaN(amount) || amount === 0) return;

    const newTransaction = {
      donor:name,
      transaction:numTransaction,
      amount
    };
    
dispatch(updateUser(user._id,{budget:[...user.budget,newTransaction]}))
    

    document.getElementById('name').value = '';
    document.getElementById('numTransaction').value = '';
    document.getElementById('amount').value = '';
  };

  return (
    <div className='forooo'>
      <div className="appl" data-aos="flip-left">
        <h1>Budget Management Application</h1>
        <div className="balance-container">
          <h2> Incomes:</h2>
          <div id="balance">{user?.budget?.reduce((acc,e)=>acc+e.amount,0)} $</div>
        </div>
       
        <div className="appl" data-aos="flip-left">
        <h1>Projects costs</h1>
        <div className="balance-container">
          <h2>expenses :</h2>
          <div id="balance">{projects?.reduce((acc,e)=>acc+e.budget,0)} $</div>
          </div>
           </div>
           <div className="appl" data-aos="flip-left">
        <h1>Your Balance:</h1>
        <div className="balance-container">
          <div id="balance">{user?.budget?.reduce((acc,e)=>acc+e.amount,0)-projects?.reduce((acc,e)=>acc+e.budget,0)} $</div>
          </div>
           </div>
        <div className="form-container">
          <h2>Add new transaction</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Donor :</label>
              <input id="name" type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="numTransaction">Num Transaction :</label>
              <input id="numTransaction" type="number" placeholder="Enter N° transaction" required />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount : </label>
              <input id="amount" type="number" placeholder="Enter amount" required />
            </div>
            <div className="btn-group">
              <button type="button" className="income" onClick={() => handleAddTransaction('income')}>
                Add Income
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Budgetmanage;
