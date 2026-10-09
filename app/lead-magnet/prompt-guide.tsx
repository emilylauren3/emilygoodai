import { promptPackIntro, promptPackTitle, promptSteps } from "./prompts";

export default function PromptGuide() {
  return (
    <div className="guide">
      <p className="kicker">Your download</p>
      <h2>{promptPackTitle}.</h2>
      <p className="guide-intro">{promptPackIntro}</p>
      <ol className="guide-steps">
        {promptSteps.map((step) => (
          <li key={step.n} className="prompt-card">
            <span className="prompt-num">{step.n}</span>
            <h3>{step.title}</h3>
            <p className="prompt-why">{step.why}</p>
            <div className="prompt-text">
              <p>{step.prompt}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="guide-next">
        <p>Finished the pack and want the build done for you?</p>
        <a className="button primary" href="/pricing">View services + pricing <span>↗</span></a>
      </div>
    </div>
  );
}
