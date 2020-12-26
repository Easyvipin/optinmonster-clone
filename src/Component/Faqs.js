import React from "react";
import Collapsible from "react-collapsible";
export const Faqs = () => {
  return (
    <div className="container-2 faqs">
      <h1>Frequently Asked Questions</h1>
      <Collapsible trigger="Who should use OptinMonster?" style={{}}>
        <p class="answer">
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <Collapsible trigger="Who should use OptinMonster?" style={{}}>
        <p class="answer">
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <Collapsible trigger="Who should use OptinMonster?" style={{}}>
        <p class="answer">
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <Collapsible trigger="Who should use OptinMonster?" style={{}}>
        <p class="answer">
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
    </div>
  );
};
