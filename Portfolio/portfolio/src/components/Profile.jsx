import React, { Component } from 'react';
import profile from '../assets/profile.jpg';
import './Profile.css';
function Profile() {


    return (
        <div>
            <div className="profile-section">
                <img src={profile} alt="Profile" className="profile-img" />
                <div className="contact-info">
                    <p>Tel: +1 (647) 637-0831</p>
                    <p>Email: hoyiuyiuyoyo@gmail.com</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yoyoho" target="_blank">yoyoho</a></p>
                    <p>GitHub: <a href="https://github.com/yobisaboy" target="_blank">yobisaboy</a></p>
                </div>
            </div>

            <h3>About Me</h3>
            <p>This is Yoyo. I graduated from Centennial College with a three-year Advanced Diploma in Game Programming. Also, I hold a bachelor's degree in Economics, with a focus on China, the US, and international economies. For my past work experience, I held a leadership role at an online service-matching company and a healthcare agency platform. In the workplace, I am a skilled problem-solver and a fast learner who is responsible and organized.</p>

            <h3>Summary of Qualification</h3>
            <ul>
                <li>Advanced Diploma in Game Programming from Centennial College, Toronto, Canada</li>
                <li>Bachelor’s Degree in China Studies (Economics) from Hong Kong Baptist University, Hong Kong</li>
            </ul>

            <h4>Fast Learner</h4>
            <p>My transition from Economics to Game Programming demonstrates that I am capable of quickly acquiring new knowledge. Additionally, my experience working in start-up companies required me to manage different parts of team operations without guidance. This meant I had to independently search for resources to accomplish my tasks. In the fast-changing IT industry, I believe this adaptability is an essential skill for success.</p>

            <h4>Responsible & Organized</h4>
            <p>While working at a healthcare agency, I was responsible for building the entire workflow system for service matching from scratch and establishing a new team. This demonstrates my ability to plan, organize, and allocate resources efficiently. In school, I participated in lots of group projects, where I took the lead in coordinating teammates and managing deadlines, highlighting my time management, responsibility, and communication skills.</p>

            <h4>Skilled at Problem-Solving</h4>
            <p>During my studies, I consistently performed well in mathematics and programming, showcasing my strong problem-solving abilities. As a customer service team leader in my past work experience, I was always the last resort for handling complaints. This experience strengthened my problem-solving skills and ability to manage difficult situations effectively.</p>

        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Profile;