
const screens = [...document.querySelectorAll(".screen")];
const sideItems = [...document.querySelectorAll(".side-item")];

function showScreen(n){
  screens.forEach(s => s.classList.toggle("visible", s.dataset.screen === String(n)));
  sideItems.forEach(i => i.classList.toggle("active", i.dataset.goto === String(n)));
  document.querySelector("#demo").scrollIntoView({behavior:"smooth", block:"start"});
}

document.querySelectorAll("[data-next]").forEach(btn =>
  btn.addEventListener("click", () => showScreen(btn.dataset.next))
);
document.querySelectorAll("[data-back]").forEach(btn =>
  btn.addEventListener("click", () => showScreen(btn.dataset.back))
);
sideItems.forEach(btn => btn.addEventListener("click", () => showScreen(btn.dataset.goto)));

function selected(key){
  return !!document.querySelector(`input[data-key="${key}"]`)?.checked;
}

document.querySelector('input[data-key="noneRedFlags"]').addEventListener("change", e => {
  if(e.target.checked){
    ["neurovascular","dislocation","infection"].forEach(k => {
      document.querySelector(`input[data-key="${k}"]`).checked = false;
    });
  }
});
["neurovascular","dislocation","infection"].forEach(k => {
  document.querySelector(`input[data-key="${k}"]`).addEventListener("change", e => {
    if(e.target.checked) document.querySelector('input[data-key="noneRedFlags"]').checked = false;
  });
});

function generateRoute(){
  const output = document.querySelector("#routeOutput");

  if(selected("neurovascular") || selected("dislocation") || selected("infection")){
    output.innerHTML = `
      <div class="alert-result">
        <strong>Urgent assessment pathway</strong>
        One or more immediate safety concerns have been selected. This presentation should not be routed through a routine acute-knee pathway. The precise escalation process must be defined by the adopting organisation.
      </div>
      <div class="result-disclaimer">Prototype wording only. Not validated clinical guidance.</div>`;
    showScreen(4);
    return;
  }

  if(selected("fracture")){
    output.innerHTML = routeCard(
      "Trauma / fracture pathway",
      "Urgent orthopaedic assessment according to injury pattern and local trauma pathway.",
      "A fracture has been identified or is strongly suspected.",
      "Local trauma pathway / relevant national standard",
      "Prototype only — definitive urgency criteria to be agreed by the clinical governance group."
    );
  } else if(selected("extensor")){
    output.innerHTML = routeCard(
      "Urgent orthopaedic review",
      "Prompt specialist assessment through the locally configured acute orthopaedic pathway.",
      "Potential disruption of the extensor mechanism is a time-sensitive structural injury.",
      "Evidence and standards module to be populated",
      "Prototype only — thresholds require clinical validation."
    );
  } else if(selected("locking")){
    output.innerHTML = routeCard(
      "Acute knee specialist pathway",
      "Expedited specialist assessment and imaging pathway.",
      "Persistent true mechanical locking may indicate a displaced intra-articular lesion requiring timely assessment.",
      "Evidence and standards module to be populated",
      "Prototype only — this is a UI demonstrator, not clinical guidance."
    );
  } else if(selected("haemarthrosis")){
    output.innerHTML = routeCard(
      "Acute knee clinic",
      "Route to an acute knee assessment pathway with locally defined access to appropriate imaging.",
      "Rapid traumatic knee swelling can be associated with significant intra-articular injury and should trigger structured assessment rather than reassurance alone.",
      "Evidence and standards module to be populated",
      "Prototype only — pathway timing and investigation criteria require expert review and validation."
    );
  } else if(selected("patella")){
    output.innerHTML = routeCard(
      "Patellar instability pathway",
      "Structured first-time patellar instability assessment with locally configured imaging and follow-up.",
      "Patellar instability has injury-specific assessment and follow-up requirements.",
      "Evidence and standards module to be populated",
      "Prototype only — pathway criteria require expert review."
    );
  } else {
    output.innerHTML = routeCard(
      "Clinical review / local MSK pathway",
      "No high-priority prototype trigger has been selected. Use clinical judgement and the relevant local pathway.",
      "The demonstrator does not contain sufficient validated logic to recommend a more specific route.",
      "Not applicable",
      "Prototype only. Absence of a trigger here does not exclude significant injury."
    );
  }
  showScreen(4);
}

function routeCard(route, action, rationale, evidence, note){
  return `
    <div class="result-card">
      <div class="result-head">
        <span class="result-icon">→</span>
        <div><small>SUGGESTED ROUTE</small><strong>${route}</strong></div>
      </div>
      <div class="result-body">
        <div class="result-line"><span>Next step</span><p>${action}</p></div>
        <div class="result-line"><span>Why?</span><p>${rationale}</p></div>
        <div class="result-line"><span>Evidence</span><p>${evidence}</p></div>
        <div class="result-line"><span>Governance</span><p>${note}</p></div>
      </div>
    </div>
    <div class="result-disclaimer">
      Research prototype. This output is not a diagnosis, medical advice or a validated clinical recommendation.
    </div>`;
}

document.querySelector("#routeBtn").addEventListener("click", generateRoute);
document.querySelector("#printBtn").addEventListener("click", () => window.print());

document.querySelector("#resetBtn").addEventListener("click", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(i => i.checked = false);
  document.querySelector("#routeOutput").innerHTML = "";
  showScreen(1);
});
