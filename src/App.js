import React from "react";
import WhyNiyo from "./components/whyniyo/WhyNiyo";
import scholarshipslogo from "./images/scholarships.png";
import counsellinglogo from "./images/counselling.png";
import supportlogo from "./images/support.png";
import ratingslogo from "./images/ratings.png";
import employmentratelogo from "./images/employment_rate.png";
import upskilledlogo from "./images/upskilled.png";
import exclusiveaccesslogo from "./images/access.png";
import coolrewardslogo from "./images/cool_rewards.png";
import empowermentlogo from "./images/events.png";
import communitylogo from "./images/community.png";
import WhyCareer from "./components/whycareer/WhyCareer";


function App() {
  return (
    <div > 
      <h5><span>WHY NIYO BOOTCAMP</span></h5>
      <br />
      <h1>Bespoke all round</h1>
      <h1><span>support!</span></h1>
      <br />
      <br />

      <div className="niyogrid" >

      < WhyNiyo
        icon = {scholarshipslogo}
        altText = "Scholarships Logo"
        title = "Scholarships"
        description = "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you."
      />

<WhyNiyo
        icon = {counsellinglogo}
        altText = "Free Counselling Logo"
        title = "Free Counselling Sessions"
        description = "Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists."
        
      />

<WhyNiyo
        icon = {supportlogo}
        altText = "Child Care Support Logo"
        title = "Childcare Support"
        description = "Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning."
      />

<WhyNiyo
        icon = {ratingslogo}
        altText = "Average Reviews Logo"
        title = "4.75/5 Average Reviews"
        description = "We are focused on ensuring every student has the best experience our bootcamps have to offer."
      
      />

<WhyNiyo
        icon = {employmentratelogo}
        altText = "Employment Rate Logo"
        title = "75% Employment Rate"
        description = "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels."
  
      />

<WhyNiyo
        icon = {upskilledlogo}
        altText = "Upskilled Logo"
        title = "560 people Upskilled"
        description = "Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more."
               
      />

<WhyNiyo
        icon = {supportlogo}
        altText = "Dedicated Career Support Logo"
        title = "Dedicated Career Support from Day One "
        description = "You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching."
        
      />

<WhyNiyo
        icon = {exclusiveaccesslogo}
        altText = "Exclusive Access Logo"
        title = "Exclusive Access to Open Roles to All Our Hiring Partners"
        description = "Exclusive access to open roles to all our hiring partners."
      
      />

<WhyNiyo
        icon = {coolrewardslogo}
        altText = "Cool Rewards Logo"
        title = "Cool Rewards"
        description = "We like to reward our students during really important milestones. All our rewards come with an element of surprise."
        
      />

<WhyNiyo
        icon = {empowermentlogo}
        altText = "Empowerment Evenings Logo"
        title = "Empowerment Evenings and Events"
        description = "Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses."
        
      />

<WhyNiyo
        icon = {communitylogo}
        altText = "Community Logo"
        title = "7000+ Community of talent"
        description = "We’ve grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries."
      
      />
      </div>
      <WhyCareer />;

    </div>
  );
}

export default App;
