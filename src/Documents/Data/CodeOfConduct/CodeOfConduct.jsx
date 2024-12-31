import React from "react";
import "./CodeOfConduct.css"; // Importing the CSS file
import TitleDoc from "../../../components/index/TitleDoc";

const CodeOfConduct = () => {
  return (
    <div className="code-of-conduct">
      <TitleDoc title="Code of Conduct" />

      <h2 className="header_doc">Introduction</h2>
      <p className="description_doc">
        This Code of Conduct outlines the expectations for behavior and
        responsibilities of all participants in our community. It aims to foster
        a positive, inclusive, and respectful environment.
      </p>

      <h2 className="header_doc">Our Standards</h2>
      <ul>
        <li className="description_doc">
          Respect Treat everyone with respect. Be considerate and open-minded in
          discussions.
        </li>
        <li className="description_doc">
          Inclusivity Encourage diversity and inclusion. Everyone should feel
          welcome and valued.
        </li>
        <li className="description_doc">
          Integrity Maintain honesty and integrity in all interactions. Avoid
          any form of harassment or discrimination.
        </li>
        <li className="description_doc">
          Collaboration Work together constructively. Share knowledge and
          support each other’s growth.
        </li>
      </ul>

      <h2 className="header_doc">Unacceptable Behavior</h2>
      <ul>
        <li className="description_doc">
          Harassment or intimidation of any kind, including but not limited to
          verbal abuse, personal attacks, or offensive comments.
        </li>
        <li className="description_doc">
          Discrimination against individuals based on race, gender, sexual
          orientation, disability, or any other characteristic.
        </li>
        <li className="description_doc">
          Disruptive behavior that negatively impacts the community experience.
        </li>
      </ul>

      <h2 className="header_doc">Reporting Issues</h2>
      <p className="description_doc">
        If you witness or experience unacceptable behavior, please report it
        immediately to the designated moderators. All reports will be handled
        confidentially.
      </p>

      <h2 className="header_doc">Consequences</h2>
      <p className="description_doc">
        Participants who violate this Code of Conduct may face consequences,
        including but not limited to:
      </p>
      <ul>
        <li className="description_doc">
          A warning from community moderators.
        </li>
        <li className="description_doc">
          Temporary or permanent removal from the community.
        </li>
      </ul>

      <h2 className="header_doc">Conclusion</h2>
      <p className="description_doc">
        By participating in our community, you agree to abide by this Code of
        Conduct. Together, we can create a safe and welcoming environment for
        everyone.
      </p>
    </div>
  );
};

export default CodeOfConduct;
