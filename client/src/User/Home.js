import React from 'react'
import "./Home.css";
import "./Footer.css";
function Home() {
  return (
    <div >
        <section className="Home" id="home"/>
      <div className="Content">
        <span>Welcome</span>
	<h3>We make<br/>hair beautiful<br/>& unique</h3>
     </div>
{/* <!--Home--> */}
{/* <!--About us--> */}
<section className="about" id="about">
         <h1 className="heading">About us</h1>
        <div className="row">
	<div className="image">
	      <img src="{% static 'about.jpg' %}" alt=""/> 
	</div>
	<div className="content">
	      <h3 className="title">We are a group of stylist</h3>
		<p>Beauty comes from inside, inside the beauty salon.</p>
		<p>Sometimes all we need is a little pampering to help us feel better</p>
		<div className="icons-container">
		      <div className="icons">
		         <img src="{% static 'about1.png' %}"/>
		         <h3>Professional tools</h3>
		       </div>
		      <div className="icons">
		         <img src="{% static 'about2.png' %}"/>
		         <h3>Quality tools</h3>
		       </div>
		      <div className="icons">
		         <img src="{% static 'about3.png' %}"/>
		         <h3>Hair washing</h3>
		       </div>
		</div>
	</div>
        </div>
</section>
{/* <!--Services--> */}
<section className="services" id="services">
	<h1 className="heading">Premium Services</h1>
		<div className="box-container">
			<div className="box">
				<img src="{% static 'service1.jpg' %}" alt=""/>
				<div className="content">
				<h3>Hair Styling</h3>
				</div>
			</div>
			<div className="box">
				<img src="{% static 'service2.jpg' %}" alt=""/>
				<div className="content">
				<h3>Wedding services</h3>
				</div>
			</div>
			<div className="box">
				<img src="{% static 'service3.jpg' %}" alt=""/>
				<div className="content">
				<h3>Ladies haircut</h3>
				</div>
			</div>
			<div className="box">
				<img src="{% static 'service4.jpg' %}" alt=""/>
				<div className="content">
				<h3>Manicures, Pedicures Application</h3>
				</div>
			</div>
		</div>
</section>
{/* <!--Service--> */}
{/* <!--Styles--> */}
<section className="style" id="styles">
	<h1 className="heading">Choose your styles</h1>
		<div className="box-container">
			<div className="box">
				<div className="image">
					<img src="{% static 'style1.jpg' %}" alt=""/>
				</div>
				<div className="content">
					<h3 className="title">Wedding hairstyles</h3>
					<p>Massage is not just a luxury, it’s a way to a happier, healthier life</p>
				</div>
			</div>
			<div className="box">
				<div className="image">
					<img src="{% static 'style2.jpg' %}" alt=""/>
				</div>
				<div className="content">
					<h3 className="title">Evening hairstyles</h3>
					<p>Massage is not just a luxury, it’s a way to a happier, healthier life</p>
				</div>
			</div>
			<div className="box">
				<div className="image">
					<img src="{% static 'style3.jpg' %}" alt=""/>
				</div>
				<div className="content">
					<h3 className="title">Party hairstyles</h3>
					<p>Massage is not just a luxury, it’s a way to a happier, healthier life</p>
				</div>
			</div>
			<div className="box">
				<div className="image">
					<img src="{% static 'style4.jpg' %}" alt=""/>
				</div>
				<div className="content">
					<h3 className="title">Business hairstyles</h3>
					<p>Massage is not just a luxury, it’s a way to a happier, healthier life</p>
				</div>
			</div>
		</div>
</section>
{/* <!--Styles--> */}
{/* <!--Pricing--> */}
<section className="pricing" id="pricing">
	<h1 className="heading">Offer and Pricing</h1>
	<div className="box-container">
		<div className="box">
		<h3 class="title">Basic</h3>
			<div className="price">
				<span className="currency">$</span>
				<span className="amount">10</span>
			</div>
			<ul>
				<li><i className="fas fa-check"></i>Simple haircut</li>
				<li><i className="fas fa-check"></i>Hair plugs</li>
				<li><i className="fas fa-check"></i>Styling</li>
				<li><i className="fas fa-check"></i>Braiding</li>
			</ul>
			<a href="#"><button>Book a visit</button></a>
		</div>
		<div className="box">
		<h3 className="title">Standard</h3>
			<div className="price">
				<span className="currency">$</span>
				<span className="amount">20</span>
			</div>
			<ul>
				<li><i className="fas fa-check"></i>Simple haircut</li>
				<li><i className="fas fa-check"></i>Hair plugs</li>
				<li><i className="fas fa-check"></i>Styling</li>
				<li><i className="fas fa-check"></i>Braiding</li>
			</ul>
			<a href="#"><button>Book a visit</button></a>
		</div>
		<div className="box">
		<h3 className="title">Premium</h3>
			<div className="price">
				<span className="currency">$</span>
				<span className="amount">30</span>
			</div>
			<ul>
				<li><i className="fas fa-check"></i>Simple haircut</li>
				<li><i className="fas fa-check"></i>Hair plugs</li>
				<li><i className="fas fa-check"></i>Styling</li>
				<li><i className="fas fa-check"></i>Braiding</li>
			</ul>
			<a href="#"><button>Book a visit</button></a>
		</div>
	</div>
</section>
{/* <!--Pricing--> */}
{/* <!--Blogs--> */}
<section className="blogs" id="blogs">
	<h1 className="heading">Our Blogs</h1>
	<div className="box-container">
		<div className="box">
			<div className="image">
				<img src="{% static 'blog.jpg' %}" alt=""/>
			</div>
			<div className="content">
				<a href="#" class="title">Styling hair services</a>
				<span>By Admin / 13th July, 2023</span>
				<p>Blessed are the hairstylists, for they bring out the beauty in others.</p>
			</div>
		</div>
		<div className="box">
			<div className="image">
				<img src="{% static 'blog1.jpg' %}" alt=""/>
			</div>
			<div className="content">
				<a href="#" className="title">Styling hair services</a>
				<span>By Admin / 13th July, 2023</span>
				<p>I never dreamed about success. I worked for it.</p>
			</div>
		</div>
		<div className="box">
			<div className="image">
				<img src="{% static 'blog2.jpg' %}" alt=""/>
			</div>
			<div className="content">
				<a href="#" className="title">Styling hair services</a>
				<span>By Admin / 13th July, 2023</span>
				<p>Be nice to your hairstylist. We can ruin your self-esteem for six months in fifteen minutes.</p>
			</div>
		</div>
	</div>
</section>
{/* <!--Blogs--> */}
{/* <!--Reviews--> */}
<section className="review" id="review">
    <h1 className="heading">Customer's review</h1>
    <div className="box-container">
        <div className="box">
            <img src="images/quotes.jpg" alt="" className="quote"/>
            <p>Success is when I see my client smile.</p>
            <img src="{% static 'review1.jpg' %}" alt=""/>
            <h3>Diya Saju</h3>
            <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
            </div>
        </div>
        <div className="box">
            <img src="images/quotes.jpg" alt="" className="quote"/>
            <p>Success is when I see my client smile.</p>
            <img src="{% static 're.jpg' %}" alt=""/>
            <h3>Jenny Mathew</h3>
            <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
            </div>
        </div>
        <div className="box">
            <img src="images/quotes.jpg" alt="" className="quote"/>
            <p>Success is when I see my client smile.</p>
            <img src="{% static 'review2.jpg' %}" alt=""/>
            <h3>Clara Eiden</h3>
            <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
            </div>
        </div>
    </div>
</section>
{/* <!--Review--> */}
{/* <!--Footer--> */}
<section className="footer">
	<div className="box-container">
		<div className="box">
			<h3>Find us here</h3>
			<p>Lavender Herbal Beauty Parlour</p>
			<div className="share">
				<a href="#" className="fab fa-facebook"></a>
				<a href="#" className="fab fa-instagram"></a>
				<a href="#" className="fab fa-youtube"></a>
			</div>
		</div>
		<div className="box">
			<h3>Contact Us</h3>
			<p>+91-7038738392</p>
			<a href="#" className="link">lavenderbeauty@gmail.com</a>
		</div>
		<div className="box">
			<h3>Localization</h3>
			<p>Lavender Herbal Beauty Parlour,
				Near Old Private Bus Stand,<br/>
				Perumbavoor
			</p>
		</div>
	</div>
	<div className="credict">
		Created by Divya Benjamin
	</div>
</section>
    </div>
  )
}

export default Home