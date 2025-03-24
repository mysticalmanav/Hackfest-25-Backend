import React from 'react';
import { motion } from 'framer-motion';

function Ps3() {
  return (
    <div className="min-h-screen bg-zinc-900 text-cream-100">
      <main className="container mx-auto px-4 pt-16 pb-20">
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-4xl font-mono text-center font-bold pt-4">
            <div className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text pressfont">
              Decentralized Arbitration System:  Optimizing Token-Based Dispute Resolution
            </div>
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Introduction</h2>
          <p className="text-gray-400">
            As online marketplaces and decentralized platforms grow, a fair, transparent, and efficient dispute resolution system is crucial to fostering trust among users. The increasing complexity of global interactions calls for solutions that are not only impartial but also cost-effective and scalable.
            <br /><br />
            Blockchain-based dispute resolution offers a promising alternative, where jurors are selected through a decentralized process using a native token, such as the GRULL token. Jurors stake tokens to participate, and their chance of being selected increases with the amount of tokens they stake, ensuring that only active and engaged participants are chosen. This system incentivizes fair and honest decision-making while protecting against manipulation or malicious behavior. However, despite the benefits, challenges like Sybil attacks, token accumulation, and incentive misalignment can compromise the system’s integrity.
            <br /><br />
            In this challenge, participants are tasked with addressing these potential threats and optimizing the dispute resolution mechanism to ensure a secure, fair, and decentralized process. Drawing from the concept of Schelling points in game theory—where individuals gravitate towards a natural consensus without communication—we introduce a decentralized dispute resolution system. This system incentivizes participants to act truthfully, assuming others will do the same, creating a mutual expectation of honesty.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Problem Statement</h2>
          <div className="text-gray-400">
            <h3 className="text-xl font-semibold text-orange-100 mb-2">Juror Selection and Token Staking</h3>
            <p>
              Participants in the arbitration system serve as jurors for economic gain, earning arbitration fees by resolving disputes. Jurors self-select by staking GRULL tokens, and the likelihood of selection is directly proportional to the number of tokens staked. However, several issues arise:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Efficient Selection:</strong> The system must only consider active jurors who have staked tokens to ensure engagement and prevent inactive users from being chosen.</li>
              <li><strong>Optimizing Fairness:</strong> The selection mechanism should balance the probability of selection based on staked tokens while preventing monopolization by large token holders.</li>
              <li><strong>Preventing Sybil Attacks:</strong> The GRULL token serves to protect against Sybil attacks by requiring a minimum stake for participation. However, the system must ensure that bad actors cannot easily create multiple accounts or jurors to skew outcomes.</li>
            </ul>

            <h3 className="text-xl font-semibold text-orange-100 mb-2 mt-4">Attack Resistance: Preventing Token Accumulation</h3>
            <p>
              One of the biggest risks in a decentralized dispute resolution system is the potential for token accumulation, where a single party or group buys up a majority of the tokens to control outcomes. If one entity can acquire half or more of the tokens, they can influence the juror selection process and manipulate decisions.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Dynamic Token Pricing:</strong> As token demand increases, the system should use a dynamic pricing model, where acquiring a large number of tokens becomes increasingly expensive. This discourages monopolistic behavior by making it financially unviable for one party to accumulate a majority of tokens.</li>
              <li><strong>Weighted Random Selection:</strong> The probability of juror selection should be weighted by the amount of tokens staked, but with diminishing returns beyond a certain threshold. This prevents large token holders from completely dominating the system, ensuring smaller stakeholders also have a fair chance of being selected as jurors.</li>
              <li><strong>Randomized Juror Pools:</strong> Instead of using a single central juror pool, the system can randomly assign disputes to multiple independent juror pools. This makes it much more difficult for a single party to control multiple pools and rig outcomes.</li>
            </ul>

            <h3 className="text-xl font-semibold text-orange-100 mb-2 mt-4">Incentive Alignment: Honest Voting</h3>
            <p>
              Jurors must be incentivized to vote truthfully, aligning their decisions with the majority to ensure fairness in dispute outcomes. The challenge is to design a reward and penalty system that promotes honest voting while discouraging strategic or malicious behavior.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Penalty for Dishonest Voting:</strong> Jurors who cast votes that do not align with the final ruling should lose a portion of their staked tokens. These lost tokens are then redistributed to jurors who voted with the majority, creating a strong economic incentive to vote truthfully.</li>
              <li><strong>Reward for Majority Jurors:</strong> Jurors whose votes align with the majority decision not only receive arbitration fees but also gain additional tokens from the penalties levied on jurors who voted dishonestly. This mechanism ensures that jurors are financially rewarded for making fair, reasoned decisions.</li>
            </ul>
          </div>
        </motion.div>

        {/* Example */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Example</h2>
          <p className="text-gray-400">
            Six token owners participate in a dispute, collectively staking 12,000 tokens:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-1">
            <li>Owner A: 2,000 tokens</li>
            <li>Owner B: 1,500 tokens</li>
            <li>Owner C: 2,500 tokens</li>
            <li>Owner D: 3,000 tokens</li>
            <li>Owner E: 1,000 tokens</li>
            <li>Owner F: 2,000 tokens</li>
          </ul>
          <p className="text-gray-400 mt-2">
            The system randomly selects 5 tokens for voting, corresponding to:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-1">
            <li>Token 1789 (Owner A, Weight 1)</li>
            <li>Token 4352 (Owner B, Weight 1)</li>
            <li>Token 6023 (Owner C, Weight 1)</li>
            <li>Tokens 7615 & 8192 (Owner D, Weight 2)</li>
          </ul>
          <p className="text-gray-400 mt-2">
            Voting Results:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-1">
            <li>Majority Decision: In favor of X</li>
            <li>Owners A, B, and D vote for X</li>
            <li>Owner C votes for Y</li>
          </ul>
          <p className="text-gray-400 mt-2">
            Outcome:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-1">
            <li>Owners A, B, and D, being in the majority, win the dispute and gain tokens from Owner C, who loses 500 staked tokens.</li>
            <li>Token Redistribution:
              <ul className="list-disc pl-5">
                <li>Owner A gains 100 tokens (20%)</li>
                <li>Owner B gains 100 tokens (20%)</li>
                <li>Owner D gains 300 tokens (60%)</li>
              </ul>
            </li>
            <li>Disputing party "X" wins, while party "Y" and Owner C lose their staked tokens.</li>
          </ul>
        </motion.div>

        {/* Judging Criteria */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Judging Criteria</h2>
          <p className="text-gray-400">
            Participants will be evaluated based on several key aspects of their solutions. The goal is to create a robust, efficient, and secure decentralized arbitration system using blockchain technology and token-based mechanisms. Judges will assess each project against the following criteria:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2 mt-2">
            <li><strong>Innovation and Originality:</strong>
              <ul className="list-disc pl-5">
                <li>Novelty of Approach and Creative Use of Blockchain: How unique and creative is the solution in addressing the challenges of decentralized dispute resolution? How well does the solution leverage blockchain’s decentralized, transparent, and immutable nature? Innovative token mechanics and smart contract usage will be key points of evaluation.</li>
              </ul>
            </li>
            <li><strong>Efficiency and Scalability:</strong>
              <ul className="list-disc pl-5">
                <li>Optimized Juror Selection: How efficiently does the system handle the staking and selection of jurors? The solution should ensure fairness in the selection process while preventing performance bottlenecks, even as the number of participants and disputes increases.</li>
                <li>Scalability: Can the system scale effectively as more users, tokens, and disputes are added? Judges will look for solutions that maintain efficiency and fairness in larger, more complex ecosystems without compromising security.</li>
              </ul>
            </li>
            <li><strong>Security and Attack Resistance:</strong>
              <ul className="list-disc pl-5">
                <li>Resistance to Token Accumulation and Protection against Sybil Attack: How well does the solution prevent monopolization or manipulation by token holders? Does the solution incorporate robust mechanisms to prevent Sybil attacks? Judges will assess how effectively the system deters bad actors from creating multiple fake accounts to manipulate the voting process.</li>
              </ul>
            </li>
            <li><strong>Clarity and Ease of Use:</strong>
              <ul className="list-disc pl-5">
                <li>User Experience: How intuitive and user-friendly is the system for both jurors and disputing parties? Solutions will be judged on the clarity of the user interface and the overall experience, including how simple it is for jurors to stake tokens, vote, and resolve disputes.</li>
              </ul>
            </li>
            <li><strong>Implementation and Technical Execution:</strong>
              <ul className="list-disc pl-5">
                <li>Code Quality and Real-World Application: How clean, readable, and maintainable is the code? Efficient, well-documented, and modular code will be rewarded. How effectively can the code be deployed in reality?</li>
              </ul>
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}

export default Ps3;