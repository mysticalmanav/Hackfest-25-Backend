import React from "react";
import { motion } from "framer-motion";

const Ps8 = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <main className="container mx-auto px-4 pt-16 pb-20">
        {/* Title */}
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-4xl font-mono text-center font-bold pt-4">
            <div className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text pressfont">
              Real-Time RAG Assistant for Enterprise Support/Marketing | IIT
              (ISM) Dhanbad
            </div>
          </h1>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">
            Problem Statement
          </h2>
          <p className="text-gray-400 mt-4">
            The task is to develop a real-time Q&A assistant using Pathway’s
            streaming data platform and RAG techniques. It will continuously
            ingest multiple data streams (e.g., support tickets, chat
            transcripts, emails, or document updates) and index or vectorize
            them in real-time. The assistant will retrieve relevant context from
            the most up-to-date knowledge to answer user queries.
          </p>
          <p className="text-gray-400 mt-4">
            The key advantage is that the assistant stays in sync with real-time
            data, providing accurate answers based on the latest available
            information. This system can be applied in various scenarios, such
            as answering government policy questions, providing real-time flight
            delay updates, or offering insights into rapidly evolving SDKs.
          </p>
          <p className="text-gray-400 mt-4">
            Recommendation: Focus on solving one use case thoroughly before
            expanding to other applications, ensuring a robust and polished
            solution.
          </p>
        </motion.div>

        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">
            Objectives and Key Features
          </h2>
          <p className="text-gray-400">
            <p>
              The main objectives and features for the hackathon project are as
              follows:
            </p>

            <ul>
              <li>
                <strong>Continuous Data Ingestion & Indexing:</strong> Use
                Pathway to ingest and index real-time data from sources like
                support tickets, chat logs, or documents. The system must
                continuously update an index or knowledge store in real-time,
                ensuring the latest data is available.
              </li>

              <li>
                <strong>Retrieval-Augmented Q&A with LLM:</strong> Implement a
                Q&A module using RAG to retrieve relevant data and generate
                answers via a Large Language Model (LLM), ensuring answers are
                grounded in the most up-to-date information.
              </li>

              <li>
                <strong>Real-Time Updates & Consistency:</strong> Ensure the
                system updates quickly when data changes, with clear
                demonstration of real-time behavior and handling of data
                additions, deletions, and updates.
              </li>

              <li>
                <strong>User Interface:</strong> Develop a simple interface
                (text or voice) where users can ask questions and receive
                answers. A text-based UI or voice-activated assistant is
                acceptable, but focus on core functionality.
              </li>

              <li>
                <strong>API Endpoint:</strong> Expose functionality via a
                RESTful API to allow external systems to integrate with the
                assistant. Provide at least one endpoint to handle user queries
                and return answers.
              </li>

              <li>
                <strong>Robustness and Fallback Mechanisms:</strong> Implement
                fallback strategies to handle component failures gracefully,
                ensuring the system remains functional even if parts of it fail
                (e.g., use alternative APIs or cached results).
              </li>

              <li>
                <strong>Target Use-Case & Integration:</strong> Focus on an
                enterprise use-case (e.g., support or marketing) and integrate
                the assistant into a realistic workflow, such as a Slack bot or
                documentation portal plugin.
              </li>

              <li>
                <strong>Data Source Management:</strong> Handle various data
                types (e.g., text, PDFs, Google Docs) using Pathway connectors
                or custom parsing, showcasing the ability to deal with diverse
                data formats.
              </li>
            </ul>
          </p>
        </motion.div>

        {/* Deliverable */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">
            Deliverable
          </h2>
          <p className="text-gray-400">
            <p>
              By the end of the hackathon, you should prepare the following
              deliverables for judging:
            </p>

            <ul>
              <li>
                <strong>Working Prototype:</strong> Provide the complete source
                code of your real-time RAG application in a public repository
                (e.g., GitHub). Include a README with setup instructions,
                including dependencies (Pathway version, Python requirements,
                etc.). Ensure the code is well-organized and commented, with key
                sections highlighted (e.g., data retrieval, LLM calls). Do not
                hard-code credentials or API keys in the repo.
              </li>

              <li>
                <strong>Demo Video:</strong> A 3-5 minute video demonstrating
                your application. Show the end-to-end flow: starting the data
                stream, asking a question, receiving an answer, and reflecting
                updates (e.g., new support tickets or modified documents).
                Highlight any special features (e.g., Slack integration, voice
                interface). The video should showcase real-time functionality
                and explain how the assistant works in the chosen use-case.
              </li>

              <li>
                <strong>Written Documentation:</strong> Along with your code,
                provide a brief report or extended README covering the
                following:
                <ul>
                  <li>
                    <strong>Problem Scenario:</strong> Describe the targeted
                    real-world scenario (e.g., support, marketing) and the data
                    sources used.
                  </li>
                  <li>
                    <strong>Architecture:</strong> Provide an overview of the
                    system design, including data connectors, Pathway setup,
                    vector store, LLM service, front-end, etc. Include a diagram
                    (optional) and note any assumptions or simplifications.
                  </li>
                  <li>
                    <strong>Real-Time Features:</strong> Explain how continuous
                    ingestion and updates are implemented. How frequently does
                    the system check for updates, and how does Pathway stream
                    data?
                  </li>
                  <li>
                    <strong>Challenges & Trade-offs:</strong> Discuss challenges
                    faced (e.g., data consistency, LLM latency) and your
                    solutions. Mention fallback mechanisms, if any.
                  </li>
                  <li>
                    <strong>Extra Features:</strong> Describe any bonus features
                    (e.g., anomaly detection, multi-turn memory) and their
                    importance.
                  </li>
                  <li>
                    <strong>How to Run:</strong> Provide detailed steps on
                    running the project, including data ingestion, querying the
                    API/UI, and reproducing any real-time scenarios.
                  </li>
                  <li>
                    <strong>Future Improvements (Optional):</strong> Mention
                    possible improvements if more time was available (optional
                    but recommended).
                  </li>
                </ul>
              </li>

              <li>
                <strong>Live Demo (if applicable):</strong> If live judging is
                required, be prepared to deploy and demo your assistant in front
                of the judges. Ensure the system can run locally or in the
                cloud, even without an internet connection. Practice a scenario
                to show real-time updates happening during the demo. However,
                the video and documentation might suffice for initial judging.
              </li>
            </ul>
          </p>
        </motion.div>

        {/* Expected Outcome */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">
            Expected Outcome
          </h2>
          <ol>
            <li>
              <b>Real-Time Functionality (25%)</b>: Ensure the assistant updates
              knowledge instantly with live data updates. Demonstrate real-time
              functionality convincingly during testing.
            </li>
            <li>
              <b>Accuracy & Relevance (20%)</b>: Deliver accurate, high-quality
              answers. Highlight document sources or provide citations for
              transparency.
            </li>
            <li>
              <b>Technical Implementation (20%)</b>: Properly utilize Pathway
              features for streaming data pipelines. Showcase modular, clean
              code and overall architecture soundness.
            </li>
            <li>
              <b>Innovation & Creativity (15%)</b>: Add unique, well-executed
              features like alerting trends or innovative integrations. Focus on
              quality over quantity.
            </li>
            <li>
              <b>Usability & Presentation (10%)</b>: Create an intuitive,
              polished UI. Clearly present and document your solution for judges
              and potential users.
            </li>
            <li>
              <b>Real-World Impact (10%)</b>: Articulate the practical value of
              your solution for enterprises. Address a genuine problem and
              showcase its business potential.
            </li>
          </ol>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps8;
