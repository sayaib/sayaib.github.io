import React from "react";
import TitleDoc from "../../components/index/TitleDoc";
import "./style.css";

const HowToContribute = () => {
  return (
    <div className="main_container_doc">
      <TitleDoc title="How to Contribute" />
      <p className="description_doc">
        Thank you for your interest in contributing to our open-source project!
        We welcome all contributions, whether it's fixing bugs, improving
        documentation, or adding new features. Here's how you can get started:
      </p>

      <h2 className="header_doc">1. Fork the Repository</h2>
      <p className="description_doc">
        Start by visiting our GitHub repository and clicking the{" "}
        <strong>"Fork"</strong> button in the top-right corner. This creates
        your own copy of the project.
      </p>

      <h2 className="header_doc">2. Clone Your Fork</h2>
      <p className="description_doc">
        Clone your fork to your local machine using the following command:
      </p>
      <pre style={styles.code}>
        <code style={{ fontSize: "0.7rem" }}>
          git clone https://github.com/your-username/project-name.git
        </code>
      </pre>

      <h2 className="header_doc">3. Set Up the Project</h2>
      <p className="description_doc">
        Navigate to the project directory and install dependencies:
      </p>
      <pre style={styles.code}>
        <code style={{ fontSize: "0.7rem" }}>
          cd project-name
          <br />
          npm install
        </code>
      </pre>

      <h2 className="header_doc">4. Create a Branch</h2>
      <p className="description_doc">Create a new branch for your changes:</p>
      <pre style={styles.code}>
        <code style={{ fontSize: "0.7rem" }}>
          git checkout -b feature/your-feature-name
        </code>
      </pre>

      <h2 className="header_doc">5. Make Your Changes</h2>
      <p className="description_doc">
        Edit the code, fix bugs, or add features. Ensure your changes follow the
        project's coding standards and guidelines.
      </p>

      <h2 className="header_doc">6. Test Your Changes</h2>
      <p className="description_doc">
        Run the tests to make sure everything works as expected:
      </p>
      <pre style={styles.code}>
        <code style={{ fontSize: "0.7rem" }}>npm test</code>
      </pre>

      <h2 className="header_doc">7. Commit and Push</h2>
      <p className="description_doc">
        Commit your changes with a descriptive message:
      </p>
      <pre style={styles.code}>
        <code style={{ fontSize: "0.7rem" }}>
          git add .<br />
          git commit -m "Add a brief description of your changes"
        </code>
      </pre>
      <p className="description_doc">Push your branch to your fork:</p>
      <pre style={styles.code}>
        <code style={{ fontSize: "0.7rem" }}>
          git push origin feature/your-feature-name
        </code>
      </pre>

      <h2 className="header_doc">8. Open a Pull Request</h2>
      <p className="description_doc">
        Go to the original repository on GitHub and open a pull request. Provide
        a clear description of your changes and why they are necessary.
      </p>

      <h2 className="header_doc">9. Collaborate and Improve</h2>
      <p className="description_doc">
        Be ready to collaborate with reviewers and make any necessary changes.
        We value your contribution and look forward to merging your work!
      </p>

      <p style={{ marginTop: "2rem", color: "#555" }}>
        Thank you for helping us make this project better. Happy coding!
      </p>
    </div>
  );
};

const styles = {
  code: {
    backgroundColor: "#9b9797",
    color: "#0f0e0e",
    fontFamily: "monospace",
    borderRadius: "5px",
    padding: "10px",
    overflowX: "auto",
    position: "relative",
  },
};

export default HowToContribute;
