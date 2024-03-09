import './Body.css';
import gcpCloudDev from '../img/gcp-cloud-dev.png'

import { Card, Elevation } from "@blueprintjs/core";

export const Body = () => {
  return (
    <main >
      <Card className='Body' interactive={true} elevation={Elevation.ZERO}>
        <div className="bp4-running-text .modifier">
          <h3>Lifelong Learner with Passion & Integrity</h3>
          <p>
            I'm a passionate software engineer with professional integrity who
            is always looking for opportunities to advance my career. I'm also a
            lifelong learner, expert in Node.js and RESTful APIs, and have been
            part of many successful agile development teams in many roles
            including individual contributor, scrum master, and product owner.
          </p>
          <ul>
            <li>Full stack engineer with over 11 years of experience architecting
              enterprise applications for healthcare settings.</li>
            <li>Node.js developer with over 6 years of experience building RESTful APIs with an
              emphasis on quality, security, and interoperability.</li>
            <li>Leader with nearly 4 years of experience supervising agile development teams
              responsible for supporting and enhancing:
              <ul>
                <li>Cloud Native Solutions</li>
                <li>RESTful API Gateway</li>
                <li>Development Tools</li>
              </ul>
            </li>
          </ul>
        </div>
{/*         <table className="bp4-html-table ">
          <thead>
            <tr>
              <th>Certificate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Professional Cloud Developer<br />Google Cloud<br /><br />Issued Feb 2021<br />Expires Feb 2023</td>
              <td><a href="https://www.credential.net/f06c9d63-a73d-46ad-8d31-67a31bc52402"><img src={gcpCloudDev} alt="gcp" height={150} /></a></td>
            </tr>
          </tbody>
        </table> */}
      </Card>

    </main >
  )
}
