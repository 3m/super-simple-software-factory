# Notes

## Preferences
- Communication style from the user's global config: clear, concise, actionable. Reference codes (F1, Q1, A1) for lists of 3+. No filler, no flattery.
- Applies to lessons too: dense, plain language, no motivational padding.

## Working notes
- Workspace = the SSSF repo itself, `main` branch (skill only, nothing stamped).
- The repo contains no runnable factory. To practice for real, the user must either check out the `example` branch or stamp into a target repo.
- Mission is provisional (inferred). Interview questions Q1-Q3 asked in session 1, unanswered as of lesson 1.
- Session 2: built `assets/lesson.css` + `assets/quiz.js` (shared components), lesson 0001, reference `phase-model.html`, learning record 0001.

## Workspace mechanics
- **Always open lessons with `./serve-lessons.sh`, never `open <file>.html`.**
- Cause, isolated by bisection: WKWebView (cmux's engine) grants file read access only to
  the directory of the loaded file and below. `lessons/0001.html` therefore cannot read
  `../assets/lesson.css`. Chrome permits it, which is why the two disagreed.
  Verified: same-dir CSS loads, `../sibling/` CSS does not; loading the workspace root
  first widens the grant and makes it appear to work, so results look intermittent.
  Symptom under `file://`: body `max-width` is `none`, `cssRules` throws `SecurityError`.
- Over `http://localhost:8777` everything loads. Documented globally in the `cmux-browser`
  and `teach` skills.

## Open questions for the user
- Q1: outcome wanted — stamp into a real repo / build own factory / pattern literacy only?
- Q2: level with Python, Pydantic, agent CLIs?
- Q3: is there a real repo and a recurring workflow to point this at?
