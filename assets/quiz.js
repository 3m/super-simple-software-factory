/* Reusable quiz + recall components for SSSF lessons.
   Markup contract:

   <div class="quiz" data-answer="1">
     <p class="q">Question text</p>
     <button data-fb="why this is wrong">Option A</button>
     <button data-fb="why this is right">Option B</button>
   </div>

   data-answer is the zero-based index of the correct button.
   The .fb feedback element is created on demand, so lessons never have to
   remember to author it and a missing one can never silence feedback. */

function feedbackNode(quiz) {
  let fb = quiz.querySelector(".fb");
  if (!fb) {
    fb = document.createElement("p");
    fb.className = "fb";
    quiz.appendChild(fb);
  }
  return fb;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".quiz button");
  if (!btn || btn.disabled) return;
  const quiz = btn.closest(".quiz");
  const buttons = [...quiz.querySelectorAll("button")];
  const answer = Number(quiz.dataset.answer);
  const picked = buttons.indexOf(btn);
  const fb = feedbackNode(quiz);

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === answer) b.classList.add("correct");
  });
  if (picked !== answer) btn.classList.add("wrong");

  fb.textContent = (picked === answer ? "Correct. " : "Not quite. ") + (btn.dataset.fb || "");
  fb.classList.add("shown");
});

/* Free recall: type from memory, then reveal the model answer.
   <div class="recall-box"><textarea class="recall"></textarea>
     <button class="reveal">Show model answer</button>
     <div class="model" hidden>...</div></div> */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".recall-box .reveal");
  if (!btn) return;
  const model = btn.closest(".recall-box").querySelector(".model");
  model.hidden = !model.hidden;
  btn.textContent = model.hidden ? "Show model answer" : "Hide model answer";
});
