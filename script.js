 // Load devotional from backend
fetch('/api/devotionals')
.then(res => res.json())
.then(data => {
  const div = document.getElementById("devotional-container");
  div.innerHTML = `<h3>${data.title}</h3><p>${data.content}</p>`;
});

// Prayer request form
document.getElementById("prayerForm").addEventListener("submit", async e => {
e.preventDefault();
const text = e.target.prayer.value;
await fetch("/api/prayer", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prayer: text }),
});
alert("Thank you! We'll pray for you.");
e.target.reset();
});

// Load testimonies
fetch('/api/testimonies')
.then(res => res.json())
.then(data => {
  const container = document.getElementById("testimony-list");
  container.innerHTML = data.map(t => `<p>"${t}"</p>`).join("");
});
