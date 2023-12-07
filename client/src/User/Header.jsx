import React from 'react'
import "./Header.css";
function Header() {
  return (
    <div>
        <section className="Header">
        <a href="#" className="Logo">Lavender Beauty</a>

        <nav className="Navbar">
            <div id="close-navbar" className="fas fa-times"></div>

            <a href="{% url 'Userboutique:Userboutique' %}">Home</a>
            <a href="{% url 'Userboutique:styles' %}">Services</a>
            <a href="{% url 'Userboutique:blog' %}">Blogs</a>
            <a href="{% url 'Userboutique:feedback'%}">Feedback</a>
            <a href="{% url 'Userboutique:about' %}">About</a>

        </nav>
         <div  id="menu-btn" class="fas fa-bars"></div>
    </section>
    </div>
  )
}

export default Header