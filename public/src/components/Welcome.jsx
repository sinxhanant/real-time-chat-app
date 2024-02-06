
import React,{useState} from 'react'
import styled from "styled-components";
import Robot from "../assets/robot.gif"
import Logout from './Logout';

export default function Welcome({currentUser}) {
   
  return (
    <div>
      <Container>
      <div className="chat-header">
      <div className="user-details">
        <div className="avatar">


        </div>
        <div className="username">
          <h3></h3>
        </div>
      </div>
      <Logout />
     </div>
        <img src={Robot} alt="Robot" />
        <h1>
            Welcome, <span>{currentUser.username}</span>!
        </h1>
        <h3>
            Please select a chat to Start Messaging.
            
        </h3>
      </Container>
    </div>
  )
}

const Container = styled.div`



  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
`;