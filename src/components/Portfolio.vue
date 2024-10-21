<template>
  <section class="section2">
    <div class="sec1_container" @click="toggleContent('emmy')">
      <div class="sec1" >
        <div class="sec1a">
          <h2>Emmy Desk</h2>
          <h5>
            Emmydesk is a workflow automation system for Eminence Technosystem,
            designed to streamline processes and simplify customer requirement
            submissions using modern web technologies.
          </h5>
          <p>URL: https://www.emmydesk.com/</p>
        </div>
        <div class="sec1b">
          <h2>Description</h2>
          <p>
            Emmydesk is an integral internal workflow system designed
            specifically for Eminence Technosystem. Its primary purpose is to
            streamline and automate the workflow processes, allowing customers
            to easily send in their requirements, especially those pertaining to
            distinct skill sets. Developed using a blend of modern web
            technologies, Emmydesk represents the epitome of digital
            transformation in workflow management.
          </p>
        </div>
      </div>
      <div class="sec1_con" v-if="showContent === 'emmy'">
        <h2>Core Features:</h2>
        <ol>
          <li>Customer Requirement Portal:</li>
          <ul>
            <li>
              Requirement Submission: Customers can easily submit their
              requirements, detailing their specific needs, and identifying the
              skills they're looking for.
            </li>
            <li>
              Requirement Tracking: Post-submission, customers can track the
              progress of their requirements, gaining insights into which stages
              their requests are at and when they can expect completion.
            </li>
            <li>
              Feedback & Revision: Emmydesk provides an interactive platform
              where customers can provide feedback on deliverables and request
              revisions if necessary.
            </li>
          </ul>
          <li>Skill-based Sorting:</li>
          <ul>
            <li>
              The system automatically categorizes and sorts incoming
              requirements based on the skills specified by the customer. This
              ensures that requirements are directed to the appropriate teams or
              individuals within Eminence Technosystem.
            </li>
          </ul>
          <li>User-friendly Dashboard:</li>
          <ul>
            <li>
              Emmydesk offers a dashboard view, which provides users with a
              snapshot of ongoing activities, requirement statuses, pending
              tasks, and more. It aids in quick decision-making and
              prioritization.
            </li>
          </ul>
          <li>Real-time Notifications:</li>
          <ul>
            <li>
              Leveraging the reactivity of Vue.js, the system provides real-time
              notifications. This ensures that all stakeholders are immediately
              informed about updates or changes related to requirements.
            </li>
          </ul>
          <li>Secure Authentication:</li>
          <ul>
            <li>
              The platform implements robust authentication and authorization
              protocols, ensuring that data integrity and security are
              maintained at all times.
            </li>
          </ul>
          <li>Comprehensive Reporting:</li>
          <ul>
            <li>
              Emmydesk incorporates reporting tools that allow users to generate
              detailed reports. This can cover aspects like requirement
              completion rates, skills in demand, and more.
            </li>
          </ul>
          <li>Technical Stack Breakdown:</li>
          <ul>
            <li>Backend - Laravel & MySQL:</li>
            <li>Frontend - Vue.js with Inertia:</li>
            <li>
              Integration: The blend of Laravel with Vue.js, powered by Inertia,
              provides a seamless development experience. It ensures that the
              Emmydesk platform is both dynamic on the client side and robust on
              the server side.
            </li>
          </ul>
        </ol>
      </div>
    </div>
  </section>
  <section class="section2">
    <div class="sec1_container" @click="toggleContent('mvtl')">
      <div class="sec1r" >
        <div class="sec1a">
          <h2>MVTL</h2>
          <h5>
            MVTL is a logistics platform using Laravel and Vue.js to streamline
            process management with precision and user-friendly design.
          </h5>
        </div>
        <div class="sec1b">
          <h2>Description</h2>
          <p>
            MVTL serves as a cutting-edge digital platform tailored for the
            modern logistics industry. With the combined power of Laravel PHP
            for backend operations and Vue.js for creating an intuitive,
            reactive frontend, MVTL facilitates every phase of the logistics
            process with precision and user-friendly interactions. Developed
            using this robust tech stack and supplemented by a diverse range of
            APIs, MVTL ensures seamless management and oversight of logistical
            functions.
          </p>
        </div>
      </div>
      <div class="sec1_con" v-if="showContent === 'mvtl'">
        <h2>Core Features:</h2>
        <ol>
          <li>Shipment Tracking:</li>
          <ul>
            <li>
              Real-time Monitoring: Leveraging the reactivity of Vue.js, users
              and clients can actively monitor the real-time status of their
              shipments, receiving instant updates with every status change.
            </li>
            <li>
              Historical Data: MVTL retains data of each shipment’s trajectory,
              offering a transparent view of routes, delays, and other crucial
              details.
            </li>
            <li>
              Notifications: Automated alerts and real-time notifications
              powered by Vue.js keep users apprised of vital updates about their
              shipments.
            </li>
          </ul>
          <li>Route Optimization:</li>
          <ul>
            <li>
              Drivers and logistics coordinators receive dynamic route
              suggestions, updated in real-time using Vue.js, based on traffic
              conditions, road blockages, and other vital parameters.
            </li>
          </ul>
          <li>Inventory Management:</li>
          <ul>
            <li>
              MVTL's interface, built using Vue.js, offers interactive inventory
              monitoring tools, allowing users to swiftly manage stock levels,
              predict demand, and pinpoint items requiring replenishment.
            </li>
            <li>
              Advanced analytics features offer granular insights into inventory
              trends, aiding effective decision-making.
            </li>
          </ul>
          <li>Fleet Management:</li>
          <ul>
            <li>
              MVTL provides comprehensive oversight over the organization's
              fleet, with Vue.js powering interactive dashboards that display
              real-time vehicle status, driver metrics, and trip details.
            </li>
          </ul>
          <li>API Integration:</li>
          <ul>
            <li>
              Third-party Sync: MVTL's backend, built on Laravel, integrates
              effortlessly with third-party tools and services, such as GPS
              tracking systems. Vue.js then visualizes this data on the frontend
              for a seamless user experience.
            </li>
            <li>
              Data Interchange: Ensures smooth and instantaneous data exchange
              between MVTL and external platforms, thanks to Vue.js's
              data-binding capabilities.
            </li>
          </ul>
          <li>Reporting & Analytics:</li>
          <ul>
            <li>
              Interactive charts and visual representations, rendered using
              Vue.js, enable users to derive insights from vast data sets with
              ease. These reports can be customized according to specific
              requirements.
            </li>
          </ul>
          <li>User & Role Management:</li>
          <ul>
            <li>MVTL's user interface, designed using Vue.js, provides role-specific dashboards with varying access levels, ensuring optimal usability and data protection.</li>
          </ul>
          <li>Technical Stack Breakdown:</li>
          <ul>
            <li>Backend - Laravel PHP & MySQL:</li>
            <li>API Development:</li>
            <ul>
                <li>Laravel's API Capabilities: Laravel's rich features like Eloquent ORM, API resources, and Passport streamline API development, making it both efficient and secure.</li>
                <li>RESTful APIs: Ensuring standardized operations and simple integrations with external systems.</li>
            </ul>
            <li>Frontend - Vue.js:</li>
          </ul>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",

  data() {
    return {
      showContent: null,
    };
  },
  methods: {
    toggleContent(section) {
      this.showContent = this.showContent === section ? null : section;
    },
  },
};
</script>

<style scoped>
.sec1 {
  display: flex;
  padding: 1%;
  gap: 1rem;
  cursor: pointer;
}
.sec1r {
  display: flex;
  flex-direction: row-reverse;
  padding: 1%;
  gap: 1rem;
  cursor: pointer;
}
.sec1_container:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.sec1_container {
  background-color: whitesmoke;
  border-radius: 20px;
}
.sec1a,
.sec1b {
  width: 50%;
  padding: 3%;
}
.sec1a {
  background: linear-gradient(90deg, #0d2538 50%, #1d2a34 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  color: white;
  border-radius: 20px;
}
.sec1a h2 {
  font-size: 2rem;
  font-weight: 700;
}
.sec1a h5 {
  font-size: 1.2rem;
  font-weight: 400;
}
.sec1a p {
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  opacity: 0.8;
}
.sec1b h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.sec1b p {
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.8;
}
.sec1_con {
  padding: 4%;
}
.sec1_con h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.sec1_con ol {
  list-style-type: decimal;
  padding-left: 2rem;
}
.sec1_con ul {
  list-style-type: square;
  padding-left: 2rem;
}
.sec1_con li {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

@media screen and (max-width: 1200px) {
  .sec1,
  .sec1r {
    flex-direction: column;
  }
  .sec1a,
  .sec1b {
    width: 100%;
  }
    
}
</style>
